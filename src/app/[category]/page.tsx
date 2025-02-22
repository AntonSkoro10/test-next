"use client"
import React, { useEffect, useState } from "react"
import Catalog from "../catalog/page"


export default function getCategory({ category }) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        
        const fetchProducts = async () =>  {
            try {
                const response = await fetch('./catalog.json')
                const data = await response.json()
                setProducts(data.products)
           }
        }
    })
    return (
      <div className="">
            <h1> Категорія {category}</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p> Ціна: ${product.price}</p>
                  </li>
                ))}
        </ul>
      </div>  
    )
}