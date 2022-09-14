import styled from "styled-components"
import { useContext } from "react";
import { Link } from "react-router-dom"
import { UserContext } from "../Contexts/UserContext";


const SignInBox = ({ handleEmail, handlePassword, handleSubmit, response, hasError }) => {
    const { isLoggedIn } = useContext(UserContext);
    return (
        <StyledBox>
            <InnerBox>
                <p>Sign In</p>
                <StyledInput type="text" htmlFor="email" placeholder="email" onChange={handleEmail} />
                <StyledInput type="password" htmlFor="password" placeholder="password" onChange={handlePassword} />
                {
                    !hasError ? <></> : <ErrorBox>{response}</ErrorBox>
                }
                {
                    isLoggedIn ? <Success>Success!</Success> : <></>
                }
                <p>Don't have an account? <Link to='/signup' style={{ 'color': '#AF1E2D' }}>Create One</Link></p>
                <SignInButton onClick={handleSubmit}>Sign In</SignInButton>
            </InnerBox>
        </StyledBox>
    )
}

const StyledBox = styled.div`
    width: 500px;
    height: 400px;
    box-shadow: 0px 0px 10px 1px lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
`

const InnerBox = styled.form`
    width: 85%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledInput = styled.input`
    width: 300px;
    padding: 5px;
    margin: 10px;
`

const ErrorBox = styled.div`
    width: 300px;
    height: 30px;
    background-color: #AF1E2D;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`

const Success = styled.div`
    width: 300px;
    height: 30px;
    background-color: #00620b;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`

const SignInButton = styled.button`
    background-color: white;
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
`

export default SignInBox