import { useState, useEffect } from "react";
import Card from "./Card";
import "./index.css";
import * as client from "../Courses/client";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({});

  const fetchCourses = async () => {
    const courses = await client.fetchCourses();
    setCourses(courses);
  };

  const deleteCourse = async (id) => {
    try {
      await client.deleteCourse(id);
      setCourses(courses.filter((course) => course._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateCourse = async () => {
    try {
      await client.updateCourse(course);
      setCourses(courses.map((c) => (c._id === course._id ? course : c)));
    } catch (error) {
      console.log(error);
    }
  };

  const addCourse = async () => {
    const newCourse = await client.addCourse(course);
    setCourses([newCourse, ...courses]);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

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

        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={addCourse}>
            Add
          </button>
          <button className="btn btn-info" onClick={updateCourse}>
            Update
          </button>
        </div>
      </form>

      <div className="d-flex flex-wrap p-2 gap-3">
        {courses.map((course, index) => (
          <div className="d-flex flex-column" key={index}>
            <Card course={course} />

            <div className="d-flex gap-2 p-1">
              <button
                className="btn btn-secondary"
                onClick={() => setCourse(course)}
              >
                Edit
              </button>

              <button
                className="btn btn-danger"
                onClick={() => deleteCourse(course._id)}
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
