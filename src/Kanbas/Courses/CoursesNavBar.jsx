import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { BiGlassesAlt } from "react-icons/bi";

function CoursesNavBar({ course, page }) {
  return (
    <div className="nav-bar mx-3 mt-3 d-flex justify-content-between align-items-center">
      <div className="d-flex gap-3 justify-content-between align-items-center">
        <Link to="#">
          <FaBars className="wd-icon-primary me-3" size="30" />
        </Link>

        <div>
          <Link
            to={`/Kanbas/Courses/${course._id}`}
            className="link-primary link-underline-opacity-0"
          >
            {course.name}
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
