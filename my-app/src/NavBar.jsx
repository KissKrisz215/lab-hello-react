import React from "react";
import NavbarLogo from './images/logo1.png'
import HamburgerIcon from './images/logo2.png'

const NavBar = () => {
    return (
        <div class="navbar">
        <div class="container">
        <a href="/"><img class="navbar-logo" src={NavbarLogo} alt="" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span><img class="navbar-toggle" src={HamburgerIcon} alt="" /></span>
    </button>
        <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
        </div>
        </div>
      </div>
    );
}

export default NavBar;