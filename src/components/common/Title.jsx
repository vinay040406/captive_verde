const Title = ({ text, className, spanClassName }) => {
  return (
    <div className={`${className} flex gap-3 font-poppins items-center text-center sm:text-left`}>
      <span
        className={`h-px max-w-12.5 w-full rounded-[3px] ${spanClassName}`}
      ></span>
      <p className={`font-medium leading-160`}>{text}</p>
      <span
        className={`h-px max-w-12.5 w-full rounded-[3px] ${spanClassName}`}
      ></span>
    </div>
  );
};

export default Title;
