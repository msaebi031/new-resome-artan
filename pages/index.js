import { Container } from "@mui/material";
import Head from "next/head";
import { Fragment, useEffect } from "react";
import About from "../components/About";
import Contect from "../components/Contect";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Skill from "../components/Skill";
import Wafes from "../components/Wave";
import Work from "../components/Work";
import AOS from "aos";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out-cubic",
    });
  }, []);

  return (
    <Fragment>
      <Head>
        <title>MohammadMahdi Saebi | محمد مهدی صائبی</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="رزومه کاری محمد مهدی صائبی" />
        <meta
          name="keywords"
          content="محمد مهدی صائبی , saebi , Artan , آرتان"
        />
        <meta property="og:title" content="محمد مهدی صائبی" />
        <meta
          property="og:url"
          content="https://www.artan.target-designer.com/"
        />
        <meta
          property="og:site_name"
          value="Mohammad mahdi saebi | محمد مهدی صائبی"
        />
        <meta name="author" content="صائبی" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <Container maxWidth="md">
          <About />
          <Skill />
          <Work />
          <Contect />
          <Footer />
        </Container>
      </Layout>
      <Wafes />
    </Fragment>
  );
}

export default Home;
