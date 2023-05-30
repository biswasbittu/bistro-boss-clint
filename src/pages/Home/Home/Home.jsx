import MidBanner from "../../Shared/MidBanner/MidBanner";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

import Featured from "../Featured/Featured";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss/Home</title>
      </Helmet>
      <Banner />
      <Category />
      <MidBanner />
      <PopulerMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
