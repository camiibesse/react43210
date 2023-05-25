import ItemCount from "../ItemListContainer/ItemCount"

function ItemDetail({id,title,img,category,stock, price}) {
  return (
    <div>
        <article>
            <header>
                <h2>{title}</h2>
            </header>
            <picture>
                <img src={img} alt={title} />
            </picture>
            <section>
                <p>{category}</p>
                <p>{price}</p>
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity)=> console.log('cantidad agregada' + id)}  />
            </footer>
        </article>
        
    </div>
  )
}

export default ItemDetail;
