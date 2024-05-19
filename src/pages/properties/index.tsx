import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";

const PropertiesPage: React.FC<PageProps> = () => {
  return (
    <main>
      <p>PropertiesPage</p>
    </main>
  );
};

export default PropertiesPage;

export const Head: HeadFC = () => <title>Properties Page</title>;

 