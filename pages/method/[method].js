import * as React from "react";
import Link from "next/link";
import Layout from "./../../components/Layout";
import { Button, Heading, CenteredColumn, DateParser } from "@pubsweet/ui";
import { getArticles } from "./../../lib/articles";
import config from "./../../config";
import { getMethodList } from "./../../lib/methods";

const MethodIndex = ({ articles, method }) => {
  // console.log(articles, method);

  return (
    <Layout title={`method ${method}`}>
      <CenteredColumn>
        <Heading level={2}>Articles in the index for “{method}”:</Heading>
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
      </CenteredColumn>
    </Layout>
  );
};

export default MethodIndex;

export async function getStaticPaths() {
  const allTheArticles = await getArticles();
  const paths = getMethodList(allTheArticles).map((method) => {
    return { params: { slug: method.replace(" ", "-"), method: method } };
  });
  console.log(paths);
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  // console.log(context.params.slug);
  const theseArticles = await getArticles("methods", context.params.method);
  return {
    props: { articles: theseArticles, method: context.params.method },
    revalidate: config.regenerateTime,
  };
}
