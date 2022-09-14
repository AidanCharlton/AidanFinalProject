import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import SignInBox from "../Components/SignInBox";
import { UserContext } from "../Contexts/UserContext"

const SignIn = () => {
    const history = useHistory()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [response, setResponse] = useState()
    const [hasError, setHasError] = useState()
    const { setIsLoggedIn, setCurrentUser, isLoggedIn, currentUser, setUserBookmarks } = useContext(UserContext);

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        const credentials = { email: email, password: password };
        const requestSignIn = async () => {
            try {
                const response = await fetch("/signin", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentials),
                });
                const res = await response.json();
                console.log('backend response:', res)
                if (res.status !== 200) {
                    setResponse(res.message)
                    setHasError(true)
                } else if (res.status === 200) {
                    setResponse('')
                    setHasError(false)
                    setCurrentUser(res.body)
                    setUserBookmarks(res.body.bookmarks)
                    setIsLoggedIn(true)
                    setTimeout(() => {
                        history.push('/')
                    }, 1000);
                }
            } catch (err) {
                console.error(`Error: ${err}`);
            }
        };
        requestSignIn();
    };

    return (
        <Wrapper>
            <SignInBox handleEmail={handleEmail} handlePassword={handlePassword} handleSubmit={handleSubmit} response={response} hasError={hasError} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
  height: 600px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SignIn;
