import React from "react"
import data from './data.json'
import GroceryItem from './GroceryItem';


const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1 style={{textAlign:"center"}}>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */}
            {data.map((item)=>{
                return(
                
                        <GroceryItem key={item.id} {...item}/>
                   
                )
            })}
        </div>
        </>
    )
}
export default GroceryDetails