import Navbar from "../../components/header/Navbar";
import Cards from "../../components/cards/Cards";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
