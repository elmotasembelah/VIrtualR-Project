import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import { CircleCheck } from "lucide-react";
import Title from "../../components/title/Title";
import { pricingPlans } from "../../constants";
import Btn from "../../components/btn/Btn";

const Pricing = () => {
  return (
    <MaxWidthWrapper id="pricing">
      <div>
        <Title primaryText={"pricing"} />
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <li key={index} className="rounded-lg border border-neutral-700 p-10">
            <h6 className="text-4xl">
              {plan.title}{" "}
              {plan.title === "Pro" && (
                <span className="text-xl text-orange-500">(Most Populer)</span>
              )}
            </h6>
            <p className="mt-8">
              <span className="mr-2 text-5xl">{plan.price}</span>
              <span className="capitalize text-neutral-400">/Month</span>
            </p>
            <ul className="mt-8 flex flex-col gap-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div className="mr-2">
                    <CircleCheck />
                  </div>
                  <p>{feature}</p>
                </li>
              ))}
            </ul>

            <button className="mt-20 w-full rounded-md border border-orange-900 py-2 text-xl duration-300 hover:bg-orange-900">
              Subscribe
            </button>
          </li>
        ))}
      </ul>
      {}
    </MaxWidthWrapper>
  );
};
export default Pricing;
