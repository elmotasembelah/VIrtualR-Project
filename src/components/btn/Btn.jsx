import { cn } from "../../utils/cn";

const Btn = ({ text, variant = "primary" }) => {
  return (
    <button
      className={cn("w-full whitespace-nowrap rounded-md px-10 py-2", {
        border: variant === "primary",
        "border-0 bg-gradient-to-r from-orange-500 to-orange-800":
          variant === "accent",
      })}
    >
      {text}
    </button>
  );
};
export default Btn;
