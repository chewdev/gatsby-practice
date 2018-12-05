import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Header text="Contact" />
      <p>Message us here</p>
    </div>
  );
};
