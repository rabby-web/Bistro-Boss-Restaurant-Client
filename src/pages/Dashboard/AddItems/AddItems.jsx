import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to image bb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
  };
  return (
    <div>
      <SectionTitle heading="add an item" subHeading="whats new"></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input />
          {/* name */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Recipe name</span>
            </div>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
            <div className="label"></div>
          </label>

          {/* select */}
          <div className="flex gap-3">
            {/* category */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select
                defaultValue="default"
                className="select select-ghost input-bordered w-full "
                {...register("category", { required: true })}
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salade">Salade</option>
                <option value="pizza">Pizza</option>
                <option value="Soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
              <div className="label"></div>
            </label>
            {/* price */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered w-full "
              />
              <div className="label"></div>
            </label>
          </div>
          {/* recipe details */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
              {...register("recipe")}
            ></textarea>
            <div className="label"></div>
          </label>
          <div className="mb-3">
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input w-full max-w-xs form-control"
            />
          </div>

          <button className="btn bg-orange-600 text-white font-medium text-xl">
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
