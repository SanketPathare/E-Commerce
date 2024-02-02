import { Link } from "react-router-dom";
import "../Home/Home.css";
import { BiRightArrowAlt } from "react-icons/bi";
import home_img from "../../img/home2.png";
import HomeProduct from "../Home/HomeProduct";
import { LuHeart } from "react-icons/lu";
import { MdOutlineShoppingCart, MdOutlineRemoveRedEye } from "react-icons/md";

function Home() {
  return (
    <>
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Smart Phone Collection 2024</h2>
            <Link className="link" to="/product">
              Shop Now <BiRightArrowAlt />
            </Link>
          </div>
          <div className="img_box">
            <img src={home_img} alt="home_img" />
          </div>
        </div>
      </div>
    
      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {
          HomeProduct.map((product) => {
            return (
              <div className="box" key={product.id}>
                <div className="img_box">
                  <img src={product.Img} alt={product.Title} />
                </div>
                <div className="detail">
                  <p>{product.cat}</p> 
                  <h3>{product.Title}</h3>
                  <h4>{product.price}</h4>
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>
Choose From a Wide Range, Available At Great Prices. ElectroMart Offers an Array Of Unique Products From Hundreds Of Brands.</h3>
            
            <Link className="link" to="/product">
              Shop Now <BiRightArrowAlt />
            </Link>
          </div>
          <div className="img_box">
            <img
              src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/other/in/mkt/pdp/wearables/watch-gt/img/Smart-Notification.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
