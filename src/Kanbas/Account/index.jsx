import { Navigate, Route, Routes } from "react-router-dom";
import AccountNavigation from "./AccountNavigation";
import Profile from "./Profile";

function Account() {
  return (
    <>
      <h1>Richard Beaver Profile</h1>
      <AccountNavigation />

      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Profile" />} />
            <Route path="Profile/*" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Account;
