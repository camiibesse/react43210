import cart from "./assets/cart.png";
import "./cartwidget.css";
function CartWidget (){
    return (
        <div className="cart-widget">
            <img className="img-cart" src={cart}/>
            <span className="cart-span">0</span>
        </div>
    )
}

export default CartWidget;