import styled from 'styled-components';
import CreateKidForm from '../CreateKidForm.js';
import CreateKidCard from '../CreateKidCard.js';

export default function CreateKidsPage({ kidsData, setKidsData, showMessage, setShowMessage }) {

  return (
    <Wrapper>
      <h2>Füge ein Kind hinzu!</h2>
      <CreateKidForm kidsData={kidsData} setKidsData={setKidsData} showMessage={showMessage} setShowMessage={setShowMessage} />
      {kidsData.length > 0 ? (
        <>
          <h3>Deine Kinder</h3>
          <KidsCardWrapper>
            {kidsData.map(item => (
              <CreateKidCard
                setKidsData={setKidsData}
                kidsId={item.id}
                key={item.id}
                name={item.name}
                birthDate={item.birthDate}
                kidsData={kidsData}
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
