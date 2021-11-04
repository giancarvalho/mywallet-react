import styled from "styled-components";

const Input = styled.input`
    font-family: Railway, sans-serif;
    width: 100%;
    height: 45px;
    color: #000;
    font-size: 17px;
    margin-bottom: 8px;
    border-radius: 5px;
    padding: 5px;
    background: #fff;
    border: ${({ alert }) => (alert ? "2px solid #df0000" : "none")};

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #868686;
    }
`;

export default Input;
