const config = {
  regenerateTime: 300, // 5 minutes for ISR – this could change.
  url: "https://unpackinganarchive.dreamhosters.com/graphql", // the URL of the GraphQL endpoint
  webhookUrl: "https://api.netlify.com/build_hooks/6125deb902c0245d6bc09fca", // the URL of the Netlify webhook
};

export default config;
