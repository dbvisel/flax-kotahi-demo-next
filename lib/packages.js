const getPackages = (submission) => JSON.parse(submission).packages || [];

export const getPackageList = (articles) => {
  const allPackages = new Set(
    articles.flatMap((article) => getPackages(article.submission))
  );
  return [...allPackages].sort();
};
