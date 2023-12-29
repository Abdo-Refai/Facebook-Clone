import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import PeopleOnline from "./PeopleOnline";
import LatestActivity from "../events/LatestActivity";
import Chat from "./Chat";
import Posts from "./Posts";
import Story from "./Story";

function Home() {
  return (
    <Container className="my-5 py-5">
      <Row>
        <Col xs={4} md={2}>
          <Sidebar />
        </Col>
        <Col xs={12} md={7}>
          <Story />
          <Chat />
          <Posts />
        </Col>
        <Col xs={4} md={3}>
          <PeopleOnline />
          <br />
          <LatestActivity />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
