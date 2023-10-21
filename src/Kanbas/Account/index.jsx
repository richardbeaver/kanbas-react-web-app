import { Link, Navigate, Route, Routes } from "react-router-dom";
import AccountNavigation from "./AccountNavigation";
import Profile from "./Profile";
import { FaBars } from "react-icons/fa6";
import { BiGlassesAlt } from "react-icons/bi";
import AccountNavBar from "./AccountNavBar";

const iconsSize = "30";

function Account() {
  return (
    <>
      <AccountNavBar />
      <hr />

      <div className="d-flex">
        <AccountNavigation />

        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Navigate to="Profile" />} />
            <Route path="Profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Account;
