import styled from "styled-components";

export const Wrapper = styled.div`
  & main {
    background-color: var(--white);
    padding: var(--insidePadding);
    border-radius: var(--insidePadding);
    & > h2 {
      margin-top: 0;
      margin-bottom: var(--insidePadding);
    }
  }
  & footer {
    background-color: var(--white);
    margin-top: var(--insidePadding);
    padding: var(--insidePadding);
    border-radius: var(--insidePadding);
  }
`;
