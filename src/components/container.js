import React from "react";
import { Link } from "gatsby";
import containerStyles from "./container.module.css";

const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ({ children }) => (
  <div className={containerStyles.container}>
    <header style={{ marginBottom: "1.5rem" }}>
      <Link to="/" style={{ textShadow: "none", backgroundImage: "none" }}>
        <h3 style={{ display: "inline" }}>Site Title</h3>
      </Link>
      <ul style={{ listStyle: "none", float: "right" }}>
        {[
          { to: "/", children: "Home" },
          { to: "/about/", children: "About" },
          { to: "/contact/", children: "Contact" }
        ].map(obj => (
          <ListLink to={obj.to}>{obj.children}</ListLink>
        ))}
      </ul>
    </header>
    {children}
    <footer style={{ marginTop: "1.5rem", backgroundColor: "#1ca086" }}>
      <p style={{ margin: "1rem 0", textAlign: "center" }}>
        Why is this site so fast? It's built on Gatsby & developed by CE
      </p>
    </footer>
  </div>
);
