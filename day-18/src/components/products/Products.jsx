import React, { useState } from 'react'
import Productsinfo from './Productsinfo'

export default function Products() {
  const [products, setProducts] = useState([
    { id: 1, productCode: "P001", title: "Wireless Mouse", category: "Electronics", price: 25.99 },
    { id: 2, productCode: "P002", title: "Gaming Keyboard", category: "Electronics", price: 55.50 },
    { id: 3, productCode: "P003", title: "Bluetooth Headphones", category: "Electronics", price: 79.00 },
    { id: 4, productCode: "P004", title: "Running Shoes", category: "Fashion", price: 49.99 },
    { id: 5, productCode: "P005", title: "Smart Watch", category: "Electronics", price: 120.00 },
    { id: 6, productCode: "P006", title: "Backpack", category: "Fashion", price: 35.00 },
    { id: 7, productCode: "P007", title: "Coffee Maker", category: "Home Appliances", price: 89.99 },
    { id: 8, productCode: "P008", title: "Office Chair", category: "Furniture", price: 150.00 },
    { id: 9, productCode: "P009", title: "LED Desk Lamp", category: "Home Appliances", price: 30.00 },
    { id: 10, productCode: "P010", title: "T-Shirt", category: "Fashion", price: 15.00 }
  ]);

  function deleteProduct(id) {
    const clonedProducts = structuredClone(products);
    const filteredProducts = clonedProducts.filter(p => p.id !== id);
    setProducts(filteredProducts);
  }

  return (
    <>
      <h2>Products</h2>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"10px", flexWrap:"wrap" }}>
        {products.map((p) => (
          <Productsinfo 
            key={p.id} 
            pro={p} 
            onDelete={() => deleteProduct(p.id)} 
          />
        ))}
      </div>
    </>
  )
}
