import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import ProductCard from "./product/ProductCard";

function Products({ products, setArrayCar, arrayCar }) {
  if (products.length < 1) return <h1>No hay productos</h1>;

  return (
    <Container>
      <Row className="justify-content-center">
        {products.map((product, index) => (
          <Col
            xs="8"
            md="4"
            lg="3"
            style={{
              padding: "12px",
              borderRadius: "14px",
              boxShadow: "0px 4px 4px rgb(0 0 0)",
              marginBottom: 20,
              marginRight: 15,
              background: "#FFFFFF",
              position: "relative",
            }}
          >
            <ProductCard product={product} key={index} setArrayCar={setArrayCar} arrayCar={arrayCar} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
