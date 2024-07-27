import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (data) => {
    console.log("submitting", data);
  };
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="mb-3">
        <label htmlFor="name" className="">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="outline outline-1 bg-blend-color-burn w-[400px] focus-visible:outline-double m-2"
        />
        {errors.name?.type === "required" && (
          <p className="text-red-700">Name field required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-red-700">Name must be more the 3 char</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="">
          Age
        </label>
        <input
          {...register("age", { required: true })}
          type="number"
          className="outline outline-1 bg-blend-color-burn w-[400px] focus-visible:outline-double m-2"
        />
        {errors.age?.type === "required" && (
          <p className="text-red-700">Name field required</p>
        )}
      </div>

      <button className="bg-red-300 py-2 px-4 rounded-md" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
