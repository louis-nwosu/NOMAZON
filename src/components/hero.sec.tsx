import { SiteNavbar } from "./navbar";
import { HeroBody } from "./hero.body";
import { Container, Row, Col } from "react-bootstrap";

//import style
import "./hero.scss";

export const Hero = () => {
  return (
    <Container fluid>
      <Row className="bg-img">
        <Col>
          <SiteNavbar />
          <HeroBody />
        </Col>
      </Row>
    </Container>
  );
};
