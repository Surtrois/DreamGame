import  Router  from "./Router.js";
import './App.css';
import Home from "./components/Home.jsx";
import Banner from "./components/Logo.jsx";
import Navigation from "./components/Navigation.jsx";
import Carousel from "./components/Carousel.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <div className="App">
      <Banner />
      <Carousel />
      <Navigation />
      <Router></Router>
      <Footer></Footer>
    </div> 
  );
}

export default App;
