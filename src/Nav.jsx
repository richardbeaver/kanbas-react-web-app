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
      <Link to="/hello" className={`nav-link ${activeClass("hello")}`}>
        Hello
      </Link>
      <Link to="/Kanbas" className={`nav-link ${activeClass("Kanbas")}`}>
        Kanbas
      </Link>
    </nav>
  );
}

export default Nav;
