import React from "react";
import { css } from "@emotion/core";
import { Link, graphql, StaticQuery } from "gatsby";

import { rhythm } from "../utils/typography";
import containerStyles from "./container.module.css";

const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        className={containerStyles.container}
        css={css`
          margin: 0 auto;
          max-width: 700px;
          background: #f5f5f5;
        `}
      >
        <header style={{ marginBottom: "1.5rem" }}>
          <Link to="/" style={{ textShadow: "none", backgroundImage: "none" }}>
            <h3 style={{ display: "inline" }}>
              {data.site.siteMetadata.title}
            </h3>
          </Link>
          <ul style={{ listStyle: "none", float: "right" }}>
            {[
              { to: "/", children: "Home" },
              { to: "/about/", children: "About" },
              { to: "/contact/", children: "Contact" }
            ].map((obj, ind) => (
              <ListLink key={ind} to={obj.to}>
                {obj.children}
              </ListLink>
            ))}
          </ul>
        </header>
        {children}
        <footer
          style={{
            marginTop: "1.5rem",
            backgroundColor: "#1ca086"
          }}
        >
          <p style={{ textAlign: "center" }}>
            Why is this site so fast? It's built on Gatsby & developed by CE
          </p>
        </footer>
      </div>
    )}
  />
);
