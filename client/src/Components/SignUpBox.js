import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUpBox = ({ handleEmail, handlePassword, handleSubmit, error }) => {
    return (
        <StyledBox>
            <InnerBox>
                <HeaderText>Create Account</HeaderText>
                <StyledInput
                    type="text"
                    htmlFor="email"
                    placeholder="email"
                    onChange={handleEmail}
                />
                <StyledInput
                    type="password"
                    htmlFor="password"
                    placeholder="password"
                    onChange={handlePassword}
                />
                {error ? <ErrorBox>{error}</ErrorBox> : <></>}
                <p>
                    Already a member?{" "}
                    <Link to="/signin" style={{ color: "#AF1E2D" }}>
                        {" "}
                        Sign In
                    </Link>
                </p>
                <SignUpButton onClick={handleSubmit}>Sign Up</SignUpButton>
            </InnerBox>
        </StyledBox>
    );
};

const HeaderText = styled.h1`
    font-size: 26px;
`

const StyledBox = styled.div`
  width: 500px;
  height: 400px;
  box-shadow: 0px 0px 10px 1px lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const InnerBox = styled.form`
  width: 85%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 300px;
  padding: 5px;
  margin: 10px;
  font-family: 'Courier New', Courier, monospace;
`;

const SignUpButton = styled.button`
  background-color: white;
  font-family: 'Courier New', Courier, monospace;
  border: none;
  border: solid 1px gray;
  color: gray;
  padding: 5px;
  margin: 10px;
  width: 200px;
  transition: 0.3s;
  &:hover {
    color: black;
  }
  &:active {
    box-shadow: 0px 0px 5px 1px lightgray;
  }
`;

const ErrorBox = styled.div`
  width: 300px;
  height: 50px;
  background-color: #af1e2d;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

export default SignUpBox;
