import styled from "styled-components";

const Input = styled.input`
    font-family: Railway, cursive;
    width: 100%;
    height: 45px;
    color: #000;
    font-size: 17px;
    margin-bottom: 8px;
    border-radius: 5px;
    padding: 5px;
    background: ${({ alert }) =>
        alert ? "rgb(255, 211, 211)" : "rgb(255, 255, 255)"};
    border: ${({ alert }) => (alert ? "1px solid #e06b6b" : "none")};

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #868686;
    }
`;

export default Input;
