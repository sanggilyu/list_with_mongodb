// src/api/products.js
// import axios from "axios";

// export const getProducts = async () => {
//   const response = await axios.get("http://localhost:5000/products");
//   return response.data;
// };

// export const addProduct = async (product) => {
//   const response = await axios.post("http://localhost:5000/products", product);
//   return response.data;
// };

// export const updateProduct = async (product) => {
//   const response = await axios.put(
//     `http://localhost:5000/products/${product._id}`,
//     product
//   );
//   return response.data;
// };

// src/api/products.js
import axios from "axios";

const BASE_URL = "http://118.221.25.209:5000"; // 외부에서 접근 가능한 서버 주소

export const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post(`${BASE_URL}/products`, product);
  return response.data;
};

export const updateProduct = async (product) => {
  const response = await axios.put(
    `${BASE_URL}/products/${product._id}`,
    product
  );
  return response.data;
};
