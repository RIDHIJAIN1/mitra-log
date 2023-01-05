import "./sidebar.css"
// import { Users } from "../../dummyData"
// import Friends from "../friends/Friends"


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
            <li className="sidebarListItem">
            <i className="fa-solid fa-rss">Feed</i>
            <span className="sidebarListItemText"></span>
            </li>
            
            <li className="sidebarListItem">
            <i className="fa-solid fa-message-lines">Chats</i>
            <span className="sidebarListItemText"></span>
            </li>
            <li className="sidebarListItem">
            <i className="fa-sharp fa-solid fa-video">Videos</i>
            <span className="sidebarListItemText"></span>
            </li>
            <li className="sidebarListItem">
            <i className="fa-solid fa-user-group">Groups</i>
            <span className="sidebarListItemText"></span>
            </li>
            <li className="sidebarListItem">
            <i className="fa-solid fa-bookmark">Bookmarks</i>
            <span className="sidebarListItemText"></span>
            </li>
            <li className="sidebarListItem">
            <i className="fa-sharp fa-solid fa-circle-question">Question</i>
            <span className="sidebarListItemText"></span>
            </li>
            <li className="sidebarListItem">
            <i className="fa-solid fa-user-doctor">Jobs</i>
            <span className="sidebarListItemText"></span>
            </li>
            <li className="sidebarListItem">
            <i className="fa-solid fa-calendar-week">Events</i>
            <span className="sidebarListItemText"></span>
            </li>
            <li className="sidebarListItem">
            <i className="fa-solid fa-graduation-cap">Courses</i>
            <span className="sidebarListItemText"></span>
            </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarhr"/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/assets/a.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Akshay Vijayvariya</span>
          </li>,

          <li className="sidebarFriend">
            <img src="/assets/rid.PNG" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Ridhi Bordiya</span>
          </li>,
          <li className="sidebarFriend">
            <img src="/assets/kat.PNG" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Krati Jain</span>
          </li>,
          <li className="sidebarFriend">
            <img src="/assets/khushi.PNG" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Khushi Jain</span>
          </li>,
          <li className="sidebarFriend">
            <img src="/assets/a.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Akshay Vijayvariya</span>
          </li>,
          <li className="sidebarFriend">
            <img src="/assets/m2.PNG" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Mayur Dewani</span>
          </li>,
          <li className="sidebarFriend">
            <img src="/assets/r.PNG" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Rudransh Joshi</span>
          </li>,
          <li className="sidebarFriend">
            <img src="/assets/v.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Vidushi Ajmera</span>
          </li>,
          <li className="sidebarFriend">
            <img src="/assets/1.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Aditya seal</span>
          </li>,
          <li className="sidebarFriend">
            <img src="/assets/2.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Ariana Maheshwari</span>
          </li>,
          <li className="sidebarFriend">
            <img src="/assets/3.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Benkarora Aryan</span>
          </li>,
          <li className="sidebarFriend">
            <img src="/assets/4.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Chaman katariya</span>
          </li>,

          {/* {Users.map((u)=>(
            <Friends key ={u.id}user = {u}/>
          ))} */}
        </ul>
      </div>
    </div>
  )
}
