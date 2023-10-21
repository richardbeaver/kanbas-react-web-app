import { AiOutlinePlus } from "react-icons/ai";
import { HiMiniEllipsisVertical } from "react-icons/hi2";

const iconsSize = "20";

function AssignmentsInputs() {
  return (
    <div className="d-flex justify-content-between flex-wrap text-nowrap">

      <input type="text" placeholder="Search for Assignment" />

      <div className="d-flex gap-1">
        <button type="button"
                className="btn btn-secondary d-flex align-items-center">
          <AiOutlinePlus className="me-1" size={iconsSize} />
          Group
        </button>

        <button type="button"
                className="btn btn-primary d-flex align-items-center">
          <AiOutlinePlus className="me-1" size={iconsSize} />
          Assignment
        </button>

        <button type="button"
                className="btn btn-secondary d-flex align-items-center">
          <HiMiniEllipsisVertical size={iconsSize} />
        </button>
      </div>

    </div>
  );
}


export default AssignmentsInputs;
