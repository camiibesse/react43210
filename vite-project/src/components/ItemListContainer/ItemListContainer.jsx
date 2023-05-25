import { useEffect, useState } from "react";
import listaJuegos from "../../data/juegos";
import ItemList from "./ItemList";
import "./itemcontainer.css";

function getData(){
    return new Promise((resolve) => {
        setTimeout(()=>{resolve(listaJuegos)
        },500);        
    })
}

function ItemListContainer () {
    let [products, setProducts] = useState([]);
    useEffect(()=>{
        getData().then((respuesta) => {
            setProducts(respuesta);
        });
        },[]);

        return (<ItemList products={products} />)
    }
    

export default ItemListContainer;