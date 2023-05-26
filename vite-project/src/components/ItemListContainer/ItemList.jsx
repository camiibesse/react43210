import Item from "./Item"

function ItemList({products}) {
    return (
      <div className="mt-6 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((itemInArray) => (
             <Item key={itemInArray.id}
             {...itemInArray}
             />
          ))}
      </div>
    )
  }
  
  export default ItemList;