import * as React from "react";
import Link from "next/link";
import Layout from "./../../components/Layout";
import { Button, Heading, CenteredColumn, DateParser } from "@pubsweet/ui";
import { getArticles } from "./../../lib/articles";
import { getPackageList } from "./../../lib/packages";
import config from "./../../config";

const PackageIndex = ({ articles, backage }) => {
  // console.log(articles, method);

  return (
    <Layout title={`package ${backage}`}>
      <CenteredColumn>
        <Heading level={2}>Articles in the index for “{backage}”:</Heading>
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

export default PackageIndex;

export async function getStaticPaths() {
  const allTheArticles = await getArticles();
  const paths = getPackageList(allTheArticles).map((backage) => {
    return {
      params: {
        slug: backage.replace(" ", "-"),
        backage: backage,
      },
    };
  });
  // console.log(paths);
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  // console.log(context.params.slug);
  const theseArticles = await getArticles("packages", context.params.backage);
  return {
    props: {
      articles: theseArticles,
      backage: context.params.backage,
    },
    revalidate: config.regenerateTime,
  };
}
