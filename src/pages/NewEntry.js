import { useContext, useState } from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import Button from "../components/_shared/Button";
import { PageContainer } from "../components/_shared/containers";
import Input from "../components/_shared/Input";
import Title from "../components/_shared/Title";
import { createEntry as submitEntry } from "../services/apiRequests";
import UserContext from "../contexts/UserContext";
import routes from "../routes/routes";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import ActionButton from "../components/_shared/ActionButton";
import amountSchema from "../schemas/amountSchema";
import descriptionSchema from "../schemas/descriptionSchema";

export default function NewEntry() {
    const [disabled, setDisabled] = useState(false);
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const { user } = useContext(UserContext);
    const { type: typeName } = useParams();
    const history = useHistory();

    function areInputsInvalid() {
        const validateAmount = amountSchema.validate(amount);
        const validateDescription = descriptionSchema.validate(description);

        if (validateAmount.error) {
            alert("The amount should be between 0.01 and 1 billion");
            return true;
        }

        if (validateDescription.error) {
            alert("Description should between 3 and 30 characters long");
            return true;
        }

        return false;
    }

    function createEntry(e) {
        e.preventDefault();
        setDisabled(true);

        if (areInputsInvalid()) {
            setDisabled(false);
            return;
        }

        submitEntry({ amount, description, type: typeName }, user.token)
            .then(() => {
                history.push(routes.mywallet);
            })
            .catch((error) => console.log(error.response.data));

        setDisabled(false);
    }
    return (
        <PageContainer>
            <InnerWrap>
                <TitleContainer>
                    <Title>
                        New <Type>{typeName}</Type>
                    </Title>
                    <ActionButton
                        onClick={() => history.push(routes.mywallet)}
                        customStyle={{ fontSize: "30px" }}
                    >
                        <IoArrowBackCircleOutline />
                    </ActionButton>
                </TitleContainer>
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

const InnerWrap = styled.div``;

const Type = styled.span`
    text-transform: capitalize;
`;

const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;
