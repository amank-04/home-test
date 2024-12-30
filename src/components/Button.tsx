export default function Button({ children }: { children?: React.ReactNode }) {
  return <button className="bg-main mx-3 hover:bg-main/85 uppercase px-6 py-3 font-bold">{children}</button>;
}
