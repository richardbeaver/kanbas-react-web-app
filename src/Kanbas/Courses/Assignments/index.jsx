import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import AssignmentsInputs from "./AssignmentsInputs";
import { FaGripVertical } from "react-icons/fa";
import { AiFillCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";
import AssignmentsListTitle from "./AssignmentsListTitle";
import AssignmentsList from "./AssignmentsList";

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
        <details open>
          <summary>
            <AssignmentsListTitle iconsSize={iconsSize} />
          </summary>
          <AssignmentsList courseId={courseId}
                           courseAssignments={courseAssignments}
                           iconsSize={iconsSize} />
        </details>
      </div>
    </div>
  );
}

export default Assignments;
