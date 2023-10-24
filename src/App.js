import React, { useState, useEffect } from "react";
import Login from "./components/Login/Login";
import Home from "./pages/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import Posts from "./pages/Posts/Posts";
import Footer from "./components/Footer/Footer";
import SinglePost from "./pages/SinglePost/SinglePost";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("isLoggedIn");

    if (stored === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // Proverite email i password ovde
    // Ali ovo je samo demo
    localStorage.setItem("isLoggedIn", "1");
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
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/posts/:id" element={<SinglePost />}></Route>
          <Route path="/products/:id" element={<SingleProduct />}></Route>
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
