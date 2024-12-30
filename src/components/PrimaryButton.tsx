import { cn } from "@/lib/utils";

export default function PrimaryButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "bg-gradient-to-tr from-main via-red-700 to-red-600 px-5 py-3 font-bold uppercase xl:px-8 xl:py-4 xl:text-lg",
        className,
      )}
    >
      {children}
    </button>
  );
}
