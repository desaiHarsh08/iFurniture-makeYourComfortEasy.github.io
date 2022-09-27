import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import MyFooter from "./Components/MyFooter";
import NavBar from "./Components/NavBar";
import NewArrivals from "./Components/NewArrivals";
import Partners from "./Components/Partners";
import ShopNow from "./Components/ShopNow";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <ShopNow />
      <NewArrivals />
      <About />
      <Partners />
      <Contact />
      <Testimonials />
      <MyFooter />
    </>
  );
}

export default App;
