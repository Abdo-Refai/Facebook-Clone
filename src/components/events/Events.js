import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import SuggestEvent from "./SuggestEvent";
import LatestActivity from "./LatestActivity";
import {
  faArrowDownWideShort,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Events.css";
import Posts from "./Posts";

function Events() {
  return (
    <Container className="py-5 my-5">
      <Row>
        <Col xs={4} md={2}>
          <Sidebar />
        </Col>
        <Col xs={12} md={7}>
          <div className="d-flex justify-content-between event-heading">
            <h3 className="">Upcomming Events</h3>
            <div className="event-recent">
              <span className="d-flex">
                Sort by: <p>Most Recent </p>
                <FontAwesomeIcon icon={faCaretDown} className="event-down" />
                <FontAwesomeIcon
                  icon={faArrowDownWideShort}
                  className="event-down"
                />
              </span>
            </div>
          </div>
          <Posts />
        </Col>
        <Col xs={4} md={3}>
          <SuggestEvent />
          <br />
          <LatestActivity />
        </Col>
      </Row>
    </Container>
  );
}

export default Events;
