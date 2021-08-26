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

export const MetadataBoxElement = styled.div`
  border: 1px solid var(--black);
  padding: var(--insidePadding);
  & h3 {
    margin: 0;
  }
`;

export const Bubble = styled.span`
  background-color: ${(props) =>
    props.blue ? "midnightblue" : "var(--highlight)"};
  font-family: var(--headerFontStack);
  font-weight: bold;
  border-radius: 10px;
  padding: 0 10px;
  white-space: nowrap;
  margin-right: var(--insidePadding);
  margin-bottom: var(--insidePadding);
  & a {
    color: var(--white);
    text-decoration: none;
  }
`;
