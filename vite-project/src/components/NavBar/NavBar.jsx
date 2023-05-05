import logo from "../NavBar/assets/logo.png";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
function NavBar (){
    return (
        <nav>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <ul>
                <button>Playstation 4</button>
                <button>Playstation 5</button>
                <button>Accesorios</button>
            </ul>
            <div>
            <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;