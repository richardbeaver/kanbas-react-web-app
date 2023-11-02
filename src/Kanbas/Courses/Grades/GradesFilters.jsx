import { FaFilter } from "react-icons/fa";

function GradesFilters() {
  return (
    <form>
      <div className="row">
        <div className="col">
          <label htmlFor="filter-student-names" className="form-label">
            <h2>Student Names</h2>
          </label>
          <input
            type="text"
            className="form-control"
            id="filter-student-names"
            aria-describedby="filter-student-names"
            placeholder="Search Students"
            style={{ fontFamily: "Arial, FontAwesome" }}
          />
        </div>
        <div className="col">
          <label htmlFor="filter-assignment-names" className="form-label">
            <h2>Assignment Names</h2>
          </label>
          <input
            type="text"
            className="form-control"
            id="filter-assignment-names"
            aria-describedby="filter-assignment-names"
            placeholder="Search Assignments"
            style={{ fontFamily: "Arial, FontAwesome" }}
          />
        </div>
      </div>
      <button className="btn btn-secondary mt-2">
        <FaFilter className="pe-2" size="20" />
        Apply Filters
      </button>
    </form>
  );
}

export default GradesFilters;
