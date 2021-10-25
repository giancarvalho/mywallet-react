import styled from "styled-components";
import { PageContainer } from "../components/_shared/containers";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import ActionButton from "../components/_shared/ActionButton";
import RecordsDisplay from "../components/RecordsDisplay";
import Title from "../components/_shared/Title";
import { useHistory } from "react-router";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import routes from "../routes/routes";
export default function MyWallet() {
    const history = useHistory();
    const { user } = useContext(UserContext);
    const userFirstName = user.name.split(" ")[0];

    function signOut() {
        localStorage.removeItem("user");
        history.push(routes.signIn);
    }

    return (
        <PageContainer>
            <InnerWrapper>
                <TitleContainer>
                    <Title>
                        Hi, <Name>{userFirstName}</Name>
                    </Title>
                    <ActionButton onClick={signOut}>
                        <RiLogoutBoxRLine />
                    </ActionButton>
                </TitleContainer>
                <RecordsDisplay />
                <EntriesButtonContainer>
                    <EntriesButton
                        onClick={() => history.push("/new-entry/income")}
                    >
                        <AiOutlinePlusCircle />
                        New Income
                    </EntriesButton>

                    <EntriesButton
                        onClick={() => history.push("/new-entry/expense")}
                    >
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
    background-color: #7509a3;
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

const Name = styled.span`
    display: inline-block;
    text-transform: capitalize;
    width: 45vw;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    vertical-align: bottom;
`;
