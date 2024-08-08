import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -60, max: 60 }}
      bgImage={img}
      bgImageAlt="Our Menu"
      strength={-200}
    >
      <div className="hero h-[650px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
