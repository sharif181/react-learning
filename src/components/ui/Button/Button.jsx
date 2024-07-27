const Button = ({ children }) => {
  return (
    <div className="p-10">
      <button className="px-8 py-4 bg-blue-800 rounded-xl text-white hover:bg-slate-800">
        {" "}
        {children}
      </button>
    </div>
  );
};

export default Button;
