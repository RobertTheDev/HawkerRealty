import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";

const BookViewingPage: React.FC<PageProps> = () => {
  return (
    <main>
      <p>BookViewingPage</p>
    </main>
  );
};

export default BookViewingPage;

export const Head: HeadFC = () => <title>BookViewing Page</title>;

 