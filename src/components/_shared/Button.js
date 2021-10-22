import styled from "styled-components";

//pass dark property to get the dark button theme
const Button = styled.button`
    background-color: ${({ dark }) => (dark ? "#7509a3" : "#9d09dd")};
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
`;

export default Button;
