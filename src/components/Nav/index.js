import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/" >Jesus Diaz</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link " to="/aboutme">About Me</Link>
                        </li>
                        <li classNames="nav-item">
                            <Link className="nav-link" to="/portfolio" >Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/resume" >Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" >Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav;