<div className="d-flex gap-2 p-1">
  <button
    className="btn btn-info"
    onClick={(event) => {
      event.preventDefault();
      dispatch(selectAssignment(assignment));
    }}
  >
    Edit
  </button>

  <button
    className="btn btn-danger"
    onClick={(event) => {
      event.preventDefault();
      dispatch(deleteAssignment(assignment._id));
    }}
  >
    Delete
  </button>
</div>;
