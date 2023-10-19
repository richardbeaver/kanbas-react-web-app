import db from "../Database";
import Card from "./Card";
import "./index.css";

function Dashboard() {
  const courses = db.courses;

  return (
    <div className="wd-dashboard">
      <div className="nav-bar mt-3 me-2 d-none d-md-block">
        <h1 className="display-5 text-left">Dashboard</h1>
      </div>
      <hr />

      <h4>Published Courses ({courses.length})</h4>
      <hr />

      <div className="d-flex flex-wrap">
        {courses.map((course) => (
          <Card key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
