import { BiSolidBook } from "react-icons/bi";
import { FaEllipsisVertical } from "react-icons/fa6";
import { Link } from "react-router-dom";

const backgroundOptions = ["primary", "secondary", "success", "info"];

function chooseCardBackground() {
  let idx = Math.floor(Math.random() * backgroundOptions.length);
  return backgroundOptions[idx];
}

function Card({ course }) {
  const backgroundColor = chooseCardBackground();

  return (
    <div className="position-relative p-2">
      <Link
        to={`/Kanbas/Courses/${course._id}`}
        className="text-decoration-none"
      >
        <div className="card">
          <div className={`card-header bg-${backgroundColor}`}></div>
          <div className="card-body pt-2 pb-2">
            <h5 className={`card-title text-${backgroundColor}`}>
              {course.name}
            </h5>
            <p className="card-text mb-0">{course.number}</p>
            <p className="card-text mb-2">
              {`${course.startDate} - ${course.endDate}`}
            </p>
            <BiSolidBook />
          </div>
        </div>
      </Link>

      {/* Added "5%" to Bootstrap $position-values Sass map to use here */}
      <div className="btn-toolbar justify-content-end position-absolute top-5 end-5">
        <button className="btn">
          <FaEllipsisVertical style={{ color: "white" }} />
        </button>
      </div>
    </div>
  );
}

export default Card;
