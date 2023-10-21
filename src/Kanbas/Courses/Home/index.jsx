import ModuleList from "../Modules/ModuleList";
import CourseStatus from "./CourseStatus";
import ModulesButtons from "../Modules/ModulesButtons";

function Home() {
  return (
    <div className="row">
      <div className="col d-flex flex-column gap-3">
        <ModulesButtons />
        <hr />
        <ModuleList />
      </div>
      <div className="col-3">
        <CourseStatus />
      </div>
    </div>
  );
}

export default Home;
