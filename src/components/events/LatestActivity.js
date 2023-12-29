import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from "../Imgs/latest activity.jpg";
import image2 from "../Imgs/UX-UI-Design-Blog@2x.webp";
import image3 from "../Imgs/avatar-01.png";
import "./LatestActivity.css";

function LatestActivity() {
  return (
    <div className="latest-activity">
      <h5 className="d-flex justify-content-between latest-heading">
        Latest Activity <FontAwesomeIcon icon={faEllipsisVertical} />
      </h5>
      <div className="parent">
        <div className="latest-box">
          <img src={image1} alt="/" className="latest-img" />
          <h6>
            Jacob Geidt, Corey Culhane and 80 others{" "}
            <span>likes your post</span>
          </h6>
        </div>
        <div className="latest-box">
          <img src={image2} alt="/" className="latest-img" />
          <h6>
            Matrin Botosh <span>tag you in post comment: </span> @Jalyon{" "}
            <span>this design is amazing work</span>
          </h6>
        </div>
        <div className="latest-box">
          <img src={image3} alt="/" className="latest-img" />
          <div>
            <h6>
              Carter <span>started following you</span>
            </h6>
            <button type="button" className="btn btn-primary btn-sm my-2 mx-2">
              Follow Back
            </button>
            <button type="button" className="btn btn-light btn-sm my-2 mx-2">
              Discard
            </button>
          </div>
        </div>
        <div className="latest-box">
          <img src={image1} alt="/" className="latest-img" />
          <h6>
            Corey Culhane <span>liked your photo</span>
          </h6>
        </div>
      </div>
      <span>View All</span>
    </div>
  );
}

export default LatestActivity;
