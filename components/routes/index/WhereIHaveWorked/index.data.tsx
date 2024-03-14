import Link from "next/link";
import zypsyImg from "public/img/companies/zypsy.svg";
import riImg from "public/img/companies/ri.svg";
import apptensionImg from "public/img/companies/apptension.webp";

export const companies = [
  {
    time: "present <-- Sep 2021",
    name: "zypsy",
    link: "https://zypsy.com",
    logo: {
      img: zypsyImg,
      color: "#FBF8EF",
    },
    position: "Senior Fullstack Engineer",
    points: [
      <>
        Selected work -{" "}
        <Link href="https://www.formless.xyz" className="underline">
          Formless
        </Link>
        ,{" "}
        <Link href="https://smoothie.so" className="underline">
          Smoothie
        </Link>
        ,{" "}
        <Link href="https://www.captionary.ai" className="underline">
          captionary.ai
        </Link>
      </>,
      "Building engineering team and improving processes",
      "Providing technical expertise",
    ],
  },
  {
    time: "present <-- Sep 2021",
    name: "robust_intelligence",
    link: "https://www.robustintelligence.com",
    logo: {
      img: riImg,
      color: "#0023d2",
    },
    position: "Senior Frontend Engineer",
    points: [
      <>
        Building RI platform -
        <br />
        data, visualizations and variations heavy web app
      </>,
      "Building design system components library",
      <>
        Reworking data fetching architecture to provide <br />
        excellent UX and DX
      </>,
    ],
  },
  {
    time: "Oct 2021 <-- Aug 2020",
    name: "apptension",
    link: "https://www.apptension.com/",
    logo: {
      img: apptensionImg,
      color: "#4453D6",
    },
    position: "Senior Frontend Engineer",
    points: [
      <>
        Built{" "}
        <Link
          href="https://www.apptension.com/case-study/mtab"
          className="underline"
        >
          mTab Marketplace
        </Link>{" "}
        - <br />
        data analysis and visualization marketplace platform
      </>,
      <>
        Contributed to{" "}
        <Link
          href="https://www.apptension.com/saas-boilerplate"
          className="underline"
        >
          SaaS Boilerplate
        </Link>{" "}
        - <br />
        opinionated SaaS stack, packed with features
      </>,
      "implemented REST and GraphQL APIs in Django",
    ],
  },
  {
    time: "November 2019 <- Apr 2018",
    name: "itcp",
    link: "https://investitsystems.pl/",
    logo: {
      img: null,
      color: "#ffffff",
    },
    position: "Fullstack Engineer",
    points: [
      "Built React SPAs and Laravel REST APIs",
      "Built fullstack SSR Laravel apps",
      "Built backend microservices",
      "Started as a Junior FE, grew to a Fullstack",
    ],
  },
];

export type Company = (typeof companies)[number];
