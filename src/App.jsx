import Navbar from "./Component/Navbar/Navbar"
import Router from "./Router"
import "./App.css"
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
       <Router/>

      </BrowserRouter>
     
    </>

  )
}

export default App
