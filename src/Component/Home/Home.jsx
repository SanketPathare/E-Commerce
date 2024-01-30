import { Link } from "react-router-dom";
import "../Home/Home.css";
import { BiRightArrowAlt } from "react-icons/bi";
import home_img from "../../img/home2.png";
import watch from "../../img/watch.png";
import headset from "../../img/headsets.png";
import { FiTruck } from "react-icons/fi";
import { FaRupeeSign, FaHeadphonesAlt } from "react-icons/fa";
import { CiPercent } from "react-icons/ci";
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
      <div className="product_type">
        <div className="container">
          <div className="box">
            <div className="img_box">
              <img
                src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/h/c/-original-imagtc3h9h6kpbkc.jpeg?q=70&crop=false"
                alt="phone"
              />
            </div>
            <div className="detail">
              <p>40 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src={watch} alt="watch" />
            </div>
            <div className="detail">
              <p>40 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src={headset} alt="headset" />
            </div>
            <div className="detail">
              <p>40 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img
                src="https://m.media-amazon.com/images/I/71bDJ9wxxWL._SX679_.jpg"
                alt="laptop"
              />
            </div>
            <div className="detail">
              <p>40 products</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FiTruck />
            </div>
            <div className="detail">
              <h3>Free Shipping</h3>
              <p>Oder above ₹599 </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FaRupeeSign />
            </div>
            <div className="detail">
              <h3>Return & Refund</h3>
              <p>Money Back Guaranty</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <CiPercent />
            </div>
            <div className="detail">
              <h3>Member Discount</h3>
              <p>On every Order </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FaHeadphonesAlt />
            </div>
            <div className="detail">
              <h3>Customer Support</h3>
              <p>24/7 Call Support</p>
            </div>
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
          })}
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Smart Watches Collection</h3>
            <p>
              <FaRupeeSign />
              1299
            </p>
            <Link className="link" to="/product">
              Shop Now <BiRightArrowAlt />
            </Link>
          </div>
          <div className="img_box">
            <img
              src="https://s.hdnux.com/photos/01/10/25/27/18961913/4/rawImage.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
