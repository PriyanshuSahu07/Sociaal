import React from 'react'
import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const[user,setUser]=useState({});
  const username  = useParams().username

  useEffect(()=>{
        const fetchUser =async()=>{
          const res = await axios.get(`/users?username=${username}`)
          setUser(res.data);
        }
        fetchUser();
      },[username])
  return (
    <>
    <Topbar/>
      <div className="profile">
       <Sidebar/>
       <div className="profileRight">
        <div className="profileRightTop">
            <div className='profileCover'>
             <img 
             className='profileCoverImg' src={user.coverPicture ? PF+user.coverPicture:PF+"person/nocover.jpeg"} alt="" />
             <img 
             className='profileUserImg' src={user.profilePicture ? PF+user.profilePicture:PF+ "person/noavatar.png"}alt="" />
            </div>
            
        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">{user.username}</h4>
            <span className="profileInfoDesc">{user.desc}</span>

        </div>
        <div className="profileRightBottom">
         <Feed username={username} />
         <Rightbar user={user}/>
        </div>
       
       </div>
       
      </div>
    </>  
  )
}

export default Profile
