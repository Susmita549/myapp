import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartBtn = () => {

  const state = useSelector((state)=>state.addItem)
  return (
    <>
    
      <Link to="/cart" className="btn btn-primary mx-2">
       <span className="fa fa-shopping-cart me-1 "></span> Cart ({} )
        </Link>
    
    </>
  )
}

export default CartBtn