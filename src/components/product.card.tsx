import React from "react";
import { Card, Row, Col } from "react-bootstrap";

//import style sheet
import "./product.card.scss";

interface Args {
  img: string;
  category: string;
  price: string;
}

interface Props {
  price: string;
  category: string;
  img: string;
  add: (args: Args) => void;
}

export const Productcard: React.FC<Props> = ({
  price,
  children,
  category,
  img,
  add,
}) => {
  return (
    <Card style={{ width: "18rem" }} className="card-color my-1">
      <Card.Img
        variant="top"
        src={img}
        className="img-fluid set-img mx-auto my-2"
      />
      <Card.Body>
        <Card.Title>
          <Row>
            <Col>
              <p className="title-font-size">{category}</p>
            </Col>
            <Col>
              <p className="text-right text-dark p-1  ml-auto rounded">
                ${price}
              </p>
            </Col>
          </Row>
        </Card.Title>
        <p
          onClick={() => {
            add({ category, price, img });
            console.log(category, price, img);
          }}
          className="point text-right"
        >
          add to cart
        </p>
      </Card.Body>
    </Card>
  );
};
