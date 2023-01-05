import "./post.css"
import { Users } from "../../dummyData"
import { useState } from "react"

export default function Post({post}) {
  
  const [likes,setLike] = useState(post?.likes)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler = ()=>{
    setLike(isLiked? likes-1 : likes+1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <img className= "postProfileImg"src={Users.filter((u)=> u.id === post?.userId)[0]?.profilePicture} alt="" />
                <span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0]?.username}</span>
                <span className="postDate">{post?.date}</span>
              </div>
              <div className="postTopRight">

              </div>
            </div>
            <div className="postCenter">
              <span className="postText">{post?.desc}</span>
              <img className = "postImg"src={post?.photo} alt="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img className="likeIco" src="assets/5.jpg" onClick={likeHandler} alt="" />
                <img className="likeIcon" src="assets/4.jpg"onClick={likeHandler} alt="" />
                <span className="postLikeCounter">{likes}</span>
              </div>
              <div className="postBottomRight">

                <span className="postCommentText">{post?.comments}</span>
              </div>
            </div>
        </div>
     
    </div>
  )
}
