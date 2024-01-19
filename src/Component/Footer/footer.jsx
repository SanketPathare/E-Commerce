import { FaFacebook, FaInstagram  } from "react-icons/fa";
import { FaXTwitter} from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import "../Footer/footer.css";
function footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="about">
            <div className="logo">
              <h2>ElectroMart</h2>
            </div>
            <div className="detail">
              <p>
                Electromart is an online shopping platform that offers a wide
                range of products from various categories
              </p>
              
              <div className="icon">
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaXTwitter />
                </li>
                <li>
                <FiYoutube />
                </li>
              </div>
            </div>
          </div>
          <div className="account">
            <h3>My Account</h3>
            <ul>
              <li>Account</li>
              <li>Order</li>
              <li>Cart</li>
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="page">
            <h3>Pages</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Terms & Condition</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
