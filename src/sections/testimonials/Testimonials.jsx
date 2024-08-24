import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import Title from "../../components/title/Title";
import { testimonials } from "../../constants";

const Testimonials = () => {
  return (
    <MaxWidthWrapper id="testimonials">
      <Title primaryText={"What people are saying"} />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <li
            key={index}
            className="flex flex-col justify-between rounded-md border border-neutral-800 bg-neutral-900 p-6 text-neutral-400"
          >
            <p className="max-w-[95%]">{testimonial.text}</p>
            <div className="mt-8 flex">
              <div className="mr-6 h-12 w-12 rounded-full border border-neutral-300">
                <img
                  src={testimonial.image}
                  alt={testimonial.user}
                  className="rounded-full"
                />
              </div>
              <div className="">
                <h6>{testimonial.user}</h6>
                <p className="italic text-neutral-600">{testimonial.company}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </MaxWidthWrapper>
  );
};
export default Testimonials;
