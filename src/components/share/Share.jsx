import "./share.css"

export default function Share() {
  return (
    <div className="share">
     <div className="shareWrapper">

        <div className="shareTop">
            <img className = "shareProfileImg"src="assets/1.jpg" alt="" />
            <input placeholder="What's on your mind?"
             className="shareInput" />

        </div>
        <hr className="shareHr"/>
            <div className="shareButton">
                <div className="shareOptions">
                    <div className="shareOption">
                    <i className="fa-sharp fa-solid fa-photo-film"></i>
                        <span className="shareOptionText">Photo or video</span>
                    </div>
                    <div className="shareOption">
                    <i className="fa-solid fa-tag"></i>
                        <span className="shareOptionText">Tags</span>
                    </div>
                    <div className="shareOption">
                    <i className="fa-solid fa-location-dot"></i>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                    <i className="fa-solid fa-face-smile"></i>
                        <span className="shareOptionText">Emoji</span>
                    </div>
                    <button className="shareBotton">Share</button>
                </div>

               
            </div>
       
     </div>
     
    </div>
  )
}
