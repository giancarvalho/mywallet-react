import styled from "styled-components";
import { PageContainer } from "../components/_shared/containers";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import ActionButton from "../components/_shared/ActionButton";

export default function MyWallet() {
    return (
        <PageContainer>
            <InnerWrapper>
                <TitleContainer>
                    <Title>Ola, Fulano</Title>
                    <ActionButton>
                        <RiLogoutBoxRLine />
                    </ActionButton>
                </TitleContainer>
                <RecordsContainer>
                    {/* <p>No income or expense records yet</p> */}
                </RecordsContainer>
                <EntriesButtonContainer>
                    <EntriesButton>
                        <AiOutlinePlusCircle />
                        New Income
                    </EntriesButton>
                    <EntriesButton>
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

const Title = styled.h1`
    display: inline-block;
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 20px;
`;

const RecordsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-grow: 1;
    background-color: #fff;
    border-radius: 8px;
    color: #868686;
    padding: 8px;
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

const EntriesContainer = styled.div`
    width: 100%;
`;
