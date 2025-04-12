import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Header.css";

const Header = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <header className="header">
      {" "}
      <nav>
        <div>
          <Link to="/products" className="logo">
            ShopeZone
          </Link>{" "}
        </div>
        <div className="nav-links">
          <Link to="/products" className="Link">Home</Link>
          <Link to="/cart" className="Link">
            Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
          </Link>{" "}
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
