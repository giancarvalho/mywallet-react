import styled from "styled-components";

export default function ActionButton({ customStyle, children, ...otherprops }) {
    return (
        <Button customStyle={customStyle} {...otherprops}>
            {children}
        </Button>
    );
}

const Button = styled.button`
    font-size: ${({ customStyle }) =>
        customStyle && customStyle.fontSize ? customStyle.fontSize : "26px"};
    color: #fff;
    margin: ${({ customStyle }) =>
        customStyle && customStyle.margin ? customStyle.margin : "0"};
    padding: 0;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border: none;
    cursor: pointer;
`;
