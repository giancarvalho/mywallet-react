import { useEffect, useState } from "react";
import { useContext } from "react/cjs/react.development";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { getEntries } from "../services/apiRequests";
import Entries from "./Entries";

export default function RecordsDisplay() {
    const [entries, setEntries] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        getEntries(user.token)
            .then((response) => setEntries(response.data))
            .catch((error) => console.log(error.response?.data));
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
