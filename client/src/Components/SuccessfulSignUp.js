import styled from "styled-components";

const SuccessfulSignUp = () => {
    return (
        <Wrapper>
            <h1 style={{ 'color': 'green' }}>Success!</h1>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
`;
export default SuccessfulSignUp;
