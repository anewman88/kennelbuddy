import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-default sticky-top justify-content-center bg-light">
            <a className="nav-link" href="/"><button type="button" className="btn btn-info text-white">Home</button></a>
            <a className="nav-link" href="/adminlogin"><button type="button" className="btn btn-info text-white">Admin</button></a>
        </nav>
    );
}

export default Nav;