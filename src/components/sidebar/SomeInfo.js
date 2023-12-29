import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from "../Imgs/avatar-01.png";
import "./SomeInfo.css";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function SomeInfo() {
  return (
    <div className="parent">
      <div className="some-info">
        <div className="box d-flex">
          <img src={image1} alt="/" className="info-img" />
          <h6>
            Jakob Botosh <br /> <span>@jakobbtsh</span>
          </h6>
          <FontAwesomeIcon icon={faCircleCheck} className="check" />
        </div>
        <div className="box d-flex">
          <p>
            2.3k <br /> <span>Follower</span>
          </p>
          <p>
            235 <br /> <span>Following</span>
          </p>
          <p>
            80 <br /> <span>Post</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SomeInfo;
