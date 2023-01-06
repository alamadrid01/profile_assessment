import { Union, Logo } from "../assets"
import "../styles/Navbar.scss"

function Navbar() {
  return (
    <nav>
            <img src={Union} alt="Union" />
            <img src={Logo} alt="Logo" />
    </nav>
  )
}

export default Navbar
