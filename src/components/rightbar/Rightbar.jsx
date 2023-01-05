import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {

  const HomeRightBar = ()=>{
    return(
      <>
      <div className="birthdayContainer">
          <img className = "birthdayImg"src="assets/10.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster </b>and <b>3 other friend</b> have a birthday today</span>
        </div>
        <img className = "rightBarAd"src="assets/7.webp" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u)=>(
            <Online key = {u.id} user = {u}/>
          ))}
           
        </ul>
      </>
    )
  };

  const ProfileRightbar = () => {
    return(
      <>
      <h4 className="rightbarTitle">User Information </h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Country :</span>
          <span className="rightbarInfoKey">India</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From :</span>
          <span className="rightbarInfoKey">Bhilwara</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship Status :</span>
          <span className="rightbarInfoKey">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends </h4>
      <div className="rightbarFollowings">
        <div className="rightbarfollowing">
          <img src="assets/kat.PNG" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Krati Jain</span>
        </div>
        <div className="rightbarfollowing">
          <img src="assets/khushi.PNG" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Khushi Jain</span>
        </div>
        <div className="rightbarfollowing">
          <img src="assets/v.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Vidushi Ajmera</span>
        </div>
        <div className="rightbarfollowing">
          <img src="assets/m.PNG" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Mayur Dewani</span>
        </div>
        <div className="rightbarfollowing">
          <img src="assets/r.PNG" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Rudransh Joshi</span>
        </div>
        <div className="rightbarfollowing">
          <img src="assets/a.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Akshay Vijayvargiya</span>
        </div>
        
      </div>
      </>
    )
  }
   return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightBar/>}
       
        </div>
    </div>
  )
   }
