const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer")
const cors = require("cors");
const path = require("path");

const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts");
dotenv.config();




mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log("MongoDB Connected")).catch((err)=> console.log(err));

app.use("/images",express.static(path.join(__dirname,"public/images")));

//middleware
 app.use(express.json());
 app.use(helmet());
app.use(morgan("common"));

app.use(
    cors({
          origin: "*"
    }),
);


 app.use("/api/users",userRoute);
 app.use("/api/auth",authRoute);
 app.use("/api/posts",postRoute);
app.use("/api/messages",messageRoute);
app.use("/api/conversations",conversationRoute)
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/images");
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name);
    },
});
const upload = multer({storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    try{
        return res.status(200).json("File uploaded successfully.");
    }catch(err){
        console.log(err);
    }
})

app.listen(8800,()=>{
         console.log("Backend server is running!")
     }); 