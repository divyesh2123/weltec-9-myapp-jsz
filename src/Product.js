import React from 'react'
import { useFetch } from './useFetch'

export default function Product() {

  const {loading,data} =  useFetch("https://fakestoreapi.com/products");
  
  console.log(loading);
  console.log(data);
  
  return (
    <div>Product</div>
  )
}
