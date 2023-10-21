import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import AssignmentsInputs from "./AssignmentsInputs";
import { FaGripVertical } from "react-icons/fa";
import { AiFillCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";

const iconsSize = "20";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div>
      <AssignmentsInputs />
      <hr />

      <div className="d-flex flex-column">
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
      </div>
    </div>
  );
}

export default Assignments;
