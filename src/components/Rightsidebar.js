import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import profile_1 from '../assets/images/profile_1.jpg';
import profile_2 from '../assets/images/profile_2.jpg';
import profile_3 from '../assets/images/profile_3.jpg';
import profile_4 from '../assets/images/profile_4.jpg';
import profile_5 from '../assets/images/profile_5.jpg';


function Rightsidebar() {
  return (
    <div className="rightsidebar">
      <h4 className="fw-bold mb-4 heading-color">Who to Follow</h4>
      <ul className="list-group">
        <li className="list-group-item follow-list px-0 py-2 d-flex align-item-center body-color">
          <img src={profile_1} className="profile-img me-3"></img>
          <div className="username content-list">
            <Link to="/friend" className="text-decoration-none username">Diana Amber</Link>
            <button className="btn btn-link-purple p-0 d-block text-decoration-none">Add Friend</button>
          </div>
        </li>

        <li className="list-group-item follow-list px-0 py-2 d-flex align-item-center body-color">
          <img src={profile_2} className="profile-img me-3"></img>
          <div className="username content-list">
            <Link to="/friend" className="text-decoration-none username">Cris Haris</Link>
            <button className="btn btn-link-purple p-0 d-block text-decoration-none">Add Friend</button>
          </div>
        </li>

        <li className="list-group-item follow-list px-0 py-2 d-flex align-item-center body-color">
          <img src={profile_3} className="profile-img me-3"></img>
          <div className="username content-list">
            <Link to="/friend" className="text-decoration-none username">Barin Walton</Link>
            <button className="btn btn-link-purple p-0 d-block text-decoration-none">Add Friend</button>
          </div>
        </li>

        <li className="list-group-item follow-list px-0 py-2 d-flex align-item-center body-color">
          <img src={profile_4} className="profile-img me-3"></img>
          <div className="username content-list">
            <Link to="/friend" className="text-decoration-none username">Olivia Steward</Link>
            <button className="btn btn-link-purple p-0 d-block text-decoration-none">Add Friend</button>
          </div>
        </li>

        <li className="list-group-item follow-list px-0 py-2 d-flex align-item-center body-color">
          <img src={profile_5} className="profile-img me-3"></img>
          <div className="username content-list">
            <Link to="/friend" className="text-decoration-none username">Sophia Page</Link>
            <button className="btn btn-link-purple p-0 d-block text-decoration-none">Add Friend</button>
          </div>
        </li>

      </ul>
    </div>
  );
}

export default Rightsidebar;
