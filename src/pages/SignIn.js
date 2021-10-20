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

export default function SignIn() {
    const [disabled, setDisabled] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    function login(e) {
        e.preventDefault();
        setDisabled(true);
        //submit to the api
    }

    return (
        <PageContainer>
            <ContentContainer>
                <Logo />
                <form onSubmit={login}>
                    <fieldset disabled={disabled}>
                        <Input
                            placeholder="E-mail"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <Input
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />

                        <Button disabled={disabled}>Entrar</Button>
                    </fieldset>
                </form>
                <Link to={routes.signUp}>First time? Sign up!</Link>
            </ContentContainer>
        </PageContainer>
    );
}
