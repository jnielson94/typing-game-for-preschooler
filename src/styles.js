import styled, { createGlobalStyle } from "styled-components";

export const DescriptionText = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;

export const positiveColor = "#1d0094";
export const negativeColor = "#006557";
export const SingleLetter = styled.p`
  font-size: 6rem;
  border: 2px solid
    ${({ positive }) => (positive ? positiveColor : negativeColor)};
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
  border: 2px solid #0f0f0f;
`;

export const Font = createGlobalStyle`
html {
  font-family: ${({ font }) => font};
}
`;

export const Input = styled.input`
  margin-top: 1rem;
  font-size: 3rem;
  margin-left: auto;
  margin-right: auto;
  width: 2ch;
  padding: 1ch;
`;

export const FeedbackMessage = styled.p`
  font-size: 1.5rem;
  margin: 0;
  color: ${({ message }) =>
    message.includes("Not quite") ? negativeColor : positiveColor};
`;

export const LettersWrapper = styled.p`
  max-width: 33ch;
  margin: auto;
`;
