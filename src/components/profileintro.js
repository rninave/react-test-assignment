import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import intro_bg from '../assets/images/intro_bg.jpg'
import profile_photo from '../assets/images/profile_photo.jpg'



function Profileintro() {

  const [displayText, setDisplayText] = useState('Add Friend');

  const handleClick = () => {
    if (displayText === 'Add Friend') {
      setDisplayText('Added');
    } else {
      setDisplayText('Add Friend');
    }
  };

  return (
    <div className="profileintro">
      <nav className="navbar navbar-expand-lg py-3">
        <div className="d-lg-flex w-100 px-md-5 px-4">
          <div className="navbar-brand position-relative">
            <img src={profile_photo} className="profile-img position-absolute"></img>
          </div>
          <div className="d-flex flex-lg-row flex-column-reverse justify-content-between w-100 ">
            <div className="collapse navbar-collapse menu-list" id="collapsible-menu">
              <ul className="navbar-nav nav-menu-custom">
                <li className="nav-item d-flex align-items-center menu-items">
                  <a href="#" class="nav-link mx-lg-3">Timeline</a>
                </li>
                <li className="nav-item d-flex align-items-center  menu-items">
                  <a href="#" class="nav-link mx-lg-3">About</a>
                </li>
                <li className="nav-item d-flex align-items-center  menu-items">
                  <a href="#" class="nav-link mx-lg-3">Album</a>
                </li>
                <li className="nav-item d-flex align-items-center  menu-items">
                  <a href="#" class="nav-link mx-lg-3">Friends</a>
                </li>
              </ul>
            </div>

            <div className="d-sm-flex justify-content-end align-item-cente mt-sm-0 mt-5 mb-sm-0 mb-3">
              <li className="nav-item d-flex align-items-center mb-sm-0 mb-3">
                <a href="#" class="nav-link me-3 text-white">1299 people following her</a>
              </li>
              <button className="btn btn-primary rounded-100" type="submit" onClick={handleClick}>{displayText}</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Profileintro;
