import { Link, useLocation } from "react-router-dom";
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsCalendar2Week } from "react-icons/bs";
import "./index.css";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar"];
  const iconsSize = "30";

  const iconsClasses = "fs-1 wd-icon-primary";
  const linksToIconsMap = {
    Account: (
      <MdOutlineAccountCircle className={iconsClasses} size={iconsSize} />
    ),
    Dashboard: <RiDashboard3Line className={iconsClasses} size={iconsSize} />,
    Courses: <FaBook className={iconsClasses} size={iconsSize} />,
    Calendar: <BsCalendar2Week className={iconsClasses} size={iconsSize} />,
  };

  const { pathname } = useLocation();

  return (
    <div className="wd-kanbas-navigation-sidebar d-none d-sm-flex flex-column bg-black">
      <img src="/images/kanbas-navbar-nu-logo.jpg" alt="" />

      <div className="nav nav-pills flex-column text-center">
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`nav-link ${pathname.includes(link) && "active"}`}
          >
            {linksToIconsMap[link]}
            <br />
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default KanbasNavigation;
