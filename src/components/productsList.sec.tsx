import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Productcard } from "./product.card";
import { useSelector, useDispatch } from "react-redux";
import { CartState } from "../store/reducer";
import { loadProductFunc, addToCart } from "../store/actions";
import Loader from "./Loader";

export const ProductList = () => {
  //get the products from the store
  const products = useSelector<CartState, CartState["products"]>(
    (state) => state.products
  );
  const loading = useSelector<CartState, boolean>((state) => state.loading);

  //load the products fom the API
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadProductFunc());
    // .then(() => {
    //     setLoading(false)
    // })
  }, []);
  ///define a function to 'add to cart'
  //define the interface, or signature of the funtion args
  interface Args {
    img: string;
    category: string;
    price: string;
  }
  const addToMyCart = (args: Args) => {
    dispatch(addToCart(args));
  };
  return (
    <Container>
      {loading && <Loader />}
      <Row className="my-5">
        {products.map((product: any) => {
          return (
            <Col className="my-3">
              <Productcard
                price={product.price}
                category={product.title}
                img={product.image}
                add={addToMyCart}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
