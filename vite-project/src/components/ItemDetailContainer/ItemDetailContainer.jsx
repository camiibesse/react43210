import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/juegos";
import ItemCount from "../ItemListContainer/ItemCount";


function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const id = useParams().id;
  const { productId } = useParams()

  useEffect(() => {

    getProductById(productId)
      .then((response) => {
        setProduct(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [productId])


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

export default ItemDetailContainer;
