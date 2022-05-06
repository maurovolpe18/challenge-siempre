import React, { useEffect, useState } from "react";

import Select from "react-select";
import CategoriesApi from "../../services/CategoriesService";
import ProductsApi from "../../services/ProductsServices";
import ModalCar from "../modal";
import Products from "../products";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [options, setOptions] = useState([{ value: "Todos", label: "Todos" }]);
  const [selectedOption, setSelectedOption] = useState({ value: "Todos", label: "Todos" });
  const [show, setShow] = useState(false);
  const [arrayCar, setArrayCar] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    if (categories.length > 0) {
      categories.forEach((categorie) => options.push({ value: categorie, label: categorie }));
    }
  }, [categories]);

  const getProducts = async () => {
    let getProducts = ProductsApi.getProducts();
    let getCategories = CategoriesApi.getCategories();
    const PromisesArray = [getProducts, getCategories];
    const [productsResponse, categoriesResponse] = await Promise.all(PromisesArray);
    setProducts(productsResponse.data);
    setCategories(categoriesResponse.data);
  };

  const productsFilter = () => {
    if (selectedOption.value === "Todos") return products;
    return products.filter((elem) => elem.categories.includes(selectedOption.value));
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <ModalCar
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        arrayCar={arrayCar}
        setArrayCar={setArrayCar}
      />
      <div style={{ width: "70%", margin: "0 auto", zIndex: 999, position: "relative" }}>
        <Select value={selectedOption} onChange={setSelectedOption} options={options} />
      </div>
      <div style={{ marginTop: "50px" }}>
        <Products products={productsFilter()} setArrayCar={setArrayCar} arrayCar={arrayCar} />
      </div>
    </div>
  );
}

export default HomeScreen;
