import React from 'react'
import { Link } from 'react-router-dom'

const CartBtn = () => {
  return (
    <>
    
      <Link to="/cart" className="btn btn-primary mx-2">
       <span className="fa fa-shopping-cart me-1 "></span> Cart ( )
        </Link>
    
    </>
  )
}

export default CartBtn