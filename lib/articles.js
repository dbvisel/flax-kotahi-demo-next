import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import config from "./../config";

const client = new ApolloClient({
  uri: config.url,
  cache: new InMemoryCache(),
});

export const getArticles = async () => {
  const { data } = await client.query({
    query: gql`
      query posts {
        posts: posts {
          nodes {
            slug
            title
            date
          }
        }
      }
    `,
  });
  return data.posts.nodes;
};

export const getArticle = async (slug) => {
  const { data } = await client.query({
    query: gql`
      query post($slug: ID!) {
        post: post(id: $slug, idType: SLUG) {
          slug
          title
          content
        }
      }
    `,
    variables: {
      slug,
    },
  });
  return data.post;
};
