

import React from "react";

const NavBar = (props) => {
    return (
        <nav
            className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div className="container">
                <a className="navbar-brand" asp-area="" asp-controller="Home"
                   asp-action="Index">BobbyTheBear</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item">
                            <a className="nav-link text-dark" asp-area="" asp-controller="Home"
                               asp-action="Index">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" asp-area="" asp-controller="Home"
                               asp-action="Privacy">Privacy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;