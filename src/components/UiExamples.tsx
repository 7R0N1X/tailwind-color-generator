import { Banner } from "@components/Banner";
import { Card } from "@components/Card";
import { CodeBlock } from "@components/CodeBlock";
import { LoginForm } from "@components/LoginForm";
import { PaymentCards } from "@components/PaymentCards";

export const UiExamples = () => {
  return (
    <section className="px-4 text-gray-50 sm:px-6 2xl:px-0">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="h-full space-y-4">
          <h2 className="text-xl font-medium text-gray-50">Code</h2>
          <CodeBlock />
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-medium text-gray-50">UI Examples</h2>
          <Card />
        </div>
        <div className="space-y-4 xl:mt-11">
          <Banner />
          <PaymentCards />
        </div>
        <LoginForm className="xl:mt-11" />
      </div>
    </section>
  );
};
