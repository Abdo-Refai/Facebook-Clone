import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import WatchList from "./WatchList";
import Subsciption from "./Subsciption";
import Posts from "./Posts";

function Video() {
  return (
    <Container className="py-5 my-5">
      <Row>
        <Col xs={4} md={2}>
          <Sidebar />
        </Col>
        <Col xs={12} md={7}>
          <Posts />
        </Col>
        <Col xs={4} md={3}>
          <WatchList />
          <br />
          <Subsciption />
        </Col>
      </Row>
    </Container>
  );
}

export default Video;
