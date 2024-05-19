import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <main>
      <p>About</p>
    </main>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Page</title>;

 