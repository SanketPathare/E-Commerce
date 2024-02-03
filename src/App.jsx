import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/footer";
import Router from "./Router";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ProductDetail from "./Component/product/productDetail";
import { useState } from "react";

function App() {
  const [product,setProduct] = useState(ProductDetail)
  const searchbtn =(product)=>{
    const change =ProductDetail.filter((X)=>{
      return X.cat === product;
    })
    setProduct(change)
  }
  return (
    <>
      <BrowserRouter>
        <Navbar searchbtn={searchbtn} />
        <Router product={product} setProduct={setProduct}/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
