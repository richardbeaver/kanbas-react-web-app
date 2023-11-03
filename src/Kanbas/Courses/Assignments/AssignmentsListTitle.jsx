import { FaGripVertical } from "react-icons/fa";
import { AiFillCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";
import React from "react";
import { useNavigate } from "react-router-dom";

function AssignmentsListTitle({ courseId, iconsSize }) {
  const navigate = useNavigate();

  const newAssignmentEditor = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
  };

  return (
    <div className="wd-assignment-row bg-secondary d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <button className="btn">
          <FaGripVertical className="mb-1" />
        </button>
        <span className="fw-bold">Assignments</span>
      </div>

      <div className="d-flex align-items-center">
        <AiFillCheckCircle className="wd-icon-success" size={iconsSize} />

        <button
          type="button"
          className="btn ms-2"
          onClick={newAssignmentEditor}
        >
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
