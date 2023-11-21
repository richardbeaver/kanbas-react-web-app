import {
  FaArrowRightToBracket,
  FaBarsStaggered,
  FaCircleDot,
  FaRegCircleXmark,
} from "react-icons/fa6";
import {
  AiFillCalendar,
  AiFillCheckCircle,
  AiTwotoneCalendar,
} from "react-icons/ai";
import { FaBullhorn, FaFileImport } from "react-icons/fa";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as client from "../../Courses/client";

const iconsSize = "20";

const optionButtons = {
  "Import Existing Content": FaFileImport,
  "Import From Commons": FaArrowRightToBracket,
  "Choose Home Page": FaCircleDot,
  "View Course Stream": FaBarsStaggered,
  "New Announcement": FaBullhorn,
  "New Analytics": BiSolidBarChartAlt2,
  "View Course Notifications": BsBell,
};

function CourseStatus() {
  const { courseId } = useParams();

  const [course, setCourse] = useState(null);
  const [upcomingEvents, setUpcomingEvents] = useState(null);

  const fetchCourseById = async () => {
    const course = await client.fetchCourse(courseId);
    setCourse(course);
  };

  const fetchNextThreeEvents = async () => {
    const events = await client.fetchEventsForCourse(courseId);
    setUpcomingEvents(events.slice(0, 3));
  };

  useEffect(() => {
    fetchCourseById();
    fetchNextThreeEvents();
  }, [courseId]);

  return (
    <div className="wd-course-additional-info d-flex flex-column gap-3">
      <h2>Course Status</h2>

      <div className="btn-group">
        <button type="button" className="btn btn-secondary">
          <FaRegCircleXmark size={iconsSize} />
          <small>Unpublish</small>
        </button>
        <button type="button" className="btn btn-success wd-washed-out">
          <AiFillCheckCircle size={iconsSize} />
          <small>Published</small>
        </button>
      </div>

      <div className="btn-toolbar flex-column gap-1">
        {Object.entries(optionButtons).map(([text, Icon], index) => (
          <button key={index} type="button" className="btn btn-secondary">
            <Icon size={iconsSize} />
            <small className="ps-2">{text}</small>
          </button>
        ))}
      </div>

      <div>
        <div className="row pt-2 d-flex align-items-center">
          <h2 className="col">Coming Up</h2>
          <div className="col d-flex justify-content-end">
            <Link to="#" className="link-underline link-underline-opacity-0">
              <AiTwotoneCalendar />
              View Calendar
            </Link>
          </div>
        </div>

        <ul className="list-group">
          {course &&
            upcomingEvents &&
            upcomingEvents.map((event) => (
              <li
                className="list-group-item d-flex flex-column"
                key={event._id}
              >
                <AiFillCalendar size={iconsSize} />
                <Link
                  to="#"
                  className="fw-bold link-underline link-underline-opacity-0"
                >
                  {event.title}
                </Link>
                <div>
                  <small className="lh-sm">{course.number}</small>
                  {" - "}
                  <small className="lh-sm">{event.time}</small>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default CourseStatus;
