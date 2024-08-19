// import Banner from "../Banner/Banner";

import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import BistroBoss from "../BistroBoss/BistroBoss";
import Contract from "../Contract/Contract";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro-Boss || Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Contract></Contract>
      <Testimonials></Testimonials>
    </>
  );
};

export default Home;
