import {
  faBookmark,
  faComment,
  faEllipsisVertical,
  faHeart,
  faPlus,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./Posts.css";
function Posts() {
  let [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/videos")
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);
  return (
    <div className="video-posts">
      <h3>Videos for You</h3>
      {videos.map((video) => {
        return (
          <div className="card" key={video.id}>
            <div className="video-heading">
              <div className="video-heading-left">
                <img src={video.image} alt="/" className="video-img" />
                <div className="info">
                  <h3>{video.name}</h3>
                  <p>{video.time}</p>
                </div>
              </div>
              <div className="video-heading-right">
                <FontAwesomeIcon icon={faPlus} className="video-color" />
                <span className="video-color">Follow</span>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </div>
            </div>
            <video controls autoPlay loop>
              <source src={video.video} type="video/mp4" />
            </video>
            <div className="body">
              <h5 className="video-title">{video.title}</h5>
              <p className="video-text">{video.desciption}</p>
            </div>
            <div className="footer">
              <div className="foot-left">
                <div>
                  <FontAwesomeIcon icon={faHeart} /> {video.like}
                </div>
                <div>
                  <FontAwesomeIcon icon={faComment} /> {video.comment}
                </div>
                <div>
                  <FontAwesomeIcon icon={faShare} /> {video.share}
                </div>
              </div>
              <div className="foot-right">
                <div>
                  <FontAwesomeIcon icon={faBookmark} /> {video.saved}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Posts;
