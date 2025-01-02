import loading from "@/../public/loading.png";
const Generating = ({ className }: any) => {
  return (
    <div
      className={`bg-n-8/80 flex h-[3.5rem] items-center rounded-[1.7rem] px-6 text-base ${className || ""}`}
    >
      <img className="mr-4 h-5 w-5 animate-spin" src={loading} alt="Loading" />
      AI is generating
    </div>
  );
};

export default Generating;
