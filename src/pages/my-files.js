import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";

export default ({ data }) => {
  return (
    <Container>
      <div>My Files Page</div>
      <ul>
        {data.allFile.edges.map((edge, ind) => {
          const { birthTime, extension, prettySize, relativePath } = edge.node;
          return (
            <li key={ind}>
              <div>Path: {relativePath}</div>
              <div>Created: {birthTime}</div>
              <div>Size: {prettySize}</div>
              <div>Extension: {extension}</div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;
