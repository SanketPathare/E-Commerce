import { FaFacebook, FaInstagram  } from "react-icons/fa";
import { FaXTwitter} from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import "../Footer/footer.css";
function footer() {
  return (
    <>
     <footer className="footer">
     <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
            <li><a href="#">order status</a></li>
            <li><a href="#">payment options</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>online shop</h4>
          <ul>
            <li><a href="#">Phone</a></li>
            <li><a href="#">SmartWatch</a></li>
            <li><a href="#">Headphone</a></li>
            <li><a href="#">Laptop</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
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
     </div>
  </footer>
    </>
  );
}

export default footer;
