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
          <li><span><img src={Organization} alt="icon" /></span>Users</li>
          <li><span><img src={Organization} alt="icon" /></span>Guarantors</li>
          <li><span><img src={Organization} alt="icon" /></span>Loan </li>
          <li><span><img src={Organization} alt="icon" /></span>Decision Models</li>
          <li><span><img src={Organization} alt="icon" /></span>Loan Requests</li>
          <li><span><img src={Organization} alt="icon" /></span>Whitelist</li>
          <li><span><img src={Organization} alt="icon" /></span>Karma</li>
        </ul>
        <h4>Businesses</h4>
        <ul>
          <li><span><img src={Organization} alt="icon" /></span>Organization</li>
          <li><span><img src={Organization} alt="icon" /></span>Loan Products</li>
          <li><span><img src={Organization} alt="icon" /></span>Savings Products</li>
          <li><span><img src={Organization} alt="icon" /></span>Fees and Charges</li>
          <li><span><img src={Organization} alt="icon" /></span>Transactions</li>
          <li><span><img src={Organization} alt="icon" /></span>Services</li>
          <li><span><img src={Organization} alt="icon" /></span>Services Account</li>
          <li><span><img src={Organization} alt="icon" /></span>Settlements</li>
          <li><span><img src={Organization} alt="icon" /></span>Reports</li>
        </ul>
        <h4>Settings</h4>
        <ul>
        <li><span><img src={Organization} alt="icon" /></span>Preferences</li>
        <li><span><img src={Organization} alt="icon" /></span>Fees and Pricing</li>
        <li><span><img src={Organization} alt="icon" /></span>Audit Logs</li>
        </ul>
      </main>
    </div>
  );
}

export default Sidebar;
