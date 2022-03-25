import styled from 'styled-components';
import KidsForm from '../KidsForm.js';
import KidsCard from '../KidsCard.js';

export default function CreateKidsPage({
  kidsData,
  handleShowMessage,
  handleDeleteKid,
  handleKidSubmit,
}) {
  return (
    <Wrapper>
      <h2>Füge ein Kind hinzu!</h2>
      <KidsForm
        handleKidSubmit={handleKidSubmit}
        kidsData={kidsData}
        handleShowMessage={handleShowMessage}
      />
      {kidsData.length > 0 ? (
        <>
          <h3>Deine Kinder</h3>
          <KidsCardWrapper>
            {kidsData.map(item => (
              <KidsCard
                handleDeleteKid={handleDeleteKid}
                kidsId={item.id}
                key={item.id}
                name={item.name}
                birthDate={item.birthDate}
              />
            ))}
          </KidsCardWrapper>{' '}
        </>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const KidsCardWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
