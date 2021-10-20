import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes/routes";
import "./assets/css/reset.css";
import "./assets/css/global.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MyWallet from "./pages/MyWallet";
import Income from "./pages/Income";

function App() {
    return (
        <Router>
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
                <Route path={routes.income} exact>
                    <Income />
                </Route>
                <Route path={routes.expense} exact>
                    {/* Expense Component */}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
