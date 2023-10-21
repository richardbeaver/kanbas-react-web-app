import { FaGripVertical } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";

function ModuleTitle({ title, iconsSize }) {
  return (
    <div
      className="wd-module-row bg-secondary d-flex justify-content-between align-items-center">

      <div className="d-flex align-items-center">
        <button className="btn">
          <FaGripVertical className="mb-1" />
        </button>
        <span className="fw-bold">{title}</span>
      </div>

      <div className="d-flex align-items-center">
        <AiFillCheckCircle className="wd-icon-success" size={iconsSize} />
        <button type="button" className="btn ms-2">
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
