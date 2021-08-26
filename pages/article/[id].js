import * as React from "react";
import Layout from "./../../components/Layout";
import Article from "./../../components/Article";
import { getArticle, getArticles } from "./../../lib/articles";
import config from "./../../config";

const ArticlePage = ({ article }) => {
  return (
    <Layout title={article.meta.title}>
      <Article
        title={article.meta.title}
        content={article.meta.source}
        metadata={article}
      />
    </Layout>
  );
};

export async function getStaticPaths() {
  const allTheArticles = await getArticles();
  const paths = allTheArticles.map((article) => {
    return { params: { id: article.id } };
  });
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  // console.log(context.params.slug);
  const thisArticle = await getArticle(context.params.id);
  return {
    props: { article: thisArticle, id: thisArticle.id },
    revalidate: config.regenerateTime,
  };
}

export default ArticlePage;
