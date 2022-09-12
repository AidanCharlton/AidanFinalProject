import styled from "styled-components"
import { Link } from "react-router-dom"

const SignInBox = () => {

    return (
        <StyledBox>
            <InnerBox>
                <p>Sign In</p>
                <StyledInput type="text" htmlFor="email" placeholder="email" />
                <StyledInput type="password" htmlFor="password" placeholder="password" />
                <p>Don't have an account? <Link to='/signup'>Create One</Link></p>
                <SignInButton>Sign In</SignInButton>
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