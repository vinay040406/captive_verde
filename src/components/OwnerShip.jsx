import Image from "next/image";
import { Button } from "./common/Button";
import Title from "./common/Title";
import Heading from "./common/Heading";
import { OWNERSHIP_MODEL_DATA } from "./utils/helper";

const OwnerShip = () => {
  return (
    <div className="w-full bg-dark-green/8">
      <div className="max-w-285 w-full mx-auto px-4 xl:px-0 flex flex-col gap-10 sm:gap-16 py-10 sm:py-16.5 mb-5 md:mb-0">
        <div className="flex flex-col lg:flex-row gap-7 lg:gap-15.75 items-center">
          <Image
            src={"/images/webp/ownership-model.webp"}
            height={510}
            width={550}
            alt="ownership"
            className="md:object-cover object-contain object-center lg:w-auto h-auto lg:h-127.25 rounded-xl"
          />
          <div className="flex flex-col gap-5 md:gap-8 max-w-full lg:max-w-131.75 w-full">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <Title
                  text={"Indigenous Ownership Model"}
                  spanClassName={"bg-dark-green"}
                  className={"text-dark-green font-medium"}
                />
                <Heading
                  h2Text1={"A New "}
                  spanText={" Model of Shared "}
                  h2Text2={"Prosperity"}
                  h2ClassName={"text-black text-3xl sm:text-4xl lg:text-5xl"}
                  spanClassName={"text-dark-green"}
                />
              </div>
              <p className="font-poppins text-brown leading-160 text-sm sm:text-base">
                Through our partnership with MDC, Captiva Verde is enabling a
                fully Indigenous-owned development arm—one that channels equity,
                leadership, and long-term economic returns directly to
                communities. This model prioritizes self-determination while
                aligning with private investment and institutional
                infrastructure standards.
              </p>
            </div>
            <Button text={"Know More "} variant={"primary"} />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {OWNERSHIP_MODEL_DATA.map((item, index) => (
            <div
              key={index}
              title={item.title}
              className="relative border rounded-xl border-dark-green/12 overflow-hidden cursor-grab duration-300 ease-in hover:shadow-[0px_2px_20px_0px_rgba(0,0,0,0.25)]"
            >
              <Image
                src={item.image}
                height={100}
                width={100}
                alt={item.title}
                className="w-full h-48 sm:h-64 lg:h-82.25 object-cover object-center"
              />
              <div className="bg-white absolute bottom-0 flex justify-center items-center text-dark-green leading-160 font-poppins py-2.5 sm:py-3.5 w-full font-semibold text-sm sm:text-base">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OwnerShip;
