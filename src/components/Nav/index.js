import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/" >Jesus Diaz</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link " href="/aboutme" >About Me</a>
                        </li>
                        <li classNames="nav-item">
                            <a className="nav-link" href="/portfolio" >Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/resume" >Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact" >Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav;