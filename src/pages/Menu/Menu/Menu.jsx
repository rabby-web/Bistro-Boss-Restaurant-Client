import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImag from "../../../assets/menu/banner3.jpg";
import dessertImag from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImag from "../../../assets/menu/pizza-bg.jpg";
import saladImag from "../../../assets/menu/salad-bg.jpg";
import soupImag from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro-Boss || Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuImag} title="Our Menu"></Cover>

      {/* offered  menu items*/}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts menu items */}
      <MenuCategory
        items={desserts}
        title="Dessert"
        coverImage={dessertImag}
      ></MenuCategory>

      {/* pizza menu items */}
      <MenuCategory
        items={pizza}
        title="Pizza"
        coverImage={pizzaImag}
      ></MenuCategory>

      {/* salad menu items */}
      <MenuCategory
        items={salad}
        title="salad"
        coverImage={saladImag}
      ></MenuCategory>

      {/* salad menu items */}
      <MenuCategory
        items={soup}
        title="soup"
        coverImage={soupImag}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
