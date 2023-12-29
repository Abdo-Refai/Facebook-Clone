import {
  faEllipsisVertical,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./SuggestEvent.css";

function SuggestEvent() {
  const [suggestEvent, setSuggestEvent] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/watchlist")
      .then((res) => res.json())
      .then((data) => setSuggestEvent(data));
  }, []);
  return (
    <div className="suggestEvent">
      <h5 className="d-flex justify-content-between suggest-heading">
        Suggested for You <FontAwesomeIcon icon={faEllipsisVertical} />
      </h5>
      {suggestEvent.map((suggestevent) => {
        return (
          <div className="box" key={suggestevent.id}>
            <img src={suggestevent.image} alt="/" className="suggest-img" />
            <div>
              <h5 className="suggest-name">{suggestevent.name}</h5>
              <p className="suggest-suggest">{suggestevent.suggest}</p>
            </div>
            <FontAwesomeIcon icon={faUserPlus} className="suggest-circleplay" />
          </div>
        );
      })}
      <span>See All</span>
    </div>
  );
}

export default SuggestEvent;
