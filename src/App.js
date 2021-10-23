import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes/routes";
import "./assets/css/reset.css";
import "./assets/css/global.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MyWallet from "./pages/MyWallet";
import NewEntry from "./pages/NewEntry";
import UserContext from "./contexts/UserContext";
import { useState } from "react";

function App() {
    const [user, setUser] = useState({ token: null, name: "" });

    console.log(user);
    return (
        <Router>
            <UserContext.Provider value={{ user, setUser }}>
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
            </UserContext.Provider>
        </Router>
    );
}

export default App;
