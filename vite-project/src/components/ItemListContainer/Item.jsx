import { Link } from "react-router-dom";
import "./item.css";

function Item({title,category,img,price,id,stock}) {
  return (
    
    <div className="group relative">
        <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img 
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          src={img}
          alt={title}
          />
        </div>
        <div className="item-info">
        <h3>{title}</h3>
        <small>{category}</small>
        <div className="precio">
          <p className="text-sm font-medium text-gray-900"> $ {price}</p>
          <p>Stock disponible: {stock}</p>
        </div>
        <Link to={`/product/${id}`}>
          <button className="option">Ver detalle</button>
        </Link >
        </div>   
    </div>
    
  )
}

export default Item;
