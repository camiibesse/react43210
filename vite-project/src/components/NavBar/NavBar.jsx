import logo from "../NavBar/assets/logo.png";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
function NavBar (){
    return (
        <nav>
            <ul>
                <button>Playstation 4</button>
                <button>Playstation 5</button>
                <button>Accesorios</button>
                <img src={logo} alt="Logo" />
            </ul>
            <div>
            <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;