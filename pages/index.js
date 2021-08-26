import * as React from "react";
import Link from "next/link";
import Layout from "./../components/Layout";
import { Button, Heading, CenteredColumn, DateParser } from "@pubsweet/ui";
import { getArticles } from "./../lib/articles";
import config from "./../config";
import { getMethodList } from "./../lib/methods";
import { getPackageList } from "./../lib/packages";
import { Bubble } from "./../components/Article/elements";

const Index = ({ articles }) => {
  const fireWebhook = () => {
    fetch(config.webhookUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        alert(
          `Webhook fired to rebuild the site. Here's what Netlify said:\n\n${JSON.stringify(
            myJson
          )}`
        );
      });
  };

  return (
    <Layout title="main index">
      <CenteredColumn>
        <Heading level={2}>Articles in the index:</Heading>
        {
          <ul>
            {articles
              .filter((article) => article.meta.title && article.meta.source)
              .map((article) => (
                <li key={article.id}>
                  <Link href={`/article/${article.id}`}>
                    {article.meta.title}
                  </Link>{" "}
                  <DateParser
                    timestamp={article.publishedDate}
                    dateFormat="DD/M/YYYY"
                  >
                    {(timestamp, timeAgo) => <span>({timeAgo} ago)</span>}
                  </DateParser>
                </li>
              ))}
          </ul>
        }
        <hr />
        <Heading level={2}>Methods used:</Heading>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {getMethodList(articles).map((method, index) => (
            <Bubble key={index}>
              <Link href={`/method/${method}`}>{method}</Link>
            </Bubble>
          ))}
        </div>
        <hr />
        <Heading level={2}>Packages used:</Heading>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {getPackageList(articles).map((backage, index) => (
            <Bubble key={index} blue>
              <Link href={`/package/${backage}`}>{backage}</Link>
            </Bubble>
          ))}
        </div>
        <hr />
        <Button
          primary
          color="black"
          background="lightblue"
          size="large"
          onClick={() => {
            fireWebhook();
          }}
        >
          Rebuild?
        </Button>
      </CenteredColumn>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  return {
    props: { articles: await getArticles() },
    revalidate: config.regenerateTime,
  };
}
