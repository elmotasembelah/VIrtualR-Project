import MaxWidthWrapper from "../../components/MaxWidthWrapper.jsx";
import Title from "../../components/title/Title";
import code from "../../assets/code.jpg";
import { CircleCheck } from "lucide-react";
import { checklistItems } from "../../constants";

console.log(checklistItems);

const Workflow = () => {
  return (
    <MaxWidthWrapper className="border-t border-neutral-800" id="workflow">
      <section>
        <Title primaryText="accelerate your" accentText="coding workflow" />

        <div className="mt-6 gap-2 lg:flex">
          <img src={code} alt="Code" className="w-full p-2 lg:w-1/2" />

          <ul className="w-full pt-12 lg:w-1/2">
            {checklistItems.map((item, index) => (
              <li key={index} className="mb-12 flex">
                <div className="mr-3 h-10 w-10 rounded-full bg-neutral-900 p-2 lg:mx-6">
                  <CircleCheck className="text-green-500" />
                </div>
                <div>
                  <h6 className="mt-1 text-xl">{item.title}</h6>
                  <p className="mt-2 text-neutral-500">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};
export default Workflow;
