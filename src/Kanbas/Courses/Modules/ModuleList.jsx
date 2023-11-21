import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Module from "./Module";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const dispatch = useDispatch();

  // const [module, setModule] = useState(null);
  // const [modules, setModules] = useState(null);

  const module = useSelector((state) => state.modulesReducer.modules);
  const modules = useSelector((state) => state.modulesReducer.modules);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(courseId);
    setModules(modules);
  };

  useEffect(() => {
    fetchModules();
    client
      .findModulesForCourse(courseId)
      .then((modules) => dispatch(setModules(modules)));
  }, [courseId]);

  return (
    <>
      {modules && module && (
        <div className="wd-module-list d-flex flex-column gap-3">
          <form className="form">
            <div className="float-start me-2">
              <input
                className="form-control mb-2"
                value={module.name}
                onChange={(e) => setModule({ ...module, name: e.target.value })}
              />
              <textarea
                className="form-control"
                value={module.description}
                onChange={(e) =>
                  setModule({ ...module, description: e.target.value })
                }
              />
            </div>
            <div className="d-flex gap-1">
              <button className="btn btn-success" onClick={handleAddModule}>
                Add
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleUpdateModule(module._id)}
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
      )}
    </>
  );
}

export default ModuleList;
