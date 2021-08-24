import styled from "styled-components";

export const HeaderElement = styled.header`
  padding: var(--insidePadding);
  margin-bottom: var(--insidePadding);
  background-color: var(--white);
  border-radius: var(--insidePadding);
  & a {
    color: var(--text);
    text-decoration: none;
    font-weight: bold;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & h1 {
      margin: 0;
      font-weight: normal;
    }
  }
`;
