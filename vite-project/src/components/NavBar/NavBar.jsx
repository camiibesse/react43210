import logo from "../NavBar/assets/logo.png";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

function NavBar (){
    return (
        <>
        <nav className="nav-container">
            <div>
            <Link to="/">
                <img src={logo} alt="Logo"/>
            </Link>
            </div>
            <div>
                <NavLink to="/category/PS4">PlayStation 4 </NavLink>
                <NavLink to="/category/PS5">PlayStation 5 </NavLink>
                <NavLink to="/category/accesorios">Accesorios </NavLink>
            </div>
            <div>
            <CartWidget />
            </div>
        </nav>        
        </>        
    )
}

export default NavBar;