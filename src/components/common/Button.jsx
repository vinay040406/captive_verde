export const Button = ({ text, className, variant }) => {
  const variants = {
    primary:
      "text-whitee bg-dark-green w-fit duration-300 px-5 py-3 md:px-8 md:py-4.25 ease-in border border-transparent hover:border-dark-green rounded-full hover:bg-whitee hover:text-dark-green font-poppins text-sm md:text-base leading-100 font-semibold",
    outline:
      "text-dark-green bg-whitee w-fit px-5 py-3 md:px-8 md:py-4.25 duration-300 ease-in rounded-full border border-dark-green font-poppins hover:border-whitee hover:bg-dark-green text-sm md:text-base hover:text-whitee leading-100 font-semibold",
    secondary:
      "bg-whitee border border-transparent text-dark-green py-2 md:py-3.25 px-4 md:px-10 h-fit font-semibold w-fit duration-300 ease-in rounded-full hover:border-whitee hover:bg-transparent hover:text-whitee text-sm md:text-base ",
    ternary:
      "bg-transparent border border-whitee text-whitee font-semibold w-fit duration-300 ease-in rounded-full hover:border-transparent hover:bg-whitee hover:text-dark-green h-fit py-2 text-sm md:text-base md:py-3.25 px-4 md:px-10",
  };

  return (
    <button
      className={`${variants[variant] || ""} ${className} cursor-pointer`}
    >
      {text}
    </button>
  );
};
