import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import Module from "./Module";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <ul className="list-group">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <Module key={index} module={module} />
        ))}
    </ul>
  );
}

export default ModuleList;
