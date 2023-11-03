import React from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import db from "../../../Database";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  selectAssignment,
} from "../assignmentsReducer";

const iconsSize = "20";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );

  // Either create and edit a new assignment or find the assignment we're
  // trying to edit from our store
  let assignment;
  if (assignmentId === "new") {
    assignment = {
      _id: new Date().getTime().toString(),
      title: "New Assignment",
      course: courseId,
    };
  } else {
    assignment = assignments.find(
      (assignment) => assignment._id === assignmentId
    );
  }

  const handleSave = () => {
    dispatch(addAssignment(assignment));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="assignments-edit-page pb-3">
      <div className="row align-items-center" style={{ height: "50px" }}>
        <div className="btn-toolbar text-primary justify-content-end align-items-center h-25">
          <AiFillCheckCircle className="wd-icon-success" size={iconsSize} />
          <span className="fw-bold ms-2">Published</span>
          <button type="button" className="btn btn-secondary ms-2">
            <FaEllipsisVertical className="pb-1" size={iconsSize} />
          </button>
        </div>
      </div>

      <hr />

      <form className="d-grid gap-3">
        <div className="form-group">
          <label htmlFor="input-assignment-name">
            <h2>{assignment.title}</h2>
          </label>
          <input
            type="text"
            id="input-assignment-name"
            className="form-control"
            value={assignment.title}
            onChange={(e) =>
              dispatch(
                selectAssignment({
                  ...assignment,
                  title: e.target.value,
                })
              )
            }
          />
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            id="textarea-bio"
            rows="5"
            placeholder="Description..."
          />
        </div>

        <div className="form-group row">
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="input-points">Points</label>
          </div>
          <div className="col-sm-6">
            <input
              type="number"
              id="input-points"
              className="form-control"
              value="100"
              max="100"
              step="5"
            />
          </div>
          <div className="col-sm-3"></div>
        </div>

        <div className="form-group row">
          <div className="col-sm-3 text-sm-end text-nowrap">
            <label htmlFor="select-assignment-group">Assignment Group</label>
          </div>
          <div className="col-sm-6">
            <select
              id="select-assignment-group"
              className="form-select"
              aria-label="Select assignment group"
            >
              <option selected>ASSIGNMENTS</option>
            </select>
          </div>
          <div className="col-sm-3"></div>
        </div>

        <div className="form-group row">
          <div className="col-sm-3 text-sm-end text-nowrap">
            <label htmlFor="select-grade-display">Display Grade As</label>
          </div>
          <div className="col-sm-6">
            <select
              id="select-grade-display"
              className="form-select"
              aria-label="Select grade display"
            >
              <option selected>Percentage</option>
            </select>
          </div>
          <div className="col-sm-3"></div>
        </div>

        <div className="form-group row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="check-not-count-final"
              />
              <label
                className="form-check-label"
                htmlFor="check-not-count-final"
              >
                Do not count this assignment towards the final grade
              </label>
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>

        <div className="form-group row">
          <div className="col-sm-3 text-sm-end text-nowrap">
            <label>Submission Type</label>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body d-grid gap-3">
                <select
                  className="form-select"
                  aria-label="Select submission type"
                >
                  <option selected>Online</option>
                </select>

                <h5 className="card-title">Online Entry Options</h5>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="online-entry-text"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="online-entry-text"
                  >
                    Text Entry
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="online-entry-website-url"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="online-entry-website-url"
                  >
                    Website URL
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="online-entry-media-recordings"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="online-entry-media-recordings"
                  >
                    Media Recordings
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="online-entry-student-annotation"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="online-entry-student-annotation"
                  >
                    Student Annotation
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="online-entry-file-uploads"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="online-entry-file-uploads"
                  >
                    File Uploads
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>

        <div className="form-group row">
          <div className="col-sm-3 text-sm-end text-nowrap">
            <label htmlFor="">Assign</label>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <div className="card-body d-grid gap-3">
                <div className="form-group">
                  <label htmlFor="input-assign-to">
                    <h5>Assign to</h5>
                  </label>
                  <input
                    type="text"
                    data-role="tagsinput"
                    id="input-assign-to"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="input-due-date">
                    <h5>Due</h5>
                  </label>
                  <input
                    type="datetime-local"
                    id="input-due-date"
                    className="form-control"
                    value="2023-09-18T23:59"
                  />
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="input-available-from">
                        <h5>Available from</h5>
                      </label>
                      <input
                        type="datetime-local"
                        id="input-available-from"
                        className="form-control"
                        value="2023-09-06T00:00"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="input-available-until">
                        <h5>Until</h5>
                      </label>
                      <input
                        type="datetime-local"
                        id="input-available-until"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="btn btn-light card-footer text-center text-muted">
                <i className="fa-solid fa-plus"></i>
                Add
              </div>
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>

        <hr />

        <div className="row">
          <div className="col">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Notify users that this content has changed
              </label>
            </div>
          </div>
          <div className="col">
            <div className="btn-toolbar justify-content-end">
              <button
                type="button"
                onClick={handleCancel}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSave}
                className="btn btn-primary ms-1 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AssignmentEditor;
