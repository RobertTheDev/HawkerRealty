import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
      <p>404</p>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not Found Page</title>;

 