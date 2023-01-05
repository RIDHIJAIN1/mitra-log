import "./friends.css"

export default function Friends(user) {
  return (
    <li className="sidebarFriend">
    <img className = "sidebarFriendImg"src={user?.profilePicture} alt="" />
    <span className="sidebarfriendName">{user?.username}</span>
    </li>
  )
}
