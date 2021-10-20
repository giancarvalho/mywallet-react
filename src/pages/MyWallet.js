import styled from "styled-components";
import { PageContainer } from "../components/_shared/containers";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import ActionButton from "../components/_shared/ActionButton";
import RecordsDisplay from "../components/RecordsDisplay";
import Title from "../components/_shared/Title";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
export default function MyWallet() {
    const history = useHistory();

    return (
        <PageContainer>
            <InnerWrapper>
                <TitleContainer>
                    <Title>Ola, Fulano</Title>
                    <ActionButton>
                        <RiLogoutBoxRLine />
                    </ActionButton>
                </TitleContainer>
                <RecordsDisplay />
                <EntriesButtonContainer>
                    <EntriesButton onClick={() => history.push("/income")}>
                        <AiOutlinePlusCircle />
                        New Income
                    </EntriesButton>

                    <EntriesButton onClick={() => history.push("/expense")}>
                        <AiOutlineMinusCircle />
                        New Expense
                    </EntriesButton>
                </EntriesButtonContainer>
            </InnerWrapper>
        </PageContainer>
    );
}

const InnerWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const EntriesButtonContainer = styled.div`
    display: flex;
    width: 100%;
    height: 90px;
    margin-top: 10px;
`;

const EntriesButton = styled.div`
    height: 100%;
    width: 48%;
    border-radius: 5px;
    background-color: #9e18d8;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    :first-child {
        margin-right: 8px;
    }

    svg {
        font-size: 23px;
    }
`;
