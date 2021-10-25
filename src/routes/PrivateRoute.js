import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";
import routes from "./routes";

export default function PrivateRoute({ element: Element, path, ...rest }) {
    const { user } = useContext(UserContext);

    return (
        <Route exact path={path}>
            {user.token ? (
                <Element {...rest} />
            ) : (
                <Redirect to={routes.signIn} />
            )}
        </Route>
    );
}
