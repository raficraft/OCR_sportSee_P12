import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div className="home">
      <Link to="/user/12">Chart User 12</Link>
      <Link to="/user/18">Chart User 18</Link>
    </div>
  );
};

export default Home;
