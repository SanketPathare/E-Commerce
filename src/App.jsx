import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/footer";
import Router from "./Router";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
