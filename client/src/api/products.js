import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get("http://localhost:5000/products");
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post("http://localhost:5000/products", product);
  return response.data;
};

export const updateProduct = async (product) => {
  const response = await axios.put(
    `http://localhost:5000/products/${product._id}`,
    product
  );
  return response.data;
};
