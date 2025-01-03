type Props = {
  section: string;
  title: string;
  description: string;
};

export default function Term({ section, title, description }: Props) {
  return (
    <div className="text-primary-gray border-b-2 border-main py-8 pl-5 capitalize md:flex md:space-x-56">
      <div className="flex space-x-3 text-4xl md:min-w-[33%]">
        <span className="h-10 w-2 bg-main" />
        <p>
          <span className="font-semibold text-white">tournment</span> {section}
        </p>
      </div>

      <div className="space-y-3 tracking-widest">
        <h3 className="text-3xl font-semibold text-white">" {title} "</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
