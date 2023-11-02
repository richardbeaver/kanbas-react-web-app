import { Navigate, Route, Routes } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Account from "./Account";
import Courses from "./Courses";
import Calendar from "./Calendar";
import CoursesList from "./Courses/CoursesList";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  return (
    <Provider store={store}>
      <div className="d-flex flex-column flex-sm-row">
        <div className="d-none d-sm-flex">
          <KanbasNavigation />
        </div>

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
    </Provider>
  );
}

export default Kanbas;
