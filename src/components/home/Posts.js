import {
  faBookmark,
  faComment,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./Posts.css";
import "./Chat.css";

function Posts() {
  let [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div className="home-post-parent">
      {posts.map((post) => {
        return (
          <div className="card mb-3" key={post.id}>
            <div className="home-heading">
              <div className="home-heading-left">
                <img src={post.mainImage} alt="/" className="home-main-image" />
                <div className="info">
                  <h3>{post.name}</h3>
                  <p>{post.time}</p>
                </div>
              </div>
            </div>
            <video controls autoPlay loop>
              <source src={post.video} type="video/mp4" />
            </video>
            <div className="footer">
              <div className="foot-left">
                <div>
                  <FontAwesomeIcon icon={faHeart} /> {post.like}
                </div>
                <div>
                  <FontAwesomeIcon icon={faComment} /> {post.comment}
                </div>
                <div>
                  <FontAwesomeIcon icon={faShare} /> {post.share}
                </div>
              </div>
              <div className="foot-right">
                <div>
                  <FontAwesomeIcon icon={faBookmark} /> {post.saved}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {posts.map((post) => {
        return (
          <div className="card mb-3" key={post.id}>
            <div className="home-heading">
              <div className="home-heading-left">
                <img src={post.mainImage} alt="/" className="home-main-image" />
                <div className="info">
                  <h3>{post.name}</h3>
                  <p>{post.time}</p>
                </div>
              </div>
            </div>
            <img src={post.image} alt="/" className="home-post-image" />
            <div className="footer">
              <div className="foot-left">
                <div>
                  <FontAwesomeIcon icon={faHeart} /> {post.like}
                </div>
                <div>
                  <FontAwesomeIcon icon={faComment} /> {post.comment}
                </div>
                <div>
                  <FontAwesomeIcon icon={faShare} /> {post.share}
                </div>
              </div>
              <div className="foot-right">
                <div>
                  <FontAwesomeIcon icon={faBookmark} /> {post.saved}
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
