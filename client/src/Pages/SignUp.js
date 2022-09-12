import { useState } from "react"
import styled from "styled-components"
import SignUpBox from "../Components/SignUpBox"

const SignUp = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        const signUp = { email: email, password: password, likes: [], bookmarks: [] }
        console.log(signUp)
    }



    return (
        <Wrapper>
            <SignUpBox handleEmail={handleEmail} handlePassword={handlePassword} handleSubmit={handleSubmit} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 600px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default SignUp