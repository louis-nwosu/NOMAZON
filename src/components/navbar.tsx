import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { CartState } from "../store/reducer";

//import card
import { Productcard } from "./product.card";

//import react bootstrap components
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Button,
  Popover,
} from "react-bootstrap";

export const SiteNavbar = () => {
  const cartproducts = useSelector<CartState, CartState["cart"]>(
    (state) => state.cart
  );
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3"></Popover.Title>
      <Popover.Content style={{ height: "50vh", overflowY: "scroll" }}>
        {cartproducts.map((product) => {
          return (
            <div className="d-flex align-items-center p-3">
              <Productcard
                price={product.price}
                category={product.category}
                img={product.img}
                add={() => {}}
              />
            </div>
          );
        })}
      </Popover.Content>
    </Popover>
  );

  return (
    <React.Fragment>
      <Container>
        <Row md={10} className="mx-auto">
          <Col>
            <Navbar bg="transparent" className="p-5 fixed-top">
              <Navbar.Brand href="#home" className="text-light">
                Nomazone
              </Navbar.Brand>
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Login</Nav.Link>
                <Nav.Link href="#pricing">
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom-end"
                    overlay={popover}
                  >
                    <p className="h3 mx-1" style={{ cursor: "pointer" }}>
                      <MdAddShoppingCart />
                    </p>
                  </OverlayTrigger>
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
