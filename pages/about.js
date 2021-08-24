import * as React from "react";
import Layout from "./../components/Layout";
import Link from "next/link";
import { CenteredColumn, Heading, Paragraph } from "@pubsweet/ui";

const AboutPage = () => {
  return (
    <Layout title="about this site">
      <CenteredColumn>
        <Heading level={2}>About this site</Heading>{" "}
        <Paragraph.Reading>
          This is a quick version of the site made in Next.js. It's pulling
          content from a WordPress GraphQL endpoint. It makes a page for each
          article and dumps the HTML into a div. There's no markup processing
          happening – what's coming from WordPress is being dumped straight into
          React.
        </Paragraph.Reading>
        <Paragraph.Reading>
          Note that <Link href={`/article/online-encyclopedias`}>here</Link>{" "}
          images are being included – they're hotlinking to the original
          WordPress install.
        </Paragraph.Reading>
        <Paragraph.Reading>
          One big benefit of using React is that we could use the Pubsweet
          component libray to make sure that content appears the same on the
          Kotahi side and on the Flax side.
        </Paragraph.Reading>
        <Paragraph.Reading>
          If you click the button on the front page, Netlify will rebuild the
          content on this site (builds take about a minute). Note, however, that
          this probably won't do anything visible – the content on the CMS isn't
          changing.
        </Paragraph.Reading>
        <Paragraph.Reading>Other versions:</Paragraph.Reading>
        <ul>
          <li>
            <a href="https://flax-kotahi-demo.netlify.app">
              Pure Eleventy version
            </a>
          </li>
          <li>
            <a href="https://flax-kotahi-demo-gatsby.netlify.app">
              Gatsby version
            </a>
          </li>
        </ul>
      </CenteredColumn>{" "}
    </Layout>
  );
};
export default AboutPage;
