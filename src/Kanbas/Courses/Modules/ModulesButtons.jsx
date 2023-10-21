import { AiOutlineCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { HiMiniEllipsisVertical } from "react-icons/hi2";

const iconsSize = "20";

function ModulesButtons() {
  return (
    <div className="d-flex justify-content-end gap-1 flex-wrap text-nowrap">

      <button type="button" className="btn btn-secondary">
        Collapse All
      </button>

      <button type="button" className="btn btn-secondary">
        View Progress
      </button>

      <div title="publishing-dropdown-button" className="btn-group">
        <button type="button"
                className="btn btn-secondary d-flex align-items-center">
          <AiOutlineCheckCircle className="wd-icon-success me-1"
                                size={iconsSize} />
          Publish All
        </button>
        <button type="button"
                className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown" aria-expanded="false">
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Publish Selected</a></li>
          <li><a className="dropdown-item" href="#">Unpublish All</a></li>
          <li><a className="dropdown-item" href="#">Unpublish Selected</a></li>
        </ul>
      </div>

      <button type="button"
              className="btn btn-primary d-flex align-items-center">
        <AiOutlinePlus className="me-1" size={iconsSize} />
        Module
      </button>

      <button type="button"
              className="btn btn-secondary d-flex align-items-center">
        <HiMiniEllipsisVertical size={iconsSize} />
      </button>

    </div>
  );
}

export default ModulesButtons;
