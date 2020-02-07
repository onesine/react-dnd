import React from "react";
import {
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">FormBuilder</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="nav-item nav-link">Formbuilder</Link>
                    <Link to="/classicDnD" className="nav-item nav-link">Drag and Drop</Link>
                    <Link to="/complexDND" className="nav-item nav-link">Complex DND</Link>
                    <Link to="/horizontalDnD" className="nav-item nav-link">Vertical Drag and drop</Link>
                    <Link to="/example" className="nav-item nav-link">Preview</Link>
                </div>
            </div>
        </nav>
    )
};

export default Header;