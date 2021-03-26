import { Container, Row, Col } from "react-bootstrap";

export const HeroBody = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <p className="display-1 text-center text-light font-weight-bold">Product Hunt</p>
          <p className="text-center font-weight-bold text-light">Browse our store to get the best deals!</p>
        </Col>
      </Row>
    </Container>
  );
};
