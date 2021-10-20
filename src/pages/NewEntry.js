import { useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Button from "../components/_shared/Button";
import { PageContainer } from "../components/_shared/containers";
import Input from "../components/_shared/Input";
import Title from "../components/_shared/Title";

export default function NewEntry() {
    const [disabled, setDisabled] = useState(false);
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");

    const { type: typeName } = useParams();

    function createEntry(e) {
        e.preventDefault();
        console.log(`the amount is ${amount} for ${description}`);
        setDisabled(true);
        if (amount !== 0 && description.length > 3) {
            alert(`the amount is ${amount} for ${description}`);
        }

        setDisabled(false);
    }
    return (
        <PageContainer>
            <InnerWrap>
                <Title>
                    New <Type>{typeName}</Type>
                </Title>
                <form onSubmit={createEntry}>
                    <fieldset disabled={disabled}>
                        <Input
                            type="number"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                        <Input
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                        <Button disabled={disabled}>Save entry</Button>
                    </fieldset>
                </form>
            </InnerWrap>
        </PageContainer>
    );
}

const InnerWrap = styled.div`
    button {
        background-color: #a328d6;
    }
`;

const Type = styled.span`
    text-transform: capitalize;
`;