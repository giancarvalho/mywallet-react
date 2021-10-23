import { useEffect, useState } from "react";
import { useContext } from "react/cjs/react.development";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { getEntries } from "../services/apiRequests";
import dayjs from "dayjs";
function Entries({ entriesData }) {
    console.log(entriesData);
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
                {entriesData.map((entry, index) => (
                    <Item key={index}>
                        <Date>{dayjs(entry.date).format("DD-MM")}</Date>
                        <Details>{entry.description}</Details>{" "}
                        <Price negative={entry.type === "expense"}>
                            {entry.amount}
                        </Price>
                    </Item>
                ))}
            </RecordList>
            <BalanceContainer>
                <h2>BALANCE</h2>
                <Balance negative={balance < 0}>{balance.toFixed(2)}</Balance>
            </BalanceContainer>
        </EntriesContainer>
    );
}

export default function RecordsDisplay() {
    const [entries, setEntries] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        getEntries(user.token)
            .then((response) => setEntries(response.data))
            .catch((error) => console.log(error.response.data));
    }, [user]);

    return (
        <DisplayContainer>
            {entries.length > 0 ? (
                <Entries entriesData={entries} />
            ) : (
                <p>No income or expense entries yet</p>
            )}
        </DisplayContainer>
    );
}

const DisplayContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-grow: 1;
    background-color: #fff;
    border-radius: 8px;
    color: #868686;
    padding: 12px 8px;
`;

const EntriesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
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
    width: 100%;
    flex-grow: 1;
    overflow-y: scroll;
    color: #000;
    font-size: 15px;
`;

const Details = styled.div`
    flex-grow: 1;

    ::first-letter {
        text-transform: capitalize;
    }
`;

const Date = styled.span`
    color: #c6c6c6;
    margin-right: 8px;
`;

const Price = styled.span`
    color: ${({ negative }) => (negative ? "#c70000" : "#03ac00")};
    align-self: flex-end;
`;

const Item = styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
`;
