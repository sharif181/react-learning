import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const Form = () => {
  const schema = z.object({
    name: z.string().min(3, { message: "Test error message" }),
    age: z
      .number({ invalid_type_error: "age field is required" })
      .min(10, { message: "Must be upto 10" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(schema) });
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
          {...register("name")}
          id="name"
          type="text"
          className="outline outline-1 bg-blend-color-burn w-[400px] focus-visible:outline-double m-2"
        />
        {errors.name && <p className="text-red-700">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          type="number"
          className="outline outline-1 bg-blend-color-burn w-[400px] focus-visible:outline-double m-2"
        />
        {errors.age && <p className="text-red-700">{errors.age.message}</p>}
      </div>

      <button
        disabled={!isValid}
        className="bg-red-300 py-2 px-4 rounded-md"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
