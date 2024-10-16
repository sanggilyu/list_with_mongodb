import React, { useState, useEffect } from "react";
import { getProducts, addProduct, updateProduct } from "../api/products";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    code: "",
    name: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);

  const handleSelect = (product) => {
    if (selectedProducts.includes(product)) {
      setSelectedProducts(selectedProducts.filter((p) => p !== product));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    addProduct(newProduct)
      .then((newProd) => setProducts([...products, newProd]))
      .catch(console.error);
    setNewProduct({ code: "", name: "", price: "", description: "" });
  };

  const handleUpdateProduct = (product) => {
    updateProduct(product)
      .then((updatedProd) => {
        setProducts(
          products.map((p) => (p._id === updatedProd._id ? updatedProd : p))
        );
      })
      .catch(console.error);
  };

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <input type="checkbox" onChange={() => handleSelect(product)} />
            <input
              type="text"
              value={product.code}
              onChange={(e) =>
                handleUpdateProduct({ ...product, code: e.target.value })
              }
            />
            <input
              type="text"
              value={product.name}
              onChange={(e) =>
                handleUpdateProduct({ ...product, name: e.target.value })
              }
            />
            <input
              type="number"
              value={product.price}
              onChange={(e) =>
                handleUpdateProduct({
                  ...product,
                  price: parseFloat(e.target.value),
                })
              }
            />
            <input
              type="text"
              value={product.description}
              onChange={(e) =>
                handleUpdateProduct({ ...product, description: e.target.value })
              }
            />
          </li>
        ))}
      </ul>

      <h2>제품 추가</h2>
      <input
        type="text"
        name="code"
        placeholder="코드"
        value={newProduct.code}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="name"
        placeholder="이름"
        value={newProduct.name}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="price"
        placeholder="가격"
        value={newProduct.price}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="설명"
        value={newProduct.description}
        onChange={handleInputChange}
      />
      <button onClick={handleAddProduct}>입력 완료</button>

      <h2>선택된 제품 목록</h2>
      <ul>
        {selectedProducts.map((product) => (
          <li key={product._id}>
            {product.name}: {product.price}
          </li>
        ))}
      </ul>

      <h3>선택된 제품 가격 합계</h3>
      <p>{selectedProducts.reduce((sum, product) => sum + product.price, 0)}</p>
    </div>
  );
}

export default ProductList;
