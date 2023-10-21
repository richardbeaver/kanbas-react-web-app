import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import Module from "./Module";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <div className="wd-module-list d-flex flex-column gap-3">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <Module key={index} module={module} />
        ))}
    </div>
  );
}

export default ModuleList;
