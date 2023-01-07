import { useState } from "react";
import "../styles/UserCard.scss"

function UserCard({mode}: any) {
    let Data;

    switch (mode) {
        case 'USERS':
             Data = {
                title: "USERS",
            }
            break;
        case 'ACTIVE':
             Data = {
                title: "ACTIVE USERS",
            }
            break;
        case 'LOANS':
             Data = {
                title: "USERS WITH LOANS",
            }
            break;
        case 'SAVINGS':
             Data = {
                title: "USERS WITH SAVINGS",
            }
            break;
    
        default:
            Data = {
                title: "",
            }
            break;
    }
  return (
    <div className="card">
        <main>
            {Data.title}
        </main>
    </div>
  )
}

export default UserCard