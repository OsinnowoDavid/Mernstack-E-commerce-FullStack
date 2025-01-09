import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token from local storage or any other authentication storage
    localStorage.removeItem("token");

    // Optionally, you can clear other stored data like user info
    // localStorage.removeItem("user");

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
