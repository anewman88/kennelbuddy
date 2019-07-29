import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-default sticky-top justify-content-center bg-light">
               <a className="nav-link" href="/"><button type="button" className="btn btn-info text-white">Search Books</button></a>
               <a className="nav-link" href="/saved"><button type="button" className="btn btn-danger text-white">Saved Books</button></a>
        </nav>
    );
}

export default Nav;