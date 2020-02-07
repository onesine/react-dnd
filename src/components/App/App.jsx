import React from 'react';
import "../App/App.css"
import Header from "../partials/Header.jsx";
import {
    Switch,
    Route,
} from "react-router-dom";
import OverViewExample from "../OverViewExample/OverViewExample";
import FormBuilder from "../FormBuilder/FormBuilder";
import Horizontal from "../HorizontalDND/Horizontal";
import Classic from "../ClassicDND/Classic";
import ComplexDND from "../ComplexDND/ComplexDND";

function App() {
    return (
        <div>
            <Header/>

            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <FormBuilder />
                    </Route>
                    <Route exact path="/classicDnD">
                        <Classic />
                    </Route>
                    <Route exact path="/complexDND">
                        <ComplexDND />
                    </Route>
                    <Route exact path="/horizontalDnD">
                        <Horizontal />
                    </Route>
                    <Route path="/example">
                        <OverViewExample />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default App;
