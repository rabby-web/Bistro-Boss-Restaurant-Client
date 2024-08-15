import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <SectionTitle heading="add an item" subHeading="whats new"></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} />

          <select
            className="select select-ghost w-full max-w-xs"
            {...register("category")}
          >
            <option disabled selected>
              Select a category
            </option>
            <option value="salade">salade</option>
            <option>Vue</option>
            <option>React</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
