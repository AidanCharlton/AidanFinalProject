import { useState } from "react"
import styled from "styled-components"
import SignUpBox from "../Components/SignUpBox"
import { useHistory } from "react-router-dom"
import SuccessfulSignUp from "../Components/SuccessfulSignUp"

const SignUp = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()
    const history = useHistory()
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        const signUp = { email: email, password: password, bookmarks: [] }
        const requestSignUp = async () => {
            try {
                const response = await fetch("/adduser", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(signUp),
                });
                const res = await response.json();
                console.log('backend response:', res)
                if (res.status !== 200) {
                    setError(res.message)
                } else if (res.status === 200) {
                    setError(null)
                    history.push('/success')
                }
            } catch {
                console.log('fail')
            }
        }
        requestSignUp()

    }



    return (
        <Wrapper>
            <SignUpBox handleEmail={handleEmail} handlePassword={handlePassword} handleSubmit={handleSubmit} error={error} />
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