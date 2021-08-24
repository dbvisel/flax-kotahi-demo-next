import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Header from "./../Header";
import { Wrapper } from "./elements";

const Layout = ({ children, title }) => {
  return (
    <Wrapper>
      <Head>
        <title>Flax/Kotahi demo: Next.js: {title || ""}</title>
        <link rel="icon" href="../../../favicon.ico" />
      </Head>
      <Header pageTitle={title || ""} />
      <main>{children}</main>
      <footer>footer content goes here!</footer>
    </Wrapper>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
