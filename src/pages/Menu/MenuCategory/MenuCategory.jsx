import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImage }) => {
  return (
    <div className="my-4">
      {title && <Cover img={coverImage} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mb-10 mt-8 ">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
