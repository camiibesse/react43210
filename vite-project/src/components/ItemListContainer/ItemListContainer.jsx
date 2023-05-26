import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from '../../data/juegos';
import ItemList from "./ItemList";
import "./itemcontainer.css";
import { useParams } from "react-router-dom";

function ItemListContainer () {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(()=>{
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        asyncFunc(categoryId)
        .then((response) => {
          setProducts(response)
        })
        .catch((error) => {
            console.log(error)
          })
      }, [categoryId])
    

        return (<ItemList products={products} />)
    }
    

export default ItemListContainer;