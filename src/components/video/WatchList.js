import {
  faCirclePlay,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./WatchList.css";

function WatchList() {
  const [watchlist, setWatchlist] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/watchlist")
      .then((res) => res.json())
      .then((data) => setWatchlist(data));
  }, []);
  return (
    <div className="watchlist">
      <h5 className="d-flex justify-content-between headinglist">
        Your Watchlist <FontAwesomeIcon icon={faEllipsisVertical} />
      </h5>
      {watchlist.map((wl) => {
        return (
          <div className="box" key={wl.id}>
            <img src={wl.image} alt="/" className="watch-img" />
            <div>
              <h5 className="watch-name">{wl.name}</h5>
              <p className="watch-views">{wl.views}</p>
            </div>
            <FontAwesomeIcon icon={faCirclePlay} className="watch-circleplay" />
          </div>
        );
      })}
      <span>See All</span>
    </div>
  );
}

export default WatchList;
