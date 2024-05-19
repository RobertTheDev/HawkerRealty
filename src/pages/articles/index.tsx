import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";

const ArticlesPage: React.FC<PageProps> = () => {
  return (
    <main>
      <p>ArticlesPage</p>
    </main>
  );
};

export default ArticlesPage;

export const Head: HeadFC = () => <title>Articles Page</title>;

 