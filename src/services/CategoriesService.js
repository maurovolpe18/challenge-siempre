import Api from "../config/axios";

const CategoriesApi = {
  getCategories() {
    return Api.get("/categories");
  },
};

export default CategoriesApi;
