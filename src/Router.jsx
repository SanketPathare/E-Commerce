import Home from "./Component/Home/Home.jsx"
import Product from "./Component/product/product.jsx";
import {Routes , Route} from "react-router-dom"
const Router =()=>{
  return(
  <>

  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/product" element={<Product/>}>   
    </Route>
  </Routes>
  
  </>
  );
}
export default Router