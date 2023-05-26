import chefService from "../../../assets/home/chef-service.jpg";
const MidBanner = () => {
  return (
    <div
      className="hero  mb-24  md:h-96 md:w-5/6 mx-auto"
      style={{
        backgroundImage: `url(${chefService})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content w-4/5  md:py-8 text-center bg-white text-black">
        <div className="w-4/5">
          <h1 className="mb-5 text-4xl font-[Cinzel] ">Bistro Boss</h1>
          <p className="mb-5 font-[Inter]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
