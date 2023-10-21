import { FaGripVertical } from "react-icons/fa";
import { AiFillCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";
import React from "react";

function AssignmentsListTitle({ iconsSize }) {
  return (
    <div
      className="wd-assignment-row bg-secondary d-flex justify-content-between align-items-center">

      <div className="d-flex align-items-center">
        <button className="btn">
          <FaGripVertical className="mb-1" />
        </button>
        <span className="fw-bold">Assignments</span>
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

export default AssignmentsListTitle;
