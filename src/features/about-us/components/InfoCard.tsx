export default function InfoCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto border-t-2 border-main/80 p-8 text-white">
      <h2 className="mb-4 border-l-[6px] border-main pl-3 text-xl font-semibold">
        {title}
      </h2>
      <p className="leading-loose tracking-widest text-primary-gray">
        {description}
      </p>
    </div>
  );
}
