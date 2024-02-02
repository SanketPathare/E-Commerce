import ProductDetail from "./productDetail"
import {  LuHeart } from "react-icons/lu";
import { MdOutlineShoppingCart, MdOutlineRemoveRedEye } from "react-icons/md";
import "../product/product.css"
 import { useState } from "react";
const Product = () => {
  const [product,setProduct] = useState(ProductDetail)
  const filtterProduct =(product)=>{
    const update = ProductDetail.filter((x)=>{
      return x.cat === product;
    })
    setProduct(update);
  }
  const AllProducts =()=>{
    setProduct(ProductDetail);
  }
  
  return (
   <>
   <div className="products">
   <h3># Products</h3>
   <p>Home - Product</p>
    <div className="container">
    <div className="filter">
    <div className="categories">
      <h3>All Categories</h3>
      <ul>
        <li onClick={()=>AllProducts()}>All Products</li>
        <li onClick={()=> filtterProduct("Phone")}>Phone</li>
        <li onClick={()=> filtterProduct("Watch")} >SmartWatch</li>
        <li onClick={()=> filtterProduct("Headphone")}>Headphone</li>
        <li onClick={()=> filtterProduct("Laptop")}>Laptop</li>
        </ul>  
    </div>
    </div>
    <div className="productbox">
        <div className="content">
          {
          product.map((product) => {
                return (
                  <div className="box" key={product.id}>
                    <div className="img_box">
                      <img src={product.Img} alt={product.Title} />
                    </div>
                    <div className="detail">
                      <p>{product.cat}</p>
                      <div className="icon">
                        <li>
                          <MdOutlineShoppingCart />
                        </li>
                        <li>
                          <MdOutlineRemoveRedEye />
                        </li>
                        <li>
                          <LuHeart />
                        </li>
                      </div>
                      <h3>{product.Title}</h3>
                      <h4>{product.price}</h4>
                    </div>
                  </div>
                );
              })
          }
        </div>
    </div>
    </div>
   </div>
   </>
  )
}

export default Product
