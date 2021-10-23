import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import routes from "../routes/routes";
import {
    PageContainer,
    ContentContainer,
} from "../components/_shared/containers";
import Input from "../components/_shared/Input";
import Button from "../components/_shared/Button";
import Logo from "../components/Logo";
import { authenticateUser } from "../services/apiRequests";
import { useHistory } from "react-router";
import TokenContext from "../contexts/TokenContext";

export default function SignIn() {
    const [disabled, setDisabled] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const { setToken } = useContext(TokenContext);
    const storedToken = localStorage.getItem("token");

    useEffect(() => {
        if (storedToken) {
            setToken(storedToken);
            history.push("/mywallet");
            return;
        }
    }, [storedToken, history, setToken]);

    function storeToken(token) {
        localStorage.setItem("token", token);
    }

    function signIn(e) {
        e.preventDefault();
        setDisabled(true);

        authenticateUser({ email, password })
            .then((response) => {
                storeToken(response.data);
                setToken(response.data);
                history.push("/mywallet");
            })
            .catch((error) => {
                alert(error.response.data);
                setDisabled(false);
            });
    }

    return (
        <PageContainer>
            <ContentContainer>
                <Logo />
                <form onSubmit={signIn}>
                    <fieldset disabled={disabled}>
                        <Input
                            placeholder="E-mail"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />

                        <Button disabled={disabled}>Sign In</Button>
                    </fieldset>
                </form>
                <Link to={routes.signUp}>First time? Sign up!</Link>
            </ContentContainer>
        </PageContainer>
    );
}
