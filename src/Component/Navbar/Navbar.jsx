import "./Navbar.css";
// import { FaTruckMoving } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

function Navbar() {
  const[search ,setSearch] = useState();
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
      {/* <div className="free">
        <div className="icon">
          <FaTruckMoving />
        </div>
        <p>Free shipping when shopping upto ₹599</p>
      </div> */}
      <div className="main_header">
        <div className="container">
          <div className="logo">
            {/* <img src="/images/Logo.png" alt="" /> */}
            ElectroMart
          </div>
          <div className="search_box">
            <input
              type="text"
              value={search}
              placeholder="Search Your Product..."
              autoComplete="off"
              onChange={(e)=>{setSearch(e.target.value)}}
            ></input>
            <button>Search</button>
          </div>
          <div className="icon">
            {
              isAuthenticated &&
              (
                <div className="account">
                <div className="user_icon">
                  <FaRegUser />
                </div>
                <p>
                  {/* Account &nbsp;|&nbsp; Logout */}
                  Hello, {user.name}
                </p>
              </div>
              )
            }
           
            <div className="second_icon">
              <Link to="/" className="link">
                <IoHeartOutline />
              </Link>
              <Link to="/cart" className="link">
                <BsBagCheck />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="link">
                  {" "}
                  Product
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="auth">
            {isAuthenticated ? (
              <button>
                <CiLogout 
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                  
                />
                               
              </button>
            ) : (
              <button>
              <CiLogin onClick={() => loginWithRedirect()} Login />
                
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
