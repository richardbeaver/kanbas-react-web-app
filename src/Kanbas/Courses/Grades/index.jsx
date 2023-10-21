import db from "../../Database";
import { useParams } from "react-router-dom";
import GradesFilters from "./GradesFilters";
import GradesButtons from "./GradesButtons";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <>
      <div className="d-flex flex-column gap-3">
        <GradesButtons />
        <GradesFilters />
      </div>
      <hr />

      <div className="table-responsive">
        <table
          className="table table-striped table-bordered table-sm table-hover text-center">
          <thead>
          <tr>
            <th className="text-start">Student Name</th>
            {assignments.map((assignment, idx) => (
              <th key={idx}>{assignment.title}</th>)
            )}
          </tr>
          </thead>
          <tbody>
          {enrollments.map((enrollment, enrollmentIdx) => {
            const user = db.users.find((user) => user._id === enrollment.user);
            return (
              <tr key={enrollmentIdx}>
                <td className="text-primary text-start">
                  {user.firstName} {user.lastName}
                </td>
                {assignments.map((assignment, index) => {
                  const grade = db.grades.find(
                    (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                  return (
                    <td key={enrollmentIdx + 1 * index}>
                      {grade?.grade || ""}
                    </td>);
                })}
              </tr>);
          })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Grades;
