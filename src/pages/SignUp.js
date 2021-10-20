import { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../routes/routes";
import {
    PageContainer,
    ContentContainer,
} from "../components/_shared/containers";
import Input from "../components/_shared/Input";
import Button from "../components/_shared/Button";
import Logo from "../components/Logo";
import styled from "styled-components";

export default function SignUp() {
    const [disabled, setDisabled] = useState(false);
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [alertMismatch, setAlertMismatch] = useState(false);

    function signUp(e) {
        e.preventDefault();

        if (confirmPassword !== newUser.password) {
            setAlertMismatch(true);
            setTimeout(() => setAlertMismatch(false), 3000);
            return;
        }

        console.log(newUser);

        setDisabled(true);
    }

    return (
        <PageContainer>
            <ContentContainer>
                <Logo />
                <form onSubmit={signUp}>
                    <fieldset disabled={disabled}>
                        {alertMismatch && (
                            <Alert>Your passwords don't match.</Alert>
                        )}
                        <Input
                            placeholder="Name"
                            onChange={(e) =>
                                setNewUser({
                                    ...newUser,
                                    name: e.target.value,
                                })
                            }
                            value={newUser.name}
                            required
                        />
                        <Input
                            type="email"
                            placeholder="E-mail"
                            onChange={(e) =>
                                setNewUser({
                                    ...newUser,
                                    email: e.target.value,
                                })
                            }
                            required
                            value={newUser.email}
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            onChange={(e) =>
                                setNewUser({
                                    ...newUser,
                                    password: e.target.value,
                                })
                            }
                            required
                            value={newUser.password}
                            alert={alertMismatch}
                        />
                        <Input
                            type="password"
                            placeholder="Confirm your password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            alert={alertMismatch}
                            required
                        />

                        <Button disabled={disabled}>Sign Up</Button>
                    </fieldset>
                </form>
                <Link to={routes.signIn}>
                    Already have an account? Sign In!
                </Link>
            </ContentContainer>
        </PageContainer>
    );
}

const Alert = styled.p`
    color: #ffbfbf;
    margin-bottom: 10px;
`;
