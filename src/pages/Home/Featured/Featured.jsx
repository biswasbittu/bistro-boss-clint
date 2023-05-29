import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css';


const Featured = () => {
  return (
   <div className=" my-20 "
   
  >
     <div className="featured-item text-white  pt-12">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pt-12 py-20 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="font-[Inter] md:ml-10 space-y-4">
          <p className="text-2xl">March 20, 2023</p>
          <h3 className="text-2xl font-medium">WHERE CAN I GET SOME?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Featured;
