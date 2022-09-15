import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import ResetPwd from "./components/auth/ResetPwd";

import "./App.css";
import VerifyEmail from "./components/auth/VerifyEmail";
import { Link } from "react-router-dom";
import Modal from "./components/dashboard/Modal";
import { useSelector } from "react-redux";

// Check for token to keep user logged in
if (localStorage.authToken) {
  // Set auth token header auth
  const token = localStorage.authToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
const App = () => {
  const { modal } = useSelector((state) => state);
  const [title, setTitle] = useState(modal.title);
  const [open, setOpen] = useState(modal.open);
  const [content, setContent] = useState(modal.content);
  useEffect(() => {
    setTitle(modal.title);
    setOpen(modal.open);
    setContent(modal.content);
  }, [modal.title, modal.open, modal.content]);
  console.log("received modal props", modal);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Modal title={title} content={content} open={open} />

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/reset-password" component={ResetPwd} />
          <Route
            exact
            path="/users/:id/verify/:token"
            component={VerifyEmail}
          />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route
            path="/*"
            component={() => (
              <div>
                404 Page Not Found <br /> Back to <Link to="/">Home</Link>
              </div>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
