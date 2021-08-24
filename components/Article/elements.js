import styled from "styled-components";

export const ArticleElement = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    margin-top: 0;
    margin-bottom: var(--insidePadding);
    max-width: 800px;
  }
  & > div {
    max-width: 800px;
  }
`;
