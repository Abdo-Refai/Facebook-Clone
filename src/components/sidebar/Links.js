import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Links.css";
import {
  faCalendarDay,
  faCartShopping,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Links() {
  return (
    <div className="link-parent">
      <ul className="list-unstyled">
        <li>
          <Link className="link-icon" to={"/events"}>
            <FontAwesomeIcon icon={faCalendarDay} /> Event -
          </Link>
        </li>
        <li>
          <Link className="link-icon" to={"/video"}>
            <FontAwesomeIcon icon={faVideo} /> Watch Videos
          </Link>
        </li>
        <li>
          <Link className="link-icon" to={"/marketplace"}>
            <FontAwesomeIcon icon={faCartShopping} /> Marketplace
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Links;
