import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const url =
        selectedCategory === "all"
          ? "https://fakestoreapi.com/products"
          : `https://fakestoreapi.com/products/category/${selectedCategory}`;
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, [selectedCategory]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <div className="product-main">
      <h2 className="head">Products</h2>
      <div className="filter"> <h2 className="filter-by">Filter</h2>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat} className="option">
              {cat}
            </option>
          ))}
        </select>
        {loading ? (
          <p>Loading Products...</p>
        ) : (
          <div className="products-list">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">Price: ${product.price}</p>
                <Link to={`/product/${product.id}`} className="product-button">
                  View Details
                  </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
