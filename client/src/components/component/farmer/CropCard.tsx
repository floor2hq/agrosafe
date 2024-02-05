import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CropCard() {
  return (
    <>
      <main className="py-8">
        <div className="container px-4 w-96">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Wheat</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div>Production This Year</div>
                  <div className="font-semibold">5000 kg</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Max Price</div>
                  <div className="font-semibold">$220/kg</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Min Price</div>
                  <div className="font-semibold">$180/kg</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Storage Capacity</div>
                  <div className="font-semibold">6000 kg</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
