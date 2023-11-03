import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";
import React from "react";
import { deleteAssignment } from "./assignmentsReducer";
import { useDispatch } from "react-redux";
import "bootstrap/dist/js/bootstrap.js";

function AssignmentsList({ courseId, courseAssignments, iconsSize }) {
  const dispatch = useDispatch();

  return (
    <div className="wd-assignment-list">
      {courseAssignments.map((assignment) => (
        <Link
          key={assignment._id}
          to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
          className="list-group-item"
        >
          <div className="wd-assignment-row d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="ps-3">{assignment.title}</div>
            </div>

            <div className="d-flex align-items-center gap-3">
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
                onClick={(e) => e.preventDefault()}
              >
                Delete
              </button>

              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="deleteModal"
                tabIndex="-1"
                aria-labelledby="deleteModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="deleteModalLabel">
                        Are You Sure
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      Are you sure you want to delete this assignment? This
                      action can't be undone.
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Go Back
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={(event) => {
                          event.preventDefault();
                          dispatch(deleteAssignment(assignment._id));
                        }}
                      >
                        I'm sure
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <AiFillCheckCircle className="wd-icon-success" size={iconsSize} />

              <button type="button" className="btn">
                <FaEllipsisVertical size={iconsSize} />
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AssignmentsList;
