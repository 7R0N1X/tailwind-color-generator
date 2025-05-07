import { Card } from "@components/Card";
import { ArticlesCard } from "./ArticlesCard";

export const UiExamples = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-medium text-gray-50">UI Examples</h2>
      <div className="grid grid-cols-4 gap-5">
        <Card bgColor="#110000" />
        <ArticlesCard />
      </div>
    </section>
  );
};
