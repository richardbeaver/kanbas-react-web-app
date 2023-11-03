import React from "react";
import { useParams } from "react-router-dom";
import AssignmentsInputs from "./AssignmentsInputs";
import AssignmentsListTitle from "./AssignmentsListTitle";
import AssignmentsList from "./AssignmentsList";
import { useSelector, useDispatch } from "react-redux";

const iconsSize = "20";

function Assignments() {
  const { courseId } = useParams();
  const dispatch = useDispatch();

  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  ).filter((assignment) => assignment.course === courseId);

  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );

  return (
    <div className="d-flex flex-column">
      <AssignmentsInputs />
      <hr />

      <div className="d-flex flex-column">
        <details open>
          <summary>
            <AssignmentsListTitle courseId={courseId} iconsSize={iconsSize} />
          </summary>
          <AssignmentsList
            courseId={courseId}
            courseAssignments={assignments}
            iconsSize={iconsSize}
          />
        </details>
      </div>
    </div>
  );
}

export default Assignments;
