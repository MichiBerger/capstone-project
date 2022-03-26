import styled from 'styled-components';
import IconButton from './IconButton.js';
import DeleteIcon from '../icons/DeleteIcon.js';

export default function KidsCard({ name, birthDate, kidsId, handleDeleteKid }) {

  return (
    <KidsCardWrapper>
      <h2>{name}</h2>
      <p>Geburtstag: {birthDate}</p>
      <IconButton gridArea="delete" hoverAndActive onClick={() => handleDeleteKid(kidsId)}>
        <DeleteIcon fill="#DE0C47" height="35" width="35" />
        <span className="sr-only">Delete</span>
      </IconButton>
    </KidsCardWrapper>
  );
}

const KidsCardWrapper = styled.li`
  min-height: 100px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'kidsName delete'
    'birthdate .';

  gap: 5px;
  border-radius: 15px;
  padding: 1rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: #f9f9f9;
  color: #19337a;

  h2 {
    grid-area: kidsName;
  }

  p {
    grid-area: birthdate;
  }
`;
