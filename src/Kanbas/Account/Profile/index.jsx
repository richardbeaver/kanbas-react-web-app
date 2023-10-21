import { Link } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";
import { AiOutlineLink } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";

function Profile() {
  return (
    <div className="d-flex">

      <div>
        <img src="/images/blank-profile-photo.jpg"
             className="img-fluid rounded-circle col-4 col-sm-5 col-md-4 col-lg-3"
             alt="blank profile photo" />
        <h2>Richard Beaver</h2>

        <h3>Contact</h3>
        <p>No registered services. You can add some on the <Link
          to="#">settings</Link> page.</p>

        <h3>Biography</h3>
        <p>Faculty, Software Engineer, AI, Space, and renewables enthusiast.</p>

        <h3>Links</h3>
        <Link to="https://www.youtube.com/@WebDevTV"
              className="d-flex align-items-center">
          <AiOutlineLink />
          YouTube
          <BsBoxArrowUpRight className="ms-1" />
        </Link>
      </div>


      <div>
        <Link to="#"
              className="btn btn-secondary text-nowrap d-flex align-items-center"
              role="button">
          <FaPencil className="me-2" />
          Edit Profile
        </Link>
      </div>

    </div>
  );
}

export default Profile;
