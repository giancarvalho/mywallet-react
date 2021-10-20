import styled from "styled-components";

const PageContainer = styled.div`
    display: flex;
    min-width: 100vw;
    min-height: 100%;
    background-color: #8c25be;
    padding: 24px;
`;

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        color: #fff;
        font-weight: 700;
        margin-top: 20px;
        font-size: 14px;
    }
`;

export { PageContainer, ContentContainer };
