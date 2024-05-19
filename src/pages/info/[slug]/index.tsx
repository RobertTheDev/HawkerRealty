import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";

const InfoPage: React.FC<PageProps> = () => {
  return (
    <main>
      <p>InfoPage</p>
    </main>
  );
};

export default InfoPage;

export const Head: HeadFC = () => <title>Info Page</title>;

 