import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { faMinusCircle, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const ModalCar = ({ handleShow, handleClose, show, arrayCar, setArrayCar }) => {
  const handleRemoveProduct = (product) => {
    let array = arrayCar.filter((item) => item.product_id !== product.product_id);

    setArrayCar(array);
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "end", margin: "0 40px 40px 0" }}>
        {arrayCar.length > 0 ? (
          <div
            style={{
              height: 25,
              width: 25,
              borderRadius: "50%",
              backgroundColor: "red",
              position: "absolute",
              top: "30px",
              right: "30px",
            }}
          >
            {arrayCar.length}
          </div>
        ) : (
          <div
            style={{
              height: 25,
              width: 25,
              borderRadius: "50%",
              backgroundColor: "grey",
              position: "absolute",
              top: "30px",
              right: "30px",
            }}
          >
            {arrayCar.length}
          </div>
        )}
        <FontAwesomeIcon icon={faShoppingCart} fontSize={35} onClick={handleShow}>
          Launch demo modal
        </FontAwesomeIcon>
      </div>
      <Modal show={show} onHide={handleClose}>
        {arrayCar.length > 0 ? (
          <div style={{ padding: "15px" }}>
            {arrayCar.map((product) => {
              return (
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={product.image_url} style={{ height: "120px", width: "120px" }} />
                    <div style={{ display: "flex", alignItems: "start" }}>
                      <div>
                        <h1 style={{ fontSize: "14px" }}>{product.name}</h1>
                        <span style={{ fontSize: "10px" }}>{product.description}</span>

                        <h2 style={{ fontSize: "20px", color: "#FF5747" }}>${product.price_per_unit}</h2>
                      </div>
                    </div>
                    <div
                      style={{
                        marginBottom: "15px",
                        display: "flex",
                        justifyContent: "end",
                        width: "100%",
                        marginRight: "20px",
                      }}
                    >
                      <span onClick={() => handleRemoveProduct(product)}>
                        <FontAwesomeIcon icon={faMinusCircle} fontSize={25} />
                      </span>
                    </div>
                  </div>
                  <div style={{ height: 1, width: "100%", margin: 5, background: "gray" }}></div>
                </div>
              );
            })}
            <div>
              <h1>Total: {arrayCar.reduce((a, b) => parseInt(a) + parseInt(b["price_per_unit"] || 0), 0)}</h1>
            </div>
          </div>
        ) : (
          <div style={{ padding: 50 }}>
            <h1>No hay productos</h1>
          </div>
        )}
      </Modal>
    </>
  );
};

export default ModalCar;
