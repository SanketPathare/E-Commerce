import Home from "./Component/Home/Home"
import {Routes , Route} from "react-router-dom"
const Router =()=>{
  return(
  <>

  <Routes>
    <Route path="/" element={<Home />}></Route>
  </Routes>
  
  </>
  );
}
export default Router