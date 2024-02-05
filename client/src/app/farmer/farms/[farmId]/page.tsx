import FarmAnalytics from "@/components/component/farmer/FarmAnalytics";
import FarmerHeader from "@/components/component/farmer/FarmerHeader";
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type params = {
  farmId: string;
};

export default function FarmDetails({ params }: { params: params }) {
  return (
    <>
      <FarmerHeader />
      <div className="flex gap-10 w-full">
        <div className="w-[45%] flex justify-center items-center">
          <Image
            alt="Farm Image"
            className="m-4 object-cover w-full rounded-lg overflow-hidden"
            height="200"
            src="/farm.jpeg"
            width={350}
          />
        </div>
        <div className="flex flex-col gap-4 w-[50%]">
          <div className="text-3xl font-bold pt-4">Farm {params.farmId}</div>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">
                Farm Health{" "}
                <span className="text-2xl text-green-500 ml-4">Healthy</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between text-lg font-medium">
                  <div>Soil moisture</div>
                  <Progress className="w-1/2 ml-auto mr-4" value={70} />
                  <span className="font-semibold">70%</span>
                </div>
                <div className="flex items-center text-lg font-medium">
                  <div>{`pH Level`}</div>
                  <Progress className="w-1/2 ml-auto mr-4" value={65} />
                  <span className="font-semibold mr-3">6.5</span>
                </div>
                <div className="flex items-center justify-between text-lg font-medium">
                  <div>Humidity</div>
                  <Progress className="w-1/2 ml-auto mr-4" value={65} />
                  <span className="font-semibold">65%</span>
                </div>
                <div className="flex items-center justify-between text-lg font-medium">
                  <div>Nutrients</div>
                  <Progress className="w-1/2 ml-auto mr-4" value={90} />
                  <span className="font-semibold">High</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">
                Crop Price
                <span className="text-2xl text-amber-500 ml-4">Fair</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between text-lg">
                  <div className="font-medium">Wheat</div>
                  <div className="font-semibold">₹80/kg</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">
                Expected Harvest
                <span className="text-2xl text-green-500 ml-4">Soon</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between text-lg">
                  <div className="font-medium">Wheat</div>
                  <div className="font-semibold">March 2024</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <FarmAnalytics />;
    </>
  );
}
