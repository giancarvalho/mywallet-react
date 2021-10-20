import { useState } from "react";
import styled from "styled-components";

function Records() {
    return (
        <EntriesContainer>
            <RecordList>
                <Item>
                    <Date>30/11</Date>
                    <Details>Lunch Mother</Details> <Price>14.55</Price>
                </Item>
            </RecordList>
            <BalanceContainer>
                <h2>BALANCE</h2>
                <Balance>2444.96</Balance>
            </BalanceContainer>
        </EntriesContainer>
    );
}

export default function RecordsDisplay() {
    const [records, setRecords] = useState([]);

    function getRecords() {
        //api records call
    }

    return (
        <RecordsContainer>
            {records.length > 0 ? (
                <Records />
            ) : (
                <p>No income or expense entries yet</p>
            )}
        </RecordsContainer>
    );
}

const RecordsContainer = styled.div`
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
    color: #03ac00;
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
`;

const Date = styled.span`
    color: #c6c6c6;
    margin-right: 8px;
`;

const Price = styled.span`
    color: #c70000;
    align-self: flex-end;
`;

const Item = styled.li`
    display: flex;
    justify-content: space-between;
`;
