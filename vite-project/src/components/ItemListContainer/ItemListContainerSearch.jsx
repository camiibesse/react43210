import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./itemcontainer.css";


function withSearch (OrigComponent){
    
    function WrappedComponent(){
        const [searchWord, setSearchWord] = useState("")
        
        function handleChange(e){
            const valor =  e.target.value;
            setSearchWord(valor)
        }
    
        function filterList(products){
            if (searchWord === "") {
                return products;
            }
            else{
                return products.filter(products => {
                    let textTitle = products.title.toLowerCase();
                    let word = searchWord.toLowerCase();
                    return textTitle.includes(word);                    
                })
            } 
        }
        return (
            <>
            <form className="flex justify-center">
                <label htmlFor="search-input" className="" >
                    <input onChange={handleChange} className="border-solid border-b-4 border-indigo-500 p-2 ml-8" placeholder="Buscar producto..." />
                </label>
            </form>
            <OrigComponent filterList={filterList} />
            </>
        )
    }
    return WrappedComponent;
}

function ItemListContainerSearch ({filterList}) {
    let [products, setProducts] = useState([]);
    useEffect(()=>{
        getData().then((respuesta) => {
            setProducts(respuesta);
        });
        },[]);

        return (<ItemList products={filterList(products)} />)
    }
    
const WrappedListContainerSearch = withSearch(ItemListContainerSearch)
export default WrappedListContainerSearch;