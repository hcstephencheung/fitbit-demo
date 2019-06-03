import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home/home";
import Profile from "./Profile/profile";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/auth/callback" component={Profile} />
        </Router>
    );
}

export default App;
