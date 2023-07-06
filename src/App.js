import  Router  from "./Router.js";
import './App.css';
import Home from "./components/Home.jsx";
import Banner from "./components/Logo.jsx";
import Navigation from "./components/Navigation.jsx";
import Carousel from "./components/Carousel.jsx";

function App() {
  return (
    <div className="App">
      <Banner />
      <Carousel />
      <Navigation />
      <Router></Router>
    </div> 
  );
}

export default App;
