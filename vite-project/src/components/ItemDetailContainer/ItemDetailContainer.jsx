import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import listaJuegos from "../../data/juegos";
import ItemCount from "../ItemListContainer/ItemCount";


function getItemData(idURL){
  return new Promise((resolve) => {
      setTimeout(()=>{
        const requestedItem = listaJuegos.find((item) => item.id === Number(idURL))
        resolve(requestedItem)
      },500);        
  })
}

function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const id = useParams().id;

  useEffect(() => {
      getItemData(id).then((respuesta) => {
        setProduct(respuesta)
      });
    },[id]); 

  return (
    <div>
      <div>
      <div>
        <img src={product.img} alt={product.title} />
      </div>
      <div>
        <h1>{product.title}</h1>
        <h2>$ {product.price}</h2>
        <small>{product.detail}</small>
        <ItemCount stock={stock} />
      </div>
    </div>
    </div>
  )
}

export default ItemDetailContainer
