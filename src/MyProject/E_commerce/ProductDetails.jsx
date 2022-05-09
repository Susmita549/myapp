import React from 'react'
import data from './Data.json'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const prodid = useParams()
    console.log("prodid",prodid)
    console.log("data:",data)
    const prodDetails = data.filter((item)=>item.id === prodid)
    
    
    console.log("prodDetails:",prodDetails)
    const product = prodDetails
    console.log("product:",product)
    
  return (
    <>
      <div className="container">
          <div className="row">
              <div className="col-md-6">
                  <img src={product.image} alt={product.title} />
              </div>
              <div className="col-md-6">
                  <h1>{product.title}</h1>
                  <hr />
                  <p>{product.description}</p>
                  <p>{product.price}</p>
                  <button type="button" className="btn btn-secondary">Add to cart</button>
              </div>
          </div>
      </div>
    </>
  )
}

export default ProductDetails