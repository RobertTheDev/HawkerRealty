import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";

const ArticlePage: React.FC<PageProps> = () => {
  return (
    <main>
      <p>ArticlePage</p>
    </main>
  );
};

export default ArticlePage;

export const Head: HeadFC = () => <title>Article Page</title>;

 