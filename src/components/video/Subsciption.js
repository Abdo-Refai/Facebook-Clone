import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./Subscription.css";
function Subsciption() {
  const [subsciption, setSubsciption] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/subsciption")
      .then((res) => res.json())
      .then((data) => setSubsciption(data));
  }, []);
  return (
    <div className="subscrip">
      <h5 className="d-flex justify-content-between subscrip-list">
        Your Subsciption <FontAwesomeIcon icon={faEllipsisVertical} />
      </h5>
      {subsciption.map((subscribe) => {
        return (
          <div className="subscrip-box" key={subscribe.id}>
            <img src={subscribe.image} alt="/" className="subscrip-img" />
            <h5 className="subscrip-name">{subscribe.title}</h5>
          </div>
        );
      })}
      <span>See All</span>
    </div>
  );
}

export default Subsciption;
