import MaxWidthWrapper from "../../components/MaxWidthWrapper.jsx";
import Title from "../../components/title/Title.jsx";
import { features } from "../../constants/index.jsx";

const Features = () => {
  return (
    <MaxWidthWrapper>
      <section id="features">
        <article className="flex flex-col items-center gap-10 lg:gap-20">
          <h1 className="capitalize text-orange-500">Features</h1>
          <Title primaryText="Easily Build" accentText="Your Code" />
          <div>
            <ul className="grid gap-y-10 sm:grid-cols-2 lg:mb-20 lg:grid-cols-3 lg:gap-y-20">
              {features.map((feature, index) => (
                <li key={index} className="mb-0 flex lg:mb-10">
                  <div className="mr-3 h-10 w-10 rounded-full bg-neutral-900 p-2 text-orange-700 sm:mx-6">
                    {feature.icon}
                  </div>
                  <div>
                    <h5 className="mt-2 text-xl">{feature.text}</h5>
                    <p className="mt-6 text-neutral-500 sm:p-2">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </MaxWidthWrapper>
  );
};
export default Features;
