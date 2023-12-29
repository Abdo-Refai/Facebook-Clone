import { useEffect, useState } from "react";
import image1 from "../Imgs/avatar-01.png";
import "./Story.css";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ViewStory from "./ViewStory";

function Story() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/story")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  const [activeStory, setActiveStory] = useState(null);

  return (
    <>
      <div className="story-parent">
        <div className="story-box">
          <img
            src={image1}
            alt="/"
            className="story-img your-story-img"
            onClick={(e) => setActiveStory(e.target)}
          />
          <span className="story-name">Your Story</span>
          <div>
            <FontAwesomeIcon icon={faCirclePlus} className="story-icon" />
          </div>
        </div>
        {stories.map((story) => {
          return (
            <div key={story.id} className="story-box">
              <img
                src={story.image}
                alt="/"
                className="story-img"
                onClick={() => setActiveStory(story)}
              />
              <span className="story-name"> {story.name} </span>
            </div>
          );
        })}
      </div>

      {activeStory && (
        <ViewStory
          story={activeStory}
          closePopup={() => setActiveStory(null)}
        />
      )}
    </>
  );
}

export default Story;
