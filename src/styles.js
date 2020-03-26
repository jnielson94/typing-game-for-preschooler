import styled, { createGlobalStyle } from "styled-components";

export const DescriptionText = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;

export const positiveColor = "#1d0094";
export const negativeColor = "#006557";
export const grey6 = "#fafafa";
export const grey1 = "#131415";
export const SingleLetter = styled.p`
  font-size: 6rem;
  border: 2px solid
    ${({ positive }) => (positive ? positiveColor : negativeColor)};
  border-radius: 0.5rem;
  max-width: 3ch;
  margin: auto;
  line-height: 1;
`;

export const MatchButton = styled.button`
  font-size: 2rem;
  margin-right: 1rem;
  padding: 0.5rem;
  color: ${({ positive }) => (positive ? positiveColor : negativeColor)};
  background-color: #fff;
  border-radius: 0.5rem;
  border: 2px solid ${grey1};
`;

export const EditButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  color: ${positiveColor};
  background-color: #fff;
  border-radius: 0.5rem;
  border: 3px solid ${grey1};
`;

export const Font = createGlobalStyle`
html {
  font-family: ${({ font }) => font};
  background-color: ${grey6}
}
`;

export const Input = styled.input`
  margin-top: 1rem;
  font-size: 3rem;
  margin-left: auto;
  margin-right: auto;
  width: 2ch;
  padding: 1ch;
  border-radius: 0.5rem;
  border: 1px solid ${grey1};
`;

export const FeedbackMessage = styled.p`
  font-size: 1.5rem;
  margin: 0;
  color: ${({ children }) =>
    children.includes("Not quite") ? negativeColor : positiveColor};
`;

export const LettersWrapper = styled.div`
  max-width: 34ch;
  margin: auto;
  border: 1px solid ${positiveColor};
  border-radius: 0.5rem;
  padding: 0.25rem;
  p {
    margin-top: 0;
  }
`;
