import Image from "next/image";
import Heading from "./common/Heading";
import Icons from "./common/Icons";
import Title from "./common/Title";
import { ADVISORY_DATA } from "./utils/helper";

const AdvisoryBoard = () => {
  return (
    <div className="max-w-285 w-full mx-auto mt-16 sm:mt-24 lg:mt-35 px-4 xl:px-0 flex flex-col lg:flex-row justify-between gap-8 lg:gap-6">
      <div className="flex flex-col gap-3 w-full">
        <Title
          text={"Advisory Board Highlights"}
          spanClassName={"bg-dark-green"}
          className={"text-dark-green font-medium"}
        />
        <div className="flex flex-col gap-4">
          <Heading
            h2Text1={"Leading with Experience, Culture & Vision"}
            h2ClassName={"text-blacky text-3xl sm:text-4xl lg:text-5xl"}
          />
          <p className="text-brown leading-160 font-poppins text-sm sm:text-base">
            Captiva and MDC are guided by Indigenous elders, economic leaders,
            and global innovators in defense, infrastructure, and community
            development.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {ADVISORY_DATA.map((item, index) => (
            <div key={index} className="flex gap-3">
              <Icons icon={"tickMark"} />
              <p className="text-blacky font-medium leading-160 font-poppins text-sm sm:text-base">
                {item.name}
                <span className="font-normal text-brown">
                  {item.profession}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <Image
        src={"/images/webp/advisory-board.webp"}
        width={550}
        height={581}
        alt="advisory"
        className="w-full lg:w-137.5 h-72 sm:h-96 lg:h-145.25 object-cover object-center rounded-xl border border-dark-green/10"
      />
    </div>
  );
};

export default AdvisoryBoard;
