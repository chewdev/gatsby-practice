import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default () => (
  <div>
    <Header text="Welcome!" />
    <p>Where do you want to go?</p>
    <Link to="/about">About Us</Link>
    <Link to="/contact">Contact Us</Link>
  </div>
);
