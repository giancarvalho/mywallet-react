import { useEffect } from "react";
import styled from "styled-components";

export default function Alert({ alert, setAlert }) {
    useEffect(() => {
        if (alert.status) {
            setTimeout(() => {
                setAlert({ ...alert, status: false });
            }, 5000);
        }
    }, [alert, setAlert]);
    return (
        <AlertContainer error={alert.error} status={alert.status}>
            {alert.message}
        </AlertContainer>
    );
}

const AlertContainer = styled.div`
    height: 40px;
    width: 85vw;
    display: ${({ status }) => (status ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    font-weight: 700;
    color: ${({ error }) => (error ? "#e06b6b" : "#6bbd9b")};
    background-color: ${({ error }) =>
        error ? "rgb(248, 217, 217)" : "rgb(237, 248, 246)"};
    border-radius: 4px;
    border: ${({ error }) =>
        error ? "1px solid #e06b6b" : "1px solid #5fe0aa"};
    box-shadow: 0 0 8px 3px rgba(255, 255, 255, 0.15);
`;
