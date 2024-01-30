import Productdetail from "./productDetail"
import { LuHeart } from "react-icons/lu";
import { MdOutlineShoppingCart, MdOutlineRemoveRedEye } from "react-icons/md";
import "../product/product.css"
const product = () => {
  return (
   <>
   <div className="products">
   <h3># Products</h3>
   <p>Home - Product</p>
    <div className="container">
    <div className="filter">
    <div className="categories">
      <ul>
        <li>Phone</li>
        <li>SmartWatch</li>
        <li>Headphone</li>
        <li>Laptop</li>
        </ul>  
    </div>
    </div>
    <div className="productbox">
        <div className="content">
          {
            Productdetail.map((product) => {
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

export default product
