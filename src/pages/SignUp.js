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
import { createUser } from "../services/apiRequests";
import { useHistory } from "react-router";

export default function SignUp({ sendAlert }) {
    const [disabled, setDisabled] = useState(false);
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [confirmPassword, setConfirmPassword] = useState("");
    const [alertMismatch, setAlertMismatch] = useState(false);
    const history = useHistory();

    function signUp(e) {
        e.preventDefault();
        setDisabled(true);

        if (confirmPassword !== newUser.password) {
            sendAlert({ message: "Your passwords don't match", error: true });
            setDisabled(false);
            setAlertMismatch(true);
            setTimeout(() => setAlertMismatch(false), 5000);
            return;
        }

        createUser(newUser)
            .then(() => history.push(`${routes.signIn}?registered=true`))
            .catch((error) => {
                setDisabled(false);
                alert(
                    "It wasn't possible to create your account. Please, try again."
                );
            });
    }

    return (
        <PageContainer>
            <ContentContainer>
                <Logo />
                <form onSubmit={signUp}>
                    <fieldset disabled={disabled}>
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
