import React from "react";
import CropCard from "@/components/component/farmer/CropCard";
import FarmerHeader from "@/components/component/farmer/FarmerHeader";

export default function Surplus() {
  return (
    <>
      <FarmerHeader />
      <div className="w-full flex gap-4 flex-wrap">
        <CropCard />
        <CropCard />
        <CropCard />
        <CropCard />
        <CropCard />
        <CropCard />
        <CropCard />
      </div>
    </>
  );
}
