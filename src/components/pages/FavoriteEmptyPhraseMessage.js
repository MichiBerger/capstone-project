import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function FavoriteEmptyPhraseMessage() {
  return (
    <EmptyPhrasesMessageWrapper>
      <h2>Upps...da fehlt noch was!</h2>
      <p>Gehe zurück und markiere deine Lieblingsprüche einfach durch anklicken auf das Herzsymbol!</p>
      <StyledLink to="/">

      <BackIcon xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></BackIcon>
      </StyledLink>
    </EmptyPhrasesMessageWrapper>
  );
}

const EmptyPhrasesMessageWrapper = styled.article`
  color: #2a475e;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: rgba(242, 161, 34, 0.3) 0px -1px 2px 0px, rgba(242, 161, 34, 0.15) 0px 1px 3px 1px;
  background-color: #f9f9f9;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;

  h2{
    font-size: 1.4rem;
  }
`;

const StyledLink = styled(Link)`
justify-self: end;
align-self: center;
`

const BackIcon = styled.svg`
  width: 35px;
  height: 35px;
  fill: #f2a122;
  border: 1px solid #f2a122;
  border-radius: 50%;

  &:active{
    transform: scale(1.1);
    fill: #2a475e;
  }
`;
