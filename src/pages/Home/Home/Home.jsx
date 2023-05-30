import MidBanner from "../../Shared/MidBanner/MidBanner";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <MidBanner/>
            <PopulerMenu/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;