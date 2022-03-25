import styled from 'styled-components';
import KidsForm from '../KidsForm.js';
import KidsCard from '../KidsCard.js';

export default function CreateKidsPage({ kidsData, setKidsData, showMessage, setShowMessage }) {


  return (
    <Wrapper>
      <h2>Füge ein Kind hinzu!</h2>
      <KidsForm kidsData={kidsData} setKidsData={setKidsData} showMessage={showMessage} setShowMessage={setShowMessage} />
      {kidsData.length > 0 ? (
        <>
          <h3>Deine Kinder</h3>
          <KidsCardWrapper>
            {kidsData.map(item => (
              <KidsCard
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
