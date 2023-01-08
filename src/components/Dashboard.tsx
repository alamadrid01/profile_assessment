import React from "react";
import "../styles/Dashboard.scss";
import Table from "../components/Table";
import Test from "../components/Test";
import UserCard from "../components/UserCard";

function Dashboard() {
  return (
    <div className="dashboard">
      <main>
        <h2>Users</h2>
        <div className="widget">
        <UserCard mode="USERS" />
        <UserCard mode="ACTIVE" />
        <UserCard mode="LOANS" />
        <UserCard mode="SAVINGS" />
        </div>
        <Table />
        {/* <Test /> */}
      </main>
    </div>
  );
}

export default Dashboard;
