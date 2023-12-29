import { useEffect, useState } from "react";
import "./Posts.css";

function Posts() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <>
      <div className="row">
        {events.map((e) => {
          return (
            <div className="card col-5 mx-3 my-3" key={e.id}>
              <img
                src={e.mainImage}
                className="card-img-top post-img"
                alt="/"
              />
              <div className="card-body">
                <p className="card-text post-date">
                  {" "}
                  AUG <br />
                  {e.date}{" "}
                </p>
                <p className="card-text post-time"> {e.time} </p>
                <h5 className="card-title post-title">{e.title}</h5>
                <p className="card-text post-address"> {e.address} </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  <img src={e.image1} alt="/" className="post-foot-img" />
                  <img src={e.image2} alt="/" className="post-foot-img" />
                  <img src={e.image3} alt="/" className="post-foot-img" />
                  <img src={e.image4} alt="/" className="post-foot-img" />
                </small>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Posts;
