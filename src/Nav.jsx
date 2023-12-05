import { Link, useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();

  function activeClass(basePath) {
    return pathname.includes(basePath) ? "active" : "";
  }

  return (
    <nav className="nav nav-tabs mt-2">
      <Link to="/Labs/a3" className={`nav-link ${activeClass("a3")}`}>
        A3
      </Link>
      <Link to="/Labs/a4" className={`nav-link ${activeClass("a4")}`}>
        A4
      </Link>
      <Link to="/Labs/a5" className={`nav-link ${activeClass("a5")}`}>
        A5
      </Link>
      <Link to="/hello" className={`nav-link ${activeClass("hello")}`}>
        Hello
      </Link>
      <Link to="/Kanbas" className={`nav-link ${activeClass("Kanbas")}`}>
        Kanbas
      </Link>
      <Link to="/project" className={`nav-link ${activeClass("Project")}`}>
        Project
      </Link>
    </nav>
  );
}

export default Nav;
