import * as React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Heading } from "@pubsweet/ui";
import { HeaderElement } from "./elements";

const Header = ({ siteTitle, pageTitle }) => (
  <HeaderElement>
    <div>
      <Heading level={1}>
        <Link href="/">{siteTitle}</Link>
        {": "}
        {pageTitle}
      </Heading>
      <Link href="/about">About</Link>
    </div>
  </HeaderElement>
);

export default Header;

Header.propTypes = {
  siteTitle: PropTypes.string,
  pageTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `Next.js Flax/Kotahi demo`,
  pageTitle: ``,
};
