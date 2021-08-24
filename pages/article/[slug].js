import * as React from "react";
import Layout from "./../../components/Layout";
import Article from "./../../components/Article";
import { getArticle, getArticles } from "./../../lib/articles";

const ArticlePage = ({ article }) => {
  // console.log(article);
  return (
    <Layout title={article.title}>
      <Article title={article.title} content={article.content} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const allTheArticles = await getArticles();
  const paths = allTheArticles.map((article) => {
    return { params: { slug: article.slug } };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // console.log(context.params.slug);
  const thisArticle = await getArticle(context.params.slug);
  // console.log(thisArticle);
  return { props: { article: thisArticle, slug: thisArticle.slug } };
}

export default ArticlePage;
