import { FaGripVertical } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteModule, setModule } from "../modulesReducer";

function ModuleTitle({ module, iconsSize }) {
  const dispatch = useDispatch();

  return (
    <div className="wd-module-row bg-secondary d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <button className="btn">
          <FaGripVertical className="mb-1" />
        </button>
        <span className="fw-bold">{module.name}</span>
      </div>

      <div className="d-flex align-items-center">
        <div className="d-flex gap-2 me-2">
          <button
            className="btn btn-info"
            onClick={() => dispatch(setModule(module))}
          >
            Edit
          </button>

          <button
            className="btn btn-danger"
            onClick={() => dispatch(deleteModule(module._id))}
          >
            Delete
          </button>
        </div>

        <AiFillCheckCircle className="wd-icon-success" size={iconsSize} />

        <button type="button" className="btn">
          <AiOutlinePlus className="mb-1" size={iconsSize} />
        </button>

        <button type="button" className="btn">
          <FaEllipsisVertical className="mb-1" size={iconsSize} />
        </button>
      </div>
    </div>
  );
}

export default ModuleTitle;
