import { Navigate, Route, Routes } from "react-router-dom";
import AccountNavigation from "./AccountNavigation";
import Profile from "./Profile";
import AccountNavBar from "./AccountNavBar";

function Account() {
  return (
    <>
      <AccountNavBar />
      <hr />

      <div className="d-flex">
        <div className="d-none d-md-block">
          <AccountNavigation />
        </div>

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
