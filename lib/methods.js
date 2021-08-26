const getMethods = (submission) => JSON.parse(submission).methods || [];

export const getMethodList = (articles) => {
  const allMethods = new Set(
    articles.flatMap((article) => getMethods(article.submission))
  );
  return [...allMethods].sort();
};
