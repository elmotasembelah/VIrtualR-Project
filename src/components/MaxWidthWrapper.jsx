import { twMerge } from "tailwind-merge";

const MaxWidthWrapper = ({ children, className, id }) => {
  return (
    <section
      id={id}
      className={twMerge(
        "mx-4 max-w-7xl px-6 py-8 md:mx-4 lg:mx-6 lg:py-20 xl:mx-auto",
        className,
      )}
    >
      {children}
    </section>
  );
};
export default MaxWidthWrapper;
