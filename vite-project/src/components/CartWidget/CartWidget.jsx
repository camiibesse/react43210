import cart from "./assets/cart.png"
import cartwidget from "./cartwidget.css"
function CartWidget (){
    return (
        <div className="cart-widget">
            <img src={cart}/>
            <span className="cart-span">0</span>
        </div>
    )
}

export default CartWidget;