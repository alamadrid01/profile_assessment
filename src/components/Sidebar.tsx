import React from "react";
import "../styles/Sidebar.scss";
import { Organization, Dashboard } from "../assets/index";

function Sidebar() {
  return (
    <div className="sidebar">
      <main>
        <h3>
          <span>
            {" "}
            <img src={Organization} alt="organization_icon" />{" "}
          </span>{" "}
          Switch Organization
        </h3>
        <p><span><img src={Dashboard} alt="dashboard_icon" /></span>Dashboard</p>
        <h4>Customers</h4>
        <ul>
          <li>Users</li>
          <li>Guarantors</li>
          <li>Loan </li>
          <li>Decision Models</li>
          <li>Loan Requests</li>
          <li>Whitelist</li>
          <li>Karma</li>
        </ul>
        <h4>Businesses</h4>
        <ul>
          <li>Organization</li>
          <li>Loan Products</li>
          <li>Savings Products</li>
          <li>Fees and Charges</li>
        </ul>
      </main>
    </div>
  );
}

export default Sidebar;
