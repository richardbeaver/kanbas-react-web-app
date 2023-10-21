import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

function AccountNavBar() {
  return (
    <div
      className="nav-bar mx-3 mt-3 d-flex gap-3 justify-content-start align-items-start">
      <Link to="#">
        <FaBars className="wd-icon-primary me-3" size="30" />
      </Link>
      <h4>Richard Beaver's Profile</h4>
    </div>
  );
}

export default AccountNavBar;
