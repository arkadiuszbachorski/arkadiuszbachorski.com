import type { NextPage } from "next";
import { Layout } from "components/Layout";
import { SectionTitle } from "components/SectionTitle";
import { ButtonDot } from "components/ButtonDot";
import { TextSideway } from "components/TextSideway";

const Custom404: NextPage = () => (
  <Layout>
    <div className="flex flex-col items-center py-60 relative">
      <TextSideway className="top-24 left-24 h-full z-[-1]">LOST()</TextSideway>
      <SectionTitle
        top="404"
        bottom="Page Not Found"
        className="[&_span]:!text-center"
      />
      <ButtonDot size="large" href="/">
        Direct me to the homepage
      </ButtonDot>
    </div>
  </Layout>
);

export default Custom404;
