import styled from 'styled-components';

export default function LoadingInfo({ loadingStatus }) {
  return (
    <Wrapper>
      <h2>Ladestatus</h2>
      <p>Dein Foto wird gerade hochgeladen. Wir bitten Dich um ein wenig Geduld!</p>
      <p>Lädt:</p>
      <ProgressBarWrapper loadingStatus={loadingStatus}>
        <div>
          <p>{`${loadingStatus}%`}</p>
        </div>
      </ProgressBarWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  border: 1px solid #19337a;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  border-radius: 20px;
  padding: 1rem;
  gap: 1rem;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  h2 {
    font-size: 1.2rem;
  }
`;

const ProgressBarWrapper = styled.section`
  height: 1.5rem;
  width: 100%;
  background-color: '#e0e0de';
  border-radius: 50px;
  display: flex;
  align-items: center;

  div {
    height: 100%;
    width: ${props => props.loadingStatus}%;
    background-color: ${props => (props.loadingStatus === 100 ? '#9ad21c' : '#DE0C47')};
    border-radius: inherit;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  p {
    color: #fff;
    font-weight: bold;
  }
`;
