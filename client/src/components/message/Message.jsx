// // import React from 'react'
// // import "./message.css"
// // function Message({own}) {
// //   return (
// //     <div className={own ? 'message own':'message'}>
// //       <div className="messageTop">
// //         <img src="https://img.freepik.com/free-photo/anime-style-character-space_23-2151134100.jpg" alt="" className="messageImg" />
// //         <p className="messageText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
// //       </div>
// //       <div className="messageBottom">1 hour ago</div>
// //     </div>
// //   ) 
// // }

// // export default Message


// import "./message.css";
// import { format } from "timeago.js";


// export default function Message({ message, own }) {
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
//   return (
//     <div className={own ? "message own" : "message"}>
//       <div className="messageTop">
//         <img
//           className="messageImg"
//           src={ own ? PF + "person/me.png" : PF +"person/you1.png"}
//          // src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//           alt=""
//         />
//         <p className="messageText">{message.text}</p>
//       </div>
//       <div className="messageBottom">{format(message.createdAt)}</div>
//     </div>
//   );
// }