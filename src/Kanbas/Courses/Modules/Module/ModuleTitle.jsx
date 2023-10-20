import { FaGripVertical } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";

function ModuleTitle({ title, iconsSize }) {
  return (
    <div className="row bg-secondary align-items-center">
      <div className="col d-flex align-items-center">
        <button className="btn">
          <FaGripVertical />
        </button>
        <span className="fw-bold">{title}</span>
      </div>
      <div className="col-4">
        <div className="btn-toolbar justify-content-end align-items-center">
          <AiFillCheckCircle className="wd-icon-success" size={iconsSize} />
          <button type="button" className="btn ms-2">
            <AiOutlinePlus size={iconsSize} />
          </button>
          <button type="button" className="btn">
            <FaEllipsisVertical size={iconsSize} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModuleTitle;
