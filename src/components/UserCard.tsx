import { useState } from "react";
import "../styles/UserCard.scss"

function UserCard({mode}) {
    const [title, setTitle] = useState("")

    switch (mode) {
        case 'USERS':
              setTitle("USERS")
            break;
        case 'ACTIVE':
            setTitle("ACTIVR USERS")
            break;
        case 'LOAN':
            setTitle("USERS WITH LOANS")
            break;
        case 'SAVING':
            setTitle("USERS WITH SAVINGS")
            break;
    
        default:
            break;
    }
  return (
    <div className="card">
        <main>
            HELLO
            {title}
        </main>
    </div>
  )
}

export default UserCard