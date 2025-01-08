import terms from "@/features/terms/data/termsData.json";
import Welcome from "@/features/terms/components/Welcome";
import Hello from "@/features/terms/components/Hello";
import Term from "@/features/terms/components/Term";
import Button from "@/components/Button";
import WhyUs from "@/features/terms/components/WhyUs";
import Table from "@/components/CamparisonTable";

export default function TermsPage() {
  return (
    <div className="space-y-10 text-white">
      <Welcome />
      <Hello />

      <Table />

      <div className="md:pr-16">
        <div className="space-y-4 border-b border-primary-gray py-16 text-center tracking-widest">
          <h2 className="text-5xl font-bold uppercase">
            all in one esports tournament hosting
          </h2>
          <p className="text-sm capitalize text-primary-gray">
            " why juggle multiple platforms when you can do it all in one ?
            welcome to the future of laziness "
          </p>
          <Button>host now</Button>
          <Button>we host for you</Button>
        </div>
        {terms.map(({ section, title, description }) => (
          <Term
            key={section}
            section={section}
            title={title}
            description={description}
          />
        ))}{" "}
      </div>

      <WhyUs />
    </div>
  );
}
