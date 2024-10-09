// import React from 'react'
// import './conversation.css'
// function Conversation() {
//   return (
//     <div>
//       <div className="conversation">
//         <img src="https://img.freepik.com/free-photo/anime-style-character-space_23-2151134100.jpg" alt="" className="conversationImg" />
//         <span className="conversationName">Rose Tale</span>
//       </div>
//     </div>
//   )  
// }

// export default Conversation



// // import axios from "axios";
// // import { useEffect, useState } from "react";
// // import "./conversation.css";

// // export default function Conversation({ conversation, currentUser }) {
// //   const [user, setUser] = useState(null);
// //   const PF = process.env.REACT_APP_PUBLIC_FOLDER;

// //   useEffect(() => {
// //     const friendId = conversation.members.find((m) => m !== currentUser._id);

// //     const getUser = async () => {
// //       try {
// //         const res = await axios("/users?userId=" + friendId);
// //         setUser(res.data);
// //       } catch (err) {
// //         console.log(err);
// //       }
// //     };
// //     getUser();
// //   }, [currentUser, conversation]);

// //   return (
// //     <div className="conversation">
// //       <img
// //         className="conversationImg"
// //         src={
// //           user.profilePicture
// //             ? PF + user.profilePicture
// //             : PF + "person/noavatar.png"
// //         }
// //         alt=""
// //       />
// //       <span className="conversationName">{user.username}</span>
// //     </div>
// //   );
// // }