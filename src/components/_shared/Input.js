import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    height: 45px;
    color: #000;
    font-size: 14px;
    margin-bottom: 8px;
    border-radius: 5px;
    padding: 5px;
    border: none;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #000;
    }
`;

export default Input;
