import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default () => {
  return (
    <div>
      <Header text="About Page" />
      <p>This is a new page</p>
      <Link to="/">Home</Link>
    </div>
  );
};
