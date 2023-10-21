import { Link } from "react-router-dom";

import db from "../Database";

function CoursesList() {
  const courses = db.courses;

  return (
    <>
      <div className="nav-bar mt-3 me-2 d-none d-md-block">
        <h1 className="display-5 text-left">Courses</h1>
      </div>
      <hr />

      <ul className="list-group">
        {courses.map((course, index) => (
          <li key={index} className="list-group-item">
            <Link
              to={`/Kanbas/Courses/${course._id}`}
              className="text-decoration-none"
            >
              <h5>{course.name}</h5>
            </Link>
            <p>{course.number}, {`${course.startDate} - ${course.endDate}`}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CoursesList;
