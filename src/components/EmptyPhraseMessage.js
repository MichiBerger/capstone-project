import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function FavoriteEmptyPhraseMessage({ titleText, emptyPhrasetext }) {
  return (
    <EmptyPhrasesMessageWrapper>
      <h2>{titleText}</h2>
      <p>{emptyPhrasetext}</p>
      <StyledLink to="/">
        <BackIcon xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </BackIcon>
      </StyledLink>
    </EmptyPhrasesMessageWrapper>
  );
}

const EmptyPhrasesMessageWrapper = styled.article`
  color: #2a475e;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: #f9f9f9;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-row-gap: 10px;
  align-items: center;

  h2 {
    font-size: 1.4rem;
  }
`;

const StyledLink = styled(Link)`
  justify-self: end;
  align-self: center;
`;

const BackIcon = styled.svg`
  width: 35px;
  height: 35px;
  fill: #f2a122;
  border: 1px solid #f2a122;
  border-radius: 50%;

  &:active {
    transform: scale(1.1);
    fill: #2a475e;
  }
`;
