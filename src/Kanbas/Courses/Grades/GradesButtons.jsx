import { AiOutlineCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { BiSolidCog } from "react-icons/bi";

const iconsSize = "20";

function GradesButtons() {
  return (
    <div className="d-flex justify-content-end gap-1 flex-wrap text-nowrap">

      <button type="button" className="btn btn-secondary">
        Import
      </button>

      <div title="publishing-dropdown-button" className="btn-group">
        <button type="button"
                className="btn btn-secondary d-flex align-items-center">
          Export
        </button>
        <button type="button"
                className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown" aria-expanded="false">
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu">
        </ul>
      </div>

      <button type="button" className="btn btn-secondary">
        <BiSolidCog />
      </button>
    </div>
  );
}

export default GradesButtons;
