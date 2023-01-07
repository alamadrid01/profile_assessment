import React from "react";
import Table from "../components/Table";
import Test from "../components/Test";
import UserCard from "../components/UserCard";

function Profile() {
  return (
    <div className="profile">
      <main>
        <UserCard mode="USERS" />
        <UserCard mode="ACTIVE" />
        <UserCard mode="LOANS" />
        <UserCard mode="SAVINGS" />
        {/* <Table />
        <Test /> */}
      </main>
    </div>
  );
}

export default Profile;
