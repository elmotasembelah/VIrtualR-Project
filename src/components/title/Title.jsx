const Title = ({ primaryText, accentText = "" }) => {
  return (
    <h2 className="text-center text-3xl capitalize tracking-wide sm:text-5xl lg:text-6xl">
      {primaryText}{" "}
      <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
        {accentText}
      </span>
    </h2>
  );
};
export default Title;
