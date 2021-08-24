import * as React from "react";
import PropTypes from "prop-types";
import { ArticleElement } from "./elements";
import { Heading } from "@pubsweet/ui";

// We could do markup processing here – right now we're just putting in the HTML assuming that it's fine.

const Article = ({ title, content }) => (
  <ArticleElement>
    <Heading level={2}>{title}</Heading>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </ArticleElement>
);

export default Article;

Article.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};
