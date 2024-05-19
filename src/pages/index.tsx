import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <main>
      <p>Home</p>
      <p>{JSON.stringify({ data })}</p>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const pageQuery = graphql`
  query {
      allContentfulArticle {
        edges {
          node {
            id
            title
            slug
            content {
              raw
            }
          }
        }
      } 
  }
`