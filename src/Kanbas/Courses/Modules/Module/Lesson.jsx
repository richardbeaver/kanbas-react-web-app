import { FaGripVertical } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";

function Lesson({ lesson, iconsSize }) {
  return (
    <div className="wd-module-row d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <button className="btn">
          <FaGripVertical className="mb-1" />
        </button>
        <div>
          <span className="fw-bold">{lesson.name} - </span>
          &nbsp;
          <span>{lesson.description}</span>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <AiFillCheckCircle className="wd-icon-success" size={iconsSize} />
        <button type="button" className="btn">
          <FaEllipsisVertical className="mb-1" size={iconsSize} />
        </button>
      </div>
    </div>
  );
}

export default Lesson;
