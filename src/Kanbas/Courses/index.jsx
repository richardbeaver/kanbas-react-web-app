import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import CoursesNavBar from "./CoursesNavBar";
import * as client from "../Courses/client";

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const page = pathname.split("/").at(-1);

  const [course, setCourse] = useState(null);

  const fetchCourseById = async () => {
    const course = await client.fetchCourse(courseId);
    setCourse(course);
  };

  useEffect(() => {
    fetchCourseById();
  }, [courseId]);

  return (
    <>
      {course && <CoursesNavBar course={course} page={page} />}
      <hr />

      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>

        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Courses;
