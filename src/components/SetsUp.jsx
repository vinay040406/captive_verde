import { Button } from "./common/Button";
import Heading from "./common/Heading";
import Icons from "./common/Icons";
import { SETUP_DATA } from "./utils/helper";

const SetsUp = () => {
  return (
    <div className="max-w-285 w-full mx-auto mt-16 sm:mt-24 lg:mt-35 px-4 xl:px-0 flex flex-col gap-6 sm:gap-10 items-center">
      <div className="flex flex-col gap-4 text-center sm:text-left">
        <Heading
          h2Text1={"What"}
          spanText={"Sets Us "}
          h2Text2={"Apart"}
          spanClassName={"text-dark-green"}
          h2ClassName={"text-blacky text-3xl sm:text-4xl lg:text-5xl"}
        />
        <p className="text-brown leading-160 font-poppins text-sm sm:text-base">
          Why Captiva Verde is the Indigenous Development Partner of Choice
        </p>
      </div>
      <div className="flex flex-col gap-8 sm:gap-12.5 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SETUP_DATA.map((item, index) => (
            <div
              key={index}
              className="rounded-xl p-3 sm:p-6 border border-brown/12 group hover:shadow-[0px_0px_21.9px_0px_rgba(0,0,0,0.08)] duration-300 ease-in cursor-pointer"
            >
              <div className="flex flex-col gap-4 items-center text-center">
                <span className="h-14 w-14 sm:h-17.5 sm:w-17.5 rounded-full bg-dark-green/10 flex justify-center items-center group-hover:bg-dark-green duration-300 ease-in">
                  <Icons
                    className={"duration-300 ease-in"}
                    icon={item.svg}
                    pathClass={`${"group-hover:fill-whitee"} fill-dark-green duration-300 ease-in`}
                  />
                </span>
                <p className="font-poppins font-medium leading-130 text-sm sm:text-xl text-blacky">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Button text={"Contact Us"} variant="primary" />
          <Button text={"Meet the Team"} variant="outline" />
        </div>
      </div>
    </div>
  );
};

export default SetsUp;
