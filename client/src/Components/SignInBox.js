import styled from "styled-components";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";

const SignInBox = ({
    handleEmail,
    handlePassword,
    handleSubmit,
    response,
    hasError,
    accountCreated,
}) => {
    const { isLoggedIn } = useContext(UserContext);
    return (
        <StyledBox>
            <InnerBox>
                {isLoggedIn ? (
                    <Success>Success!</Success>
                ) : (
                    <>
                        <HeaderText>Sign In</HeaderText>
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
                        {!hasError ? <></> : <ErrorBox>{response}</ErrorBox>}
                        <p>
                            Don't have an account?{" "}
                            <Link to="/signup" style={{ color: "#AF1E2D" }}>
                                Create One
                            </Link>
                        </p>
                        <SignInButton onClick={handleSubmit}>Sign In</SignInButton>
                    </>
                )}
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

const ErrorBox = styled.div`
  width: 300px;
  height: 30px;
  background-color: #af1e2d;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Success = styled.div`
  width: 300px;
  height: 30px;
  background-color: #00620b;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const SignInButton = styled.button`
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

export default SignInBox;
