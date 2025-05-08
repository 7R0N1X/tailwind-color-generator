import { Card } from "@components/Card";
import { ArticlesCard } from "@components/ArticlesCard";

export const UiExamples = () => {
  return (
    <section className="space-y-6 px-4 sm:px-6 2xl:px-0">
      <h2 className="text-xl font-medium text-gray-50">UI Examples</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card />
        <ArticlesCard />
      </div>
    </section>
  );
};
