import Api from "../config/axios";

const ProductsApi = {
  getProducts() {
    return Api.get("/products");
  },
};

export default ProductsApi;
