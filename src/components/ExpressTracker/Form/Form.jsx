import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = ({ categories, handleFormSubmit }) => {
  const schema = z.object({
    description: z.string().min(3).max(50),
    amount: z
      .number({ invalid_type_error: "Amount is required" })
      .min(0.01)
      .max(100_000),
    category: z.enum(categories),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            {...register("description")}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="description"
            type="text"
          />
          {errors.description && (
            <p className="text-red-800 mt-1">{errors.description.message}</p>
          )}
        </div>

        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="amount"
          >
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="amount"
            type="number"
          />
          {errors.amount && (
            <p className="text-red-800 mt-1">{errors.amount.message}</p>
          )}
        </div>

        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <select
            {...register("category")}
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="category"
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-800 mt-1">{errors.category.message}</p>
          )}
        </div>
        <div className="w-full px-3 mt-3 flex justify-center">
          <button
            disabled={!isValid}
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
