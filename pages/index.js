import * as React from "react";
import Link from "next/link";
import Layout from "./../components/Layout";
import { Button, Heading, CenteredColumn, DateParser } from "@pubsweet/ui";
import { getArticles } from "./../lib/articles";

const Index = ({ articles }) => {
  const fireWebhook = () => {
    fetch("https://api.netlify.com/build_hooks/61234a4e2d8c8275e0804bf5") //TODO: put in real URL here!
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
        <ul>
          {articles.map((article) => (
            <li key={article.slug}>
              <Link href={`/article/${article.slug}`}>{article.title}</Link>{" "}
              <DateParser timestamp={article.date} dateFormat="DD/M/YYYY">
                {(timestamp, timeAgo) => <span>({timeAgo} ago)</span>}
              </DateParser>
            </li>
          ))}
        </ul>
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
  return { props: { articles: await getArticles() } };
}
