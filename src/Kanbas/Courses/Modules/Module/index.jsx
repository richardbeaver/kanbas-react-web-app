import { FaGripVertical } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";
import ModuleTitle from "./ModuleTitle";
import ModuleInfoLine from "./ModuleInfoLine";

function Module({ module }) {
  const iconsSize = "20";

  return (
    <>
      <ModuleTitle title={module.name} size={iconsSize} />
      <p>{module.description}</p>
      {module.lessons &&
        module.lessons.map((lesson, index) => (
          <div className="row align-items-center">
            <div className="col d-flex align-items-center">
              <button className="btn">
                <FaGripVertical />
              </button>
              <span className="fw-bold">{lesson.name}</span>
              <span>{lesson.description}</span>
            </div>

            <div className="col-4">
              <div className="btn-toolbar justify-content-end align-items-center">
                <AiFillCheckCircle
                  className="wd-icon-success"
                  size={iconsSize}
                />
                <button type="button" className="btn">
                  <FaEllipsisVertical size={iconsSize} />
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default Module;
