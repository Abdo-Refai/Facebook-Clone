import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBookmark,
  faChevronDown,
  faMagnifyingGlass,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Image } from "react-bootstrap";
import "./Navbar.css";
import image1 from "../Imgs/avatar-01.png";
import NavbarForm from "./Navbar-form";
import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <Navbar className="navbar justify-content-between position-fixed">
      <Link className="d-flex align-items-center px-4 a-href" to={"/"}>
        <FontAwesomeIcon icon={faShareNodes} className="share" />
        <h5 className="text">WeShare</h5>
      </Link>
      <Col>
        <form className="form d-flex align-items-center">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="glass" />
          <input
            type="text"
            placeholder="Search"
            onChange={() =>
              document.querySelector(".links").classList.add("opacity")
            }
            onClick={() =>
              document.querySelector(".links").classList.toggle("opacity")
            }
          />
          <NavbarForm />
        </form>
      </Col>
      <Col className="d-flex align-items-center justify-content-center">
        <FontAwesomeIcon icon={faBell} className="bell" />
        <FontAwesomeIcon icon={faBookmark} className="bookmark" />
        <Image src={image1} alt="/" className="img" />
        <h5 className="text">Jakob Botoch</h5>
        <FontAwesomeIcon icon={faChevronDown} className="down" />
      </Col>
    </Navbar>
  );
}
export default AppNavbar;
