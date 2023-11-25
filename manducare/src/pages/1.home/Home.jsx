import Navbar from "../../components/header/Navbar";
import Cards from "../../components/cards/Cards";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";
import Statistics from "../../components/statistics/Statistics";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Statistics />
      <Footer />
    </div>
  );
};

export default Home;
