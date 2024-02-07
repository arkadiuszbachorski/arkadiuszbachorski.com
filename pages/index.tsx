import type { NextPage } from "next";
import { Layout } from "components/Layout";
import { ShowMeTheCode } from "components/routes/index/ShowMeTheCode";
import { AboutMe } from "components/routes/index/AboutMe";
import { WhereIHaveWorked } from "components/routes/index/WhereIHaveWorked";
import { Landing } from "components/routes/index/Landing";
import { WhatIveWorkedOn } from "components/routes/index/WhatIveWorkedOn";

const Home: NextPage = () => (
  <Layout>
    <Landing />
    <AboutMe />
    <WhatIveWorkedOn />
    <WhereIHaveWorked />
    <ShowMeTheCode />
  </Layout>
);

export default Home;
