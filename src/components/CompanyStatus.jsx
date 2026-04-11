import Image from "next/image";
import { Button } from "./common/Button";
import Heading from "./common/Heading";
import Title from "./common/Title";

const CompanyStatus = () => {
  return (
    <div className="w-full py-10 sm:py-18.5 flex bg-dark-green relative overflow-hidden">
      <Image
        src={"/images/webp/ownership-layer1.webp"}
        height={259}
        width={154}
        alt="layer1"
        className="absolute right-0 object-contain object-center h-60 sm:h-90 w-36 sm:w-50 top-2"
      />
      <Image
        src={"/images/webp/ownership-layer2.webp"}
        height={259}
        width={154}
        alt="layer1"
        className="absolute left-0 object-contain object-center h-60 sm:h-90 w-36 sm:w-50 bottom-0"
      />
      <div className="max-w-285 w-full mx-auto px-4 xl:px-0 flex flex-col gap-6 sm:gap-15 text-whitee">
        <div className="flex flex-col lg:flex-row w-full justify-between gap-4 lg:gap-6">
          <div className="flex flex-col gap-3 md:gap-6">
            <div className="flex flex-col gap-2 md:gap-3">
              <Title
                spanClassName={"bg-whitee"}
                text={"Public Company Status"}
                className={"text-whitee text-xs"}
              />
              <Heading
                h2Text1={"Culture-Led Leadership"}
                h2ClassName={"text-3xl sm:text-4xl lg:text-5xl leading-120"}
              />
            </div>
            <Button text={"View Investor Information"} variant={"outline"} />
          </div>
          <p className="max-w-full lg:max-w-121.25 w-full leading-160 font-poppins text-sm sm:text-base">
            Captiva Verde operates with full transparency as a publicly traded
            company on the Canadian Securities Exchange and U.S. OTC Markets.
            Our commitment to Indigenous nations is matched by a duty to our
            investors and partners to build sustainable, high-impact projects
            that generate measurable returns.
          </p>
        </div>
        <Image
          src={"/images/webp/investor-chart.webp"}
          height={267}
          width={1139}
          className="rounded-xl w-full h-auto"
          alt="investor-chart"
        />
      </div>
    </div>
  );
};

export default CompanyStatus;
