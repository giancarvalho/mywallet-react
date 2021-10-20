import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes/routes";
import "./assets/css/reset.css";
import "./assets/css/global.css";
import SignIn from "./pages/SignIn";
function App() {
    return (
        <Router>
            <Switch>
                <Route path={routes.signIn}>
                    <SignIn />
                </Route>
                <Route path={routes.signUp}>//signUp</Route>
                <Route path={routes.home}>//home</Route>
            </Switch>
        </Router>
    );
}

export default App;
