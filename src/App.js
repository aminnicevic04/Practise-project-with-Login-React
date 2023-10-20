import React, { useState } from "react";
import Login from "./components/Login/Login";
import Home from "./pages/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // Proverite email i password ovde
    // Ali ovo je samo demo
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <>
        <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />

        <Routes>
          <Route
            path="/"
            element={
              !isLoggedIn ? (
                <Login onLogin={loginHandler} />
              ) : (
                <Home onLogout={logoutHandler} />
              )
            }
          />
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
