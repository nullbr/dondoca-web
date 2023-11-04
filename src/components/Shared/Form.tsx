import { WorkerParams } from "../../types/worker";

interface FormProps {
  resource: WorkerParams;
  handleSubmit: () => void;
}

const Form = ({ resource, handleSubmit }: FormProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-transparent-gray rounded-xl text-white p-5"
    >
      <fieldset className="grid grid-cols-2">
        <p className="w-full p-2">
          <input
            className="bg-transparent border-b-2 border-primary w-full rounded-full px-2 shadow-sm text-xl"
            id="first_name"
            name="first_name"
            type="text"
            defaultValue={resource.first_name}
          />
        </p>

        <p className="w-full p-2">
          <input
            className="bg-transparent border-b-2 border-primary w-full rounded-full px-2 shadow-sm text-xl"
            id="last_name"
            name="last_name"
            type="text"
            defaultValue={resource.last_name || ""}
          />
        </p>

        <p className="w-full p-2 col-span-2">
          <input
            className="bg-transparent border-b-2 border-primary w-full rounded-full px-2 shadow-sm text-xl"
            id="job"
            name="job"
            type="text"
            defaultValue={resource.job}
          />
        </p>

        <p className="w-full p-2">
          <input
            className="bg-transparent border-b-2 border-primary w-full rounded-full px-2 shadow-sm text-xl"
            id="instagram"
            name="instagram"
            type="text"
            defaultValue={resource.instagram || ""}
          />
        </p>

        <p className="w-full p-2">
          <input
            className="bg-transparent border-b-2 border-primary w-full rounded-full px-2 shadow-sm text-xl"
            id="phone_number"
            name="phone_number"
            type="text"
            defaultValue={resource.phone_number || ""}
          />
        </p>

        <p className="w-full p-2">
          <select
            className="bg-transparent border-b-2 border-primary w-full rounded-full px-2 shadow-sm text-xl"
            id="categories"
            name="categories"
          >
            {resource.categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </p>

        <p>
          <input id="image_url" name="image_url" type="file" />
        </p>
      </fieldset>
    </form>
  );
};
export default Form;
