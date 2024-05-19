import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";

const PropertyPage: React.FC<PageProps> = () => {
  return (
    <main>
      <p>PropertyPage</p>
    </main>
  );
};

export default PropertyPage;

export const Head: HeadFC = () => <title>Property Page</title>;

 