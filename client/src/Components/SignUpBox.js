import styled from "styled-components"
import { Link } from "react-router-dom"

const SignUpBox = ({ handleEmail, handlePassword, handleSubmit }) => {

    return (
        <StyledBox>
            <InnerBox>
                <p>Create Account</p>
                <StyledInput type="text" htmlFor="email" placeholder="email" onChange={handleEmail} />
                <StyledInput type="password" htmlFor="password" placeholder="password" onChange={handlePassword} />
                <p>Already a member? <Link to='/signin'>Sign In</Link></p>
                <SignUpButton onClick={handleSubmit}>Sign Up</SignUpButton>
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

const SignUpButton = styled.button`
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

export default SignUpBox