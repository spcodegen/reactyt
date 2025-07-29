import React from "react";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Link to="profile">Profile</Link>
      <Link to="setting">Setting</Link>
      <div>this is a Dashboard</div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
