import React from 'react';
import { ReactDOM } from 'react';
import logo from '../../../creative-agency/images/logos/logo.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light container mt-2">
                <a class="navbar-brand" href="#">
                    <img src={logo} width="150"  alt="" loading="lazy"/>
                </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto" style={{color: '#474747'}}>

                    <li class="nav-item active">
                        <a class="nav-link mr-5" href="">Home <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link  mr-5" href="src\pages\GradedCards.js">Our Graded cards</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link  mr-5" href="www.google.com">Booster Packs & Boxes</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link mr-5" href="src\Components\Home\HeaderMainn">Kurt's Finest</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link  mr-5" href="#">Our Team</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link mr-5" href="#">Contact us</a>
                    </li>

    

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;