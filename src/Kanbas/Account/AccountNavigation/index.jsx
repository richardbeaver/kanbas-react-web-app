import { Link, useLocation } from "react-router-dom";

function AccountNavigation() {
  const links = ["Profile"];

  const { pathname } = useLocation();

  return (
    <div className="wd-account-navigation-sidebar list-group">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Account/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default AccountNavigation;
