import { useState } from "react";
import { Organization } from "../assets";
import "../styles/UserCard.scss"

function UserCard({mode}: any) {
    let Data;

    switch (mode) {
        case 'USERS':
             Data = {
                icon: <img src={Organization} alt="icon" className="first"/>,
                title: "USERS",
                amount: "2,453"
            }
            break;
        case 'ACTIVE':
             Data = {
                icon: <img src={Organization} alt="icon" className="second" />,
                title: "ACTIVE USERS",
                amount: "1,500"
            }
            break;
        case 'LOANS':
             Data = {
                icon: <img src={Organization} alt="icon" className='third' />,
                title: "USERS WITH LOANS",
                amount: "12,243"
            }
            break;
        case 'SAVINGS':
             Data = {
                icon: <img src={Organization} alt="icon" className='fourth' />,
                title: "USERS WITH SAVINGS",
                amount: "102,453"
            }
            break;
    
        default:
            Data = {
                icon: <img src={Organization} alt="icon" />,
                title: "",
                amount: "1,500"
            }
            break;
    }
  return (
    <div className="card">
        <main>
            {Data.icon}
           <p> {Data.title}</p>
            <h2>{Data.amount}</h2>
        </main>
    </div>
  )
}

export default UserCard