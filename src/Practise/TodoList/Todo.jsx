import React, { useState } from 'react'

export const Todo = () => {

    const[inputList,setInputList]=useState ("")
    const[Items,setItems]=useState ([])
    const itemEvent = (e)=> {
        setInputList(e.target.value)
    }

    const listOfItems = () => {
        setItems((OldItems)=>{
            return [...OldItems,inputList]
        })
        setInputList("")
    }

    const handleDelete=(id)=>{
        setItems((OldItems)=>{
            return OldItems.filter((elem,index)=>{
                  return index!==id;
            })
        })
            
    }
  return (
    <>
     <div>
         <h1>TodoList</h1>
         <input type="text" placeholder="enter todo"
          value={inputList} onChange={itemEvent} />
          <button onClick={listOfItems}>+</button>
     </div>
     <div>
         <ol>
            {Items.map((elem,index)=>{
                return <li key={index} id={index}>{elem}<button onClick={handleDelete}>-</button></li>
            })}
         </ol>
     </div>
    </>
  )
}
