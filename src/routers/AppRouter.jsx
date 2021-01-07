import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/firebase";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";

import JournalPage from "../pages/journal/JournalPage";
import AuthRouter from "./AuthRouter";
import { login } from "../redux/auth/auth-actions";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { startLoadingNotes } from "../redux/notes/notes-actions";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLogged(true);
        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLogged(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLogged]);

  if (checking) {
    return <h1>Espere...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLogged}
          />

          <PrivateRoute
            exact
            path="/"
            component={JournalPage}
            isAuthenticated={isLogged}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
