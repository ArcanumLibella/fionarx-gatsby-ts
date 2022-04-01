import React from "react";

import { Menu } from "@/components/organisms/Menu";
import { graphql, useStaticQuery } from "gatsby";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <title>{data.site.siteMetadata.title}</title>
      <main className="relative h-screen overflow-auto bg-midnight">
        <Menu />
        {children}
      </main>
    </>
  );
};

export default MainLayout;
