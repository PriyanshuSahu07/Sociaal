// import Home from "./pages/home/Home";
//  import Login from "./pages/login/Login";
//  import Profile from "./pages/profile/Profile";
//  import Register from "./pages/register/Register";
//  import { useContext } from "react";
//  import { AuthContext } from "./context/AuthContext";
 
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Redirect,
//   Route
// } from "react-router-dom";

// function App() {
//   const {user} = useContext(AuthContext)
//  return (
//   <Router>
//     <Routes>
//       <Route path="/" element={user ? <Home />:<Register/>} />
//       <Route path="/login" element={user ? <Redirect to="/"/> : <Login />} />
//       <Route path="/register" element={user ? <Redirect to="/"/> :<Register />}  />
//       <Route path="/profile/:username" element={<Profile />} />
//     </Routes>
//   </Router>
// );
// }
// export default App;



// import { AuthContext } from "./context/AuthContext";
// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import Profile from "./pages/profile/Profile";
// import Register from "./pages/register/Register";
// // import Messenger from "./pages/messenger/Messenger"; 
// import React, { useContext } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate
// } from "react-router-dom";

// function App() {

//   const {user} =useContext(AuthContext);
//   console.log(user);
//   return (
//       <Router>
//       <Routes>
//       <Route  path='/' element={user ?<Home/> :<Register/>} />
//       <Route path='/login' element={user?<Navigate to="/"/> :<Login/>} />
//       <Route path='/register' element={user?<Navigate to="/"/> :<Register/>} />
//       {/* <Route path='/messenger' element={!user?<Navigate to="/"/> :<Messenger/>} /> */}
//       <Route path='/profile/:username' element={<Profile/>} />
//       </Routes>
//       </Router>
//   );
// }

// export default App;

// import { AuthContext } from "./context/AuthContext";
// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import Profile from "./pages/profile/Profile";
// import Register from "./pages/register/Register";
// import React, { useContext } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// function App() {
//   const { user } = useContext(AuthContext);
//   console.log(user);
  
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={user ? <Home /> : <Register />} />
//         {/* Use Link to navigate to login page */}
//         <Route path="/login" element={user ? <Link to="/" /> : <Login />} />
//         {/* Use Link to navigate to register page */}
//         <Route path="/register" element={user ? <Link to="/" /> : <Register />} />
//         {/* Use Link to navigate to profile page */}
//         <Route path="/profile/:username" element={<Profile />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger"; 
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {

  const {user} =useContext(AuthContext);
  console.log(user);
  return (
      <Router>
      <Routes>
      <Route path='/' element={user ?<Home/> :<Register/>} />
      <Route path='/login' element={user?<Navigate to="/"/> :<Login/>} />
      <Route path='/register' element={user?<Navigate to="/"/> :<Register/>} />
      <Route path='/messenger' element={!user?<Navigate to="/"/> :<Messenger/>} />
      <Route path='/profile/:username' element={<Profile/>} />
      </Routes>
      </Router>
  );
}

export default App;