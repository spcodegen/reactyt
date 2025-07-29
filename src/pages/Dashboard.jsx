import React from "react";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <ul>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to="setting">Setting</Link>
        </li>
      </ul>
      <div>this is a Dashboard</div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
