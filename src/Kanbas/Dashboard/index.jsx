import Card from "./Card";
import "./index.css";
import { Link } from "react-router-dom";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div className="wd-dashboard">
      <div className="nav-bar mt-3 me-2 d-none d-md-block">
        <h1 className="display-5 text-left">Dashboard</h1>
      </div>
      <hr />

      <h4>Published Courses ({courses.length})</h4>
      <hr />

      <h5>Course</h5>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />

      <button className="btn btn-primary me-2" onClick={addNewCourse}>
        Add
      </button>
      <button className="btn btn-info" onClick={updateCourse}>
        Update
      </button>

      <div className="list-group d-flex flex-wrap">
        {courses.map((course) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
            className="list-group-item"
          >
            <button
              className="btn btn-secondary me-2"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}
            >
              Edit
            </button>

            <button
              className="btn btn-danger me-2"
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}
            >
              Delete
            </button>

            {course.name}
          </Link>
        ))}
        {/* {courses.map((course) => (
          <Card key={course._id} course={course} />
        ))} */}
      </div>
    </div>
  );
}

export default Dashboard;
