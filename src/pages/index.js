import React from "react";
import Header from "../components/header";
import Container from "../components/container";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";

export default ({ data }) => (
  <Container>
    <Header text="Welcome to my page!" />
    <h2>Where do you want to go?</h2>
    <blockquote>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nihil sint
        totam facere ea nemo facilis dolore deserunt. Autem voluptates voluptate
        laborum dicta distinctio aliquam inventore! Autem ipsa cumque eius iure
        accusantium adipisci nihil deserunt ut, laboriosam consectetur dolorem?{" "}
        <em>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid et,
          minima fugiat omnis ipsam sed non ipsa nesciunt optio nam.
        </em>
      </p>
    </blockquote>

    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(edge => {
      const { id, frontmatter, excerpt, fields } = edge.node;
      return (
        <div key={id}>
          <h3
            css={css`
              margin-bottom: ${rhythm(1 / 4)};
            `}
          >
            <Link to={fields.slug}>{frontmatter.title}</Link>{" "}
            <span
              css={css`
                color: #bbb;
              `}
            >
              - {frontmatter.date}
            </span>
          </h3>
          <p>{excerpt}</p>
        </div>
      );
    })}
  </Container>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
          }
          id
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
