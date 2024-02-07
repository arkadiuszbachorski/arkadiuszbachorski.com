import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ReactLenis } from "@studio-freight/react-lenis";
import Head from "next/head";

const meta = {
  title: "Arkadiusz Bachorski | Fullstack Engineer",
  description:
    "Portfolio of Fullstack Web Engineer - Arkadiusz Bachorski. My career, projects I've been working on, couple words about me and contact details",
};

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="web" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="Arkadiusz Bachorski" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </Head>
    <ReactLenis root options={{ lerp: 0.08 }}>
      <Component {...pageProps} />
    </ReactLenis>
  </>
);

export default App;
