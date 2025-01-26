export default function Button({
  children,
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className="mx-3 cursor-pointer bg-main px-6 py-3 font-bold uppercase hover:bg-main/85"
    >
      {children}
    </button>
  );
}
