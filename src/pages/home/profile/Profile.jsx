import "./profile.css"
import Topbar from "../../../components/topbar/Topbar";
import Sidebar from "../../../components/sidebar/Sidebar";

import Feed from "../../../components/feed/Feed";
import Rightbar from "../../../components/rightbar/Rightbar";


export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
    <Sidebar/>
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img className = "profileCoverImg"src="assets/rid.PNG" alt="" />
            <img className = "profileUserImg"src="assets/rid.PNG" alt="" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName"> Ridhi Jain</h4>
                <span className="profileInfoDesc"> Hello! My Friendss</span>
            </div>
        </div>
        <div className="profileRightBottom"></div>
    <Feed/>
    <Rightbar profile/>
    </div>
    </div>
    </>
  )
}
