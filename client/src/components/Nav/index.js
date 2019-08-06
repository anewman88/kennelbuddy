import React from "react";
import "./Nav.css"

const Nav = props => {
    return (
        <nav className="navbar navbar-default sticky-top justify-content-left bg-light">
            <a className="nav-link" href="/"><button type="button" className="btn btn-info text-white">Home</button></a>
            <h2>{props.HeadingText}</h2>
            <a className="nav-link" href="/adminlogin"><button type="button" className="btn btn-info text-white">Admin</button></a>
        </nav>
    );
}

export default Nav;