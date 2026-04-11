import AdvisoryBoard from "@/components/AdvisoryBoard";
import CompanyStatus from "@/components/CompanyStatus";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import OwnerShip from "@/components/OwnerShip";
import Regenerative from "@/components/Regenerative";
import SetsUp from "@/components/SetsUp";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col relative">
      <Hero />
      <MissionVision />
      <OwnerShip />
      <CompanyStatus />
      <AdvisoryBoard />
      <SetsUp />
      <Regenerative />
      <Image
        src={"/images/webp/layer3.webp"}
        width={244}
        height={351}
        alt="layer3"
        className="absolute bottom-[5%] -left-[3%] -z-1"
      />
    </div>
  );
};

export default page;
