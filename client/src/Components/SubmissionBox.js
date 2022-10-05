import styled from "styled-components"
import { updatedName } from "./Utils"

const SubmissionBox = () => {

    const boroughs = ["west-island", "saint-laurent", "ahuntsic",
        "mtl-north", "rdp", "dorval", "hampstead", "tmr", "cdn", "park-extension", "little-italy", "rosemont", "mtl-east",
        "lachine", "mtl-west", "ndg", "westmount", "downtown", "plateau", "south-west", "village", "hochelaga", "old-port"]

    return (
        <Wrapper>
            <InputWrap>
                <Labels>Name</Labels>
                <StyledInput type="text" />
            </InputWrap>

            <InputWrap>
                <Labels>Borough</Labels>
                <StyledSelect>
                    <option></option>
                    {
                        boroughs.sort().map((x) => {
                            return <option>{updatedName(x)}</option>
                        })
                    }
                </StyledSelect>
            </InputWrap>

            <InputWrap>
                <Labels>Type</Labels>
                <StyledSelect>
                    <option></option>
                    <option>Street</option>
                    <option>Park</option>
                </StyledSelect>
            </InputWrap>

            <InputWrap>
                <Labels>Street View Link</Labels>
                <StyledInput type="text" />
            </InputWrap>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: whitesmoke;
    width: 90%;
    padding-bottom: 40px;
    height: auto;
    display: flex;
    flex-direction: column;
`

const Labels = styled.span`
    
`

const InputWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`

const StyledInput = styled.input`
    width: 300px;
`

const StyledSelect = styled.select`
    width: 308px;
`


export default SubmissionBox