import { ReactNode } from "react";

interface KeyFeaturesProps {
  children: ReactNode;
  title: string;
}

export default function KeyFeatures({ children, title }: KeyFeaturesProps) {
  return (
    <section className="flex max-w-5xl mx-auto text-center mb-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <h2 className="text-[var(--orange)] text-3xl">{title}</h2>
        <div className="flex flex-col md:flex-row gap-6 mt-10">{children}</div>
      </div>
    </section>
  );
}
