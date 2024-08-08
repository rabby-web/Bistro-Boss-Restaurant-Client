const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} className="w-full" alt="Item Name" />
        </figure>
        <p className="absolute right-0 bg-orange-600 opacity-80 border rounded-md p-1 text-white ">
          $ {price}
        </p>
        <div className="card-body flex flex-col justify-center items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe.slice(0, 60)}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline border-0 border-b-4 border-orange-600 mt-4 ">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
