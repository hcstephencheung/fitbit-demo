import React from "react";

import Home from "./Home/home";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
    return (
        <React.Fragment>
            <link
                rel="stylesheet"
                href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
            />
            <div className="App">
                <Home />
            </div>
        </React.Fragment>
    );
}

export default App;
