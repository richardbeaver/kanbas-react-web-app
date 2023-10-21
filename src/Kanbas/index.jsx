import { Navigate, Route, Routes } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Account from "./Account";
import Courses from "./Courses";
import Calendar from "./Calendar";
import CoursesList from "./Courses/CoursesList";

function Kanbas() {
  return (
    <>
      <div className="d-flex">
        <KanbasNavigation />

        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Navigate to={"Dashboard"} />} />
            <Route path="Account/*" element={<Account />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses" element={<CoursesList />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
            <Route path="Calendar" element={<Calendar />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Kanbas;
