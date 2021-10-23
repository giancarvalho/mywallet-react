import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes/routes";
import "./assets/css/reset.css";
import "./assets/css/global.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MyWallet from "./pages/MyWallet";
import NewEntry from "./pages/NewEntry";
import TokenContext from "./contexts/TokenContext";
import { useState } from "react";

function App() {
    const [token, setToken] = useState({ token: null });

    return (
        <Router>
            <TokenContext.Provider value={{ token, setToken }}>
                <Switch>
                    <Route path={routes.signIn} exact>
                        <SignIn />
                    </Route>
                    <Route path={routes.signUp} exact>
                        <SignUp />
                    </Route>
                    <Route path={routes.mywallet} exact>
                        <MyWallet />
                    </Route>
                    <Route path={`${routes.newEntry}/:type`} exact>
                        <NewEntry />
                    </Route>
                </Switch>
            </TokenContext.Provider>
        </Router>
    );
}

export default App;
