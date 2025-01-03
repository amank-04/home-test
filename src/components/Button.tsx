export default function Button({ children }: { children?: React.ReactNode }) {
  return (
    <button className="hover:bg-main/85 mx-3 cursor-pointer bg-main px-6 py-3 font-bold uppercase">
      {children}
    </button>
  );
}
