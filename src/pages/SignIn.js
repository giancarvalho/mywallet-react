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
import { useHistory, useLocation } from "react-router";
import UserContext from "../contexts/UserContext";

export default function SignIn({ sendAlert }) {
    const [disabled, setDisabled] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const { setUser } = useContext(UserContext);
    const storedUser = getStoredUser();
    const isRegistered = useQuery().get("registered");

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    useEffect(() => {
        if (storedUser) {
            setUser(storedUser);
            history.push(routes.mywallet);
            return;
        }

        if (isRegistered) {
            sendAlert({
                message: "Success! Sign in and start using your wallet.",
            });
        }
    }, [storedUser, history, setUser, isRegistered, sendAlert]);

    function getStoredUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
    function storeUser(user) {
        localStorage.setItem("user", JSON.stringify(user));
    }

    function signIn(e) {
        e.preventDefault();
        setDisabled(true);

        authenticateUser({ email, password })
            .then((response) => {
                storeUser(response.data);
                setUser(response.data);
                history.push(routes.mywallet);
            })
            .catch((error) => {
                sendAlert({
                    message: error.response
                        ? error.response?.data
                        : "Our server is out of reach at the moment.",
                    error: true,
                });

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
                            required
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />

                        <Button disabled={disabled}>Sign In</Button>
                    </fieldset>
                </form>
                <Link to={routes.signUp}>First time? Sign up!</Link>
            </ContentContainer>
        </PageContainer>
    );
}
