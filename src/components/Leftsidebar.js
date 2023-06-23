import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import work_icon from '../assets/images/work_icon.svg'
import home_icon from '../assets/images/home.svg'
import school_icon from '../assets/images/school.svg'
import location_icon from '../assets/images/location.svg'
import following_icon from '../assets/images/following.svg'
function Leftsidebar() {
  return (
    <div className="leftsidebar">
      <h4 className="fw-bold mb-3 text-white">Intro</h4>
      <button className="btn btn-fill-black w-100 mb-3">Add Bio</button>
      <ul class="list-group">
        <li class="list-group-item border-0 px-0 py-2 d-flex align-item-center body-color text-white">
          <span class="material-icons text-white me-2">
            work
          </span>Former Summer Internship at ONGC Limited
        </li>
        <li class="list-group-item border-0 px-0 py-2 d-flex align-item-center body-color text-white">
          <span class="material-icons text-white me-2">
            school
          </span>Studied at IIT Kharagpur
        </li>
        <li class="list-group-item border-0 px-0 py-2 d-flex align-item-center body-color text-white">
          <span class="material-icons text-white me-2">
            school
          </span>Went to Dilhi Public School, Jaypur
        </li>
        <li class="list-group-item border-0 px-0 py-2 d-flex align-item-center body-color text-white">
          <span class="material-icons text-white me-2">
            home
          </span>Lives in Mumbai, Maharashtra
        </li>
        <li class="list-group-item border-0 px-0 py-2 d-flex align-item-center body-color text-white">
          <span class="material-icons text-white me-2">
            location_on
          </span>From Jaypur, Rajasthan
        </li>
        <li class="list-group-item border-0 px-0 py-2 d-flex align-item-center body-color text-white">
          <span class="material-icons text-white me-2">
            rss_feed
          </span>Followed by 241 people
        </li>
      </ul>
    </div>
  );
}

export default Leftsidebar;
