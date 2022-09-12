import { useState } from "react";
import styled from "styled-components";
import SignInBox from "../Components/SignInBox";

const SignUp = () => {
    return (
        <Wrapper>
            <SignInBox />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 600px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`


export default SignUp;
