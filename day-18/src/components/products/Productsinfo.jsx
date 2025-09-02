import React from 'react'

export default function Productsinfo({ pro,onDelete }) {
  if (!pro) {
    return <p>No product data available</p>;
  }

  const { productCode, title, price, category } = pro;

  return (
    <div style={{border:"1px solid teal ", borderRadius:"6px", padding:"10px" ,width:"15%"}}>
      <h4>Code: {productCode}</h4>
      <h4>Title: {title}</h4>
      <h4>Price: ${price}</h4>
      <h4>Category: {category}</h4>
      <button onClick={onDelete}>Delete product</button>
    </div>

  )
}
