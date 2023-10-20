import { FaGripVertical } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";

function ModuleInfoLine({ content, iconsSize }) {
  return (
    <div className="row align-items-center">
      <div className="col d-flex align-items-center">
        <button className="btn">
          <FaGripVertical />
        </button>
        <span className="fw-bold">LEARNING OBJECTIVES</span>
      </div>

      <div className="col-4">
        <div className="btn-toolbar justify-content-end align-items-center">
          <AiFillCheckCircle className="wd-icon-success" size={iconsSize} />
          <button type="button" className="btn">
            <FaEllipsisVertical size={iconsSize} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ModuleInfoLine;
