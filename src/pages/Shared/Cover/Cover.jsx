import { Parallax } from 'react-parallax';

const Cover = ({ img,title }) => {
  return (
    <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div>
      <div
        className="hero h-[700px]"
        
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" max-w-7xl  md:h-64 font-[Cinzel] bg-[#151515] bg-opacity-50 ">;
    
            <h1 className="mb-5 text-5xl font-bold ">{title}</h1>
            <p className="mb-5 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. 
            </p>
          </div>
        </div>
      </div>
           
    </div>
    </Parallax>
    
  );
};

export default Cover;
