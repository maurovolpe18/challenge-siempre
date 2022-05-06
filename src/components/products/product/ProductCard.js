import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
const ProductCard = ({ product, setArrayCar, arrayCar }) => {
  const [exist, setExist] = useState(false);
  useEffect(() => {
    let findProductInCar = arrayCar.find((elem) => elem.product_id === product.product_id);
    if (findProductInCar) {
      setExist(true);
    } else {
      setExist(false);
    }
  }, [arrayCar]);

  const removeFromCar = () => {
    let array = arrayCar.filter((item) => item.product_id !== product.product_id);

    setArrayCar(array);
  };
  return (
    <div>
      <div style={{ marginBottom: "15px" }}>
        {!exist ? (
          <span onClick={() => setArrayCar([...arrayCar, product])}>
            <FontAwesomeIcon icon={faPlusCircle} fontSize={25} />
          </span>
        ) : (
          <span onClick={() => removeFromCar()}>
            <FontAwesomeIcon icon={faMinusCircle} fontSize={25} />
          </span>
        )}
      </div>
      <img
        src={product.image_url}
        style={{ height: 192, with: 192, maxWidth: "192px", zIndex: 1, position: "relative" }}
      />
      <img
        style={{
          position: "absolute",
          transform: "translate(-50%,-50%)",
          zIndex: 0,
          top: "50%",
          left: "50%",
          maxWidth: "200px",
          width: "100%",
        }}
        src={
          "https://cdn.shopify.com/s/files/1/0254/2947/5433/files/SEC-grdiente-2_1_200x.png?v=1649084978?nocache=0.853021838735107"
        }
      />
      <div style={{ display: "flex", margin: "0 auto", marginTop: "25px" }}>
        <div
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <h1 style={{ fontSize: "14px" }}>{product.name}</h1>
          <span style={{ fontSize: "10px" }}>{product.description}</span>
        </div>
        <div style={{ width: "30%", display: "flex", justifyContent: "end" }}>
          <h2 style={{ fontSize: "20px", color: "#FF5747" }}>${product.price_per_unit}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
