import dayjs from "dayjs";
import { useState } from "react";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";

function Entry({ entryData }) {
    const [showDeleteBtn, setShowDeleteBtn] = useState(false);

    return (
        <Item onClick={() => setShowDeleteBtn(!showDeleteBtn)}>
            <DeleteButton visible={showDeleteBtn}>
                <DeleteIcon visible={showDeleteBtn} />
            </DeleteButton>
            <ContentContainer>
                <Date visible={!showDeleteBtn}>
                    {dayjs(entryData.date).format("DD-MM")}
                </Date>
                <Details>{entryData.description}</Details>
                <Price
                    negative={entryData.type === "expense"}
                    visible={!showDeleteBtn}
                >
                    {entryData.amount}
                </Price>
            </ContentContainer>
        </Item>
    );
}

export default function Entries({ entriesData }) {
    const balance = calculateBalance(entriesData);
    function calculateBalance() {
        const balance = entriesData.reduce((previousValue, currentValue) => {
            if (currentValue.type === "expense") {
                return previousValue - Number(currentValue.amount);
            }

            return previousValue + Number(currentValue.amount);
        }, 0);

        return balance;
    }

    return (
        <EntriesContainer>
            <RecordList>
                {entriesData.map((entryData, index) => (
                    <Entry entryData={entryData} key={index} />
                ))}
            </RecordList>
            <BalanceContainer>
                <h2>BALANCE</h2>
                <Balance negative={balance < 0}>{balance.toFixed(2)}</Balance>
            </BalanceContainer>
        </EntriesContainer>
    );
}

const EntriesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const BalanceContainer = styled.div`
    width: 100%;
    font-size: 16px;
    display: flex;
    justify-content: space-between;

    h2 {
        display: inline-block;
        color: #000;
        font-weight: 700;
    }
`;

const Balance = styled.p`
    color: ${({ negative }) => (negative ? "#c70000" : "#03ac00")};
`;

const RecordList = styled.ul`
    position: relative;
    width: 100%;
    flex: 1 1 230px;
    overflow-y: scroll;
    overflow-x: hidden;
    color: #000;
    font-size: 15px;
    padding: 5px 3px;
`;

const Details = styled.div`
    flex-grow: 1;
    width: 50%;
    word-wrap: break-word;
    transition: width 0.2s ease-in-out;

    ::first-letter {
        text-transform: capitalize;
    }
`;

const Date = styled.span`
    display: ${({ visible }) => (visible ? "initial" : "none")};
    min-width: 40px;
    color: #c6c6c6;
    margin-right: 8px;
`;

const Price = styled.span`
    text-align: end;
    min-width: 50px;
    margin: 0 10px 0 5px;
    color: ${({ negative }) => (negative ? "#c70000" : "#03ac00")};
    align-self: flex-end;
`;

const Item = styled.li`
    display: flex;
    margin-bottom: 5px;
`;

const DeleteButton = styled.div`
    width: ${({ visible }) => (visible ? "10px" : "0")};
    margin-right: ${({ visible }) => (visible ? "50px" : "0")};
    pointer-events: ${({ visible }) => (visible ? "inital" : "none")};
    transition: width 0.15s ease-in-out;
`;

const ContentContainer = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
`;

const DeleteIcon = styled(AiOutlineDelete)`
    font-size: 20px;
    opacity: ${({ visible }) => (visible ? "1" : "0")};
    transition: opacity 0.15s ease-in-out;
`;
