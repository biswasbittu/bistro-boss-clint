import MidBanner from "../../Shared/MidBanner/MidBanner";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <MidBanner/>
        </div>
    );
};

export default Home;