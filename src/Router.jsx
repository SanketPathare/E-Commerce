import Home from "./Component/Home/Home.jsx"
import Product from "./Component/product/product.jsx";
import {Routes , Route} from "react-router-dom"
import Contact from "./Component/contact/contact.jsx";
const Router =({product , setProduct})=>{
  return(
  <>

  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/product" element={<Product product={product} setProduct={setProduct}/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
  </Routes>
  
  </>
  );
}
export default Router