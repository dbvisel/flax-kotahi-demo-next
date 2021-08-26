import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
// import config from "./../config";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql", //config.url,
  cache: new InMemoryCache(),
});

const getMethodData = (data, key, value) => {
  const outData = [];
  for (let i = 0; i < data.length; i++) {
    const thisSubmission = JSON.parse(data[i].submission);
    if (thisSubmission[key] && thisSubmission[key].indexOf(value) > -1) {
      outData.push(data[i]);
    }
  }
  return outData;
};

export const getArticles = async (key, value) => {
  const { data } = await client.query({
    query: gql`
      query {
        manuscriptsPublishedSinceDate(startDate: 1624101179050, limit: null) {
          id
          shortId
          files {
            # attachments
            id
            label
            fileType
            filename
            url
            mimeType
            size
          }
          status
          meta {
            title
            source
            articleType
            declarations {
              openData
              openPeerReview
              preregistered
              previouslySubmitted
              researchNexus
              streamlinedReview
            }
            articleSections
            articleIds {
              pubIdType
              id
            }
            abstract
            subjects
            history {
              type
              date
            }
            publicationDates {
              type
              date
            }
            notes {
              notesType
              content
            }
            keywords
            manuscriptId
          }
          submission
          publishedDate
        }
      }
    `,
  });
  return key
    ? getMethodData(data.manuscriptsPublishedSinceDate, key, value)
    : data.manuscriptsPublishedSinceDate;
};

export const getArticle = async (id) => {
  const { data } = await client.query({
    query: gql`
      query ($id: ID!) {
        publishedManuscript(id: $id) {
          id
          shortId
          files {
            # attachments
            id
            label
            fileType
            filename
            url
            mimeType
            size
          }
          status
          meta {
            title
            source
            articleType
            declarations {
              openData
              openPeerReview
              preregistered
              previouslySubmitted
              researchNexus
              streamlinedReview
            }
            articleSections
            articleIds {
              pubIdType
              id
            }
            abstract
            subjects
            history {
              type
              date
            }
            publicationDates {
              type
              date
            }
            notes {
              notesType
              content
            }
            keywords
            manuscriptId
          }
          submission
          publishedDate
        }
      }
    `,
    variables: {
      id,
    },
  });
  // console.log(data);
  return data.publishedManuscript;
};
