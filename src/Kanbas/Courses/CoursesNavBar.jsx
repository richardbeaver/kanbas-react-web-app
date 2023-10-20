import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { BiGlassesAlt } from "react-icons/bi";

function CoursesNavBar({ course, page }) {
  return (
    <div className="nav-bar pt-3 me-4 d-none d-sm-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-between align-items-center">
        <Link to="#">
          <FaBars className="wd-icon-primary me-3" size="30" />
        </Link>

        <div>
          <Link href="#" className="link-primary link-underline-opacity-0">
            {course.number}
          </Link>{" "}
          {`> ${page}`}
        </div>
      </div>

      <button className="btn btn-secondary d-flex align-items-center">
        <BiGlassesAlt className="me-2" size="20" />
        Student View
      </button>
    </div>
  );
}

export default CoursesNavBar;
