import { useState } from "react";

import "./App.css";
import { Navigate, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/products" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/products" />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/products"
          element={isAuthenticated ? <Products /> : <Navigate to="/login" />}
        />
        <Route
          path="/product/:id"
          element={
            isAuthenticated ? <ProductDetail /> : <Navigate to="/login" />
          }
        />{" "}
        <Route
          path="/cart"
          element={isAuthenticated ? <Cart /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
