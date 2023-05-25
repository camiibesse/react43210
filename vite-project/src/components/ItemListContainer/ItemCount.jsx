import { useState } from "react";
import "./itemcount.css";


function ItemCount() {
  const [count, setCount] = useState(1);
  function handleAdd(){
    setCount(count + 1);
  }
  function handleSub (){
    count > 1 && setCount(count - 1)
  }
  return (
    <div className="count-container">
        <div className="count-btns">
            <button onClick={handleSub} style={{backgroundColor: 'red'}} className="count-btn-minus">-</button>
            <p>{count}</p>
            <button onClick={handleAdd} style={{backgroundColor: 'green'}} className="count-btn-add">+</button>            
        </div>
        <div>
            <button className="option">Ver detalle</button>
        </div>   
    </div>
  )
}

export default ItemCount;
