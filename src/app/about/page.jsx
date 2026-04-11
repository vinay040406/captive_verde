import AdvisoryBoard from "@/components/AdvisoryBoard";
import CompanyStatus from "@/components/CompanyStatus";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import OwnerShip from "@/components/OwnerShip";
import Regenerative from "@/components/Regenerative";
import SetsUp from "@/components/SetsUp";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <MissionVision />
      <OwnerShip />
      <CompanyStatus />
      <AdvisoryBoard />
      <SetsUp />
      <Regenerative />
    </div>
  );
};

export default page;
