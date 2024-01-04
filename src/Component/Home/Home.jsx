import { Link } from "react-router-dom";
import "../Home/Home.css";
import { BiRightArrowAlt } from "react-icons/bi";
import   home_img  from "../../img/home2.png"
import phone from "../../img/phone.png"
import watch from "../../img/watch.png"
import headset from "../../img/headsets.png"
import laptop from "../../img/laptop.png"

function Home() {
  return (
    <>
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Smart Phone Collection 2024</h2>
            <Link  className="link" to="/product">
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
            <img src={phone} alt="phone" />
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
            <img src={laptop} alt="laptop" />
          </div>
          <div className="detail">
            <p>40 products</p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Home;
