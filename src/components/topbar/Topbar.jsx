import "./topbar.css"

export default function Topbar() {
  return (
    <div className = "topbarContainer">
        <div className="topbarLeft">
            <span className="logo">M I T R A - L O G</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input placeholder="Search for friend , post or video" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
         <div className="topbarLinks">

            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
         </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
            <i className="fa-solid fa-user"></i>
            <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
            <i className="fa-solid fa-envelope"></i>
            <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
            <i className="fa-solid fa-bell"></i>
            <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src="/assets/1.jpg" alt="" className="topbarImg" />
        </div>
      
    </div>
  )
}
