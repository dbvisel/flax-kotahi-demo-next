import * as React from "react";
import PropTypes from "prop-types";
import { ArticleElement } from "./elements";
import { Heading } from "@pubsweet/ui";
import MetadataBox from "./MetadataBox";

// We could do markup processing here – right now we're just putting in the HTML assuming that it's fine.

const Article = ({ title, content, metadata }) => (
  <ArticleElement>
    <Heading level={2}>{title}</Heading>
    <MetadataBox metadata={metadata} />
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </ArticleElement>
);

export default Article;

Article.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  metadata: PropTypes.object,
};
