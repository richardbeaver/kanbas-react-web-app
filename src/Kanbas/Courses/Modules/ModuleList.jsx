import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Module from "./Module";
import { useSelector, useDispatch } from "react-redux";
import { addModule, updateModule, setModule } from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);

  const dispatch = useDispatch();

  return (
    <div className="wd-module-list d-flex flex-column gap-3">
      <form className="form">
        <div className="float-start me-2">
          <input
            className="form-control mb-2"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
            className="form-control"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </div>
        <div className="d-flex gap-1">
          <button
            className="btn btn-success"
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          >
            Add
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => dispatch(updateModule(module))}
          >
            Update
          </button>
        </div>
      </form>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <Module key={index} module={module} />
        ))}
    </div>
  );
}

export default ModuleList;
