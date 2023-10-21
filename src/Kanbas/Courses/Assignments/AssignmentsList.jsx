import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";
import React from "react";

function AssignmentsList({ courseId, courseAssignments, iconsSize }) {
  return (
    <div className="wd-assignment-list">
      {courseAssignments.map((assignment) => (
        <Link
          key={assignment._id}
          to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
          className="list-group-item"
        >
          <div
            className="wd-assignment-row d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center">
              <div className="ps-3">
                {assignment.title}
              </div>
            </div>

            <div className="d-flex align-items-center">
              <AiFillCheckCircle className="wd-icon-success"
                                 size={iconsSize} />
              <button type="button" className="btn">
                <FaEllipsisVertical className="mb-1" size={iconsSize} />
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AssignmentsList;
