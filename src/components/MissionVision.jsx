import Image from "next/image";
import Heading from "./common/Heading";
import Title from "./common/Title";
import { MISSION_VISION_DATA } from "../utils/helper";

const MissionVision = () => {
  return (
    <div className="w-full py-15 sm:py-24 lg:py-35 px-4 xl:px-0">
      <div className="max-w-285 w-full mx-auto flex flex-col gap-5 md:gap-10">
        <div className="flex flex-col gap-3">
          <Title
            text={"Our Mission & Vision"}
            className={"text-dark-green "}
            spanClassName={"bg-dark-green"}
          />
          <Heading
            h2Text1={"Empowered "}
            h2ClassName={"text-blacky text-3xl sm:text-4xl lg:text-5xl"}
            spanText={"by Culture Driven "}
            spanClassName={"text-dark-green"}
            h2Text2={"by Purpose"}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {MISSION_VISION_DATA.map((item, index) => (
            <div
              key={index}
              className="border border-blacky/12 rounded-xl p-4 sm:p-6 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-6 font-poppins">
                <Image
                  src={item.image}
                  height={236}
                  width={510}
                  alt={item.title}
                  className="object-cover object-center rounded-md h-44 sm:h-59 w-full"
                />
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl sm:text-custom-3xl font-semibold leading-100 text-dark-green">
                    {item.title}
                  </h3>
                  <p className="leading-160 text-blacky text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
