import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes/routes";
import "./assets/css/reset.css";
import "./assets/css/global.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MyWallet from "./pages/MyWallet";
import NewEntry from "./pages/NewEntry";
import UserContext from "./contexts/UserContext";
import { useCallback, useState } from "react";
import PrivateRoute from "./routes/PrivateRoute";
import Alert from "./components/_shared/Alert";

function App() {
    const [user, setUser] = useState({ token: null, name: "" });
    const [alert, setAlert] = useState({
        status: false,
        message: "",
        error: false,
    });

    const sendAlert = useCallback(({ message, error }) => {
        setAlert({ status: true, message, error });
    }, []);

    return (
        <Router>
            <UserContext.Provider value={{ user, setUser }}>
                <Switch>
                    <Route path={routes.signIn} exact>
                        <SignIn sendAlert={sendAlert} />
                    </Route>
                    <Route path={routes.signUp} exact>
                        <SignUp sendAlert={sendAlert} />
                    </Route>
                    <PrivateRoute
                        path={routes.mywallet}
                        element={MyWallet}
                        exact
                        sendAlert={sendAlert}
                    />
                    <PrivateRoute
                        path={`${routes.newEntry}/:type`}
                        element={NewEntry}
                        exact
                        sendAlert={sendAlert}
                    />
                </Switch>
            </UserContext.Provider>

            <Alert alert={alert} setAlert={setAlert} />
        </Router>
    );
}

export default App;
