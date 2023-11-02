import Card from "./Card";
import "./index.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setCourse,
  deleteCourse,
  updateCourse,
  addCourse,
} from "./coursesReducer";

function Dashboard() {
  const courses = useSelector((state) => state.coursesReducer.courses);
  const course = useSelector((state) => state.coursesReducer.course);

  const dispatch = useDispatch();

  return (
    <div className="wd-dashboard">
      <div className="nav-bar mt-3 me-2 d-none d-md-block">
        <h1 className="display-5 text-left">Dashboard</h1>
      </div>
      <hr />

      <h4>Published Courses ({courses.length})</h4>
      <hr />

      <h5>Course</h5>
      <form className="d-flex flex-column gap-1">
        <input
          value={course.name}
          className="form-control"
          onChange={(e) =>
            dispatch(setCourse({ ...course, name: e.target.value }))
          }
        />
        <input
          value={course.number}
          className="form-control"
          onChange={(e) =>
            dispatch(setCourse({ ...course, number: e.target.value }))
          }
        />
        <input
          value={course.startDate}
          className="form-control"
          type="date"
          onChange={(e) =>
            dispatch(setCourse({ ...course, startDate: e.target.value }))
          }
        />
        <input
          value={course.endDate}
          className="form-control"
          type="date"
          onChange={(e) =>
            dispatch(setCourse({ ...course, endDate: e.target.value }))
          }
        />

        <div className="d-flex gap-2">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(addCourse(course))}
          >
            Add
          </button>
          <button
            className="btn btn-info"
            onClick={() => dispatch(updateCourse(course))}
          >
            Update
          </button>
        </div>
      </form>

      <div className="d-flex flex-wrap p-2 gap-3">
        {courses.map((course) => (
          <div className="d-flex flex-column">
            <Card key={course._id} course={course} />

            <div className="d-flex gap-2 p-1">
              <button
                className="btn btn-secondary"
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(setCourse(course));
                }}
              >
                Edit
              </button>

              <button
                className="btn btn-danger"
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(deleteCourse(course._id));
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
