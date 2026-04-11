import { Button } from "./common/Button";
import Heading from "./common/Heading";

const Regenerative = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/images/webp/regenerative-bg-image.webp')`,
      }}
      className="max-w-285 w-full mx-auto px-4 xl:px-0 py-10 sm:py-15 flex items-center flex-col gap-8 bg-cover bg-center bg-no-repeat mt-15 sm:mt-24 lg:mt-35 rounded-xl"
    >
      <div className="flex flex-col gap-4 items-center text-center px-4">
        <Heading
          h2ClassName={
            "text-whitee text-2xl sm:text-3xl lg:text-custom-4xl text-center"
          }
          h2Text1={" Let's Build a Regenerative Future, Together"}
        />
        <p className="max-w-full sm:max-w-156.25 leading-160 font-poppins text-center w-full text-whitee text-sm sm:text-base">
          Whether you're an investor, Indigenous leader, or global partner,
          there's a place for you at Captiva.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
        <Button text={"Invest in Captiva"} variant={"secondary"} />
        <Button text={"Invest in Captiva"} variant={"ternary"} />
      </div>
    </div>
  );
};

export default Regenerative;
