import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        height: "10%",
        marginTop: "20px",
        marginLeft: "30px",
        backgroundColor: "red",
        color: "white",
        cursor: "pointer",
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "darkred")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "red")}
    >
      Logout
    </button>
  );
};

export default Logout;
