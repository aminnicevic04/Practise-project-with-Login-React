import React, { useState, useEffect } from "react";
import Login from "./components/Login/Login";
import Home from "./pages/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
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
          <Route
            path="/products"
            element={
              !isLoggedIn ? (
                <Login onLogin={loginHandler} />
              ) : (
                <Products onLogout={logoutHandler} />
              )
            }
          ></Route>
          <Route
            path="/posts"
            element={
              !isLoggedIn ? (
                <Login onLogin={loginHandler} />
              ) : (
                <Posts onLogout={logoutHandler} />
              )
            }
          ></Route>
          <Route
            path="/posts/:id"
            element={
              !isLoggedIn ? (
                <Login onLogin={loginHandler} />
              ) : (
                <SinglePost onLogout={logoutHandler} />
              )
            }
          ></Route>
          <Route
            path="/products/:id"
            element={
              !isLoggedIn ? (
                <Login onLogin={loginHandler} />
              ) : (
                <SingleProduct onLogout={logoutHandler} />
              )
            }
          ></Route>
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
