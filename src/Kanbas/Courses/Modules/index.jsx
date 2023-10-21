import ModuleList from "./ModuleList";
import ModulesButtons from "./ModulesButtons";

function Modules() {
  return (
    <div className="d-flex flex-column gap-1">
      <ModulesButtons />
      <hr />
      <ModuleList />
    </div>
  );
}

export default Modules;
