"use client";
import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import { Label } from "@/components/ui/label";
export default function FarmAnalytics() {
  return (
    <Card className="col-span-full md:col-span-2 lg:col-span-3">
      <CardHeader>
        <CardTitle>Farm and Market Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-2xl col-span-3 font-medium">
            Farm Health (Jan)
            <HealthLineChart className="w-full aspect-[4] mt-4" />
          </div>
          <div className="text-2xl col-span-3 font-medium">
            Crop Price (Jan)
            <PriceLineChart className="w-full aspect-[4] mt-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function HealthLineChart(
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement>
) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: 1, y: 80 },
              { x: 2, y: 85 },
              { x: 3, y: 90 },
              { x: 4, y: 92 },
              { x: 5, y: 88 },
              { x: 6, y: 85 },
              { x: 7, y: 82 },
              { x: 8, y: 80 },
              { x: 9, y: 78 },
              { x: 10, y: 75 },
              { x: 11, y: 72 },
              { x: 12, y: 70 },
              { x: 13, y: 68 },
              { x: 14, y: 65 },
              { x: 15, y: 62 },
              { x: 16, y: 60 },
              { x: 17, y: 58 },
              { x: 18, y: 55 },
              { x: 19, y: 52 },
              { x: 20, y: 50 },
              { x: 21, y: 52 },
              { x: 22, y: 55 },
              { x: 23, y: 58 },
              { x: 24, y: 60 },
              { x: 25, y: 62 },
              { x: 26, y: 65 },
              { x: 27, y: 68 },
              { x: 28, y: 70 },
              { x: 29, y: 72 },
              { x: 30, y: 75 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 60, left: 60 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          max: 100,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          legend: "Days",
          legendPosition: "middle",
          legendOffset: 40,
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          legend: "Average Health (%)",
          legendPosition: "middle",
          legendOffset: -40,
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#4CBB17"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        enableGridX={false}
        curve="monotoneX"
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
function PriceLineChart(
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement>
) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: 1, y: 72 },
              { x: 2, y: 96 },
              { x: 3, y: 109 },
              { x: 4, y: 104 },
              { x: 5, y: 100 },
              { x: 6, y: 102 },
              { x: 7, y: 100 },
              { x: 8, y: 89 },
              { x: 9, y: 88 },
              { x: 10, y: 87 },
              { x: 11, y: 86 },
              { x: 12, y: 90 },
              { x: 13, y: 92 },
              { x: 14, y: 82 },
              { x: 15, y: 80 },
              { x: 16, y: 79 },
              { x: 17, y: 85 },
              { x: 18, y: 87 },
              { x: 19, y: 90 },
              { x: 20, y: 87 },
              { x: 21, y: 85 },
              { x: 22, y: 88 },
              { x: 23, y: 89 },
              { x: 24, y: 92 },
              { x: 25, y: 90 },
              { x: 26, y: 87 },
              { x: 27, y: 85 },
              { x: 28, y: 82 },
              { x: 29, y: 80 },
              { x: 30, y: 80 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 60, left: 60 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 20,
          max: 120,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          legend: "Days",
          legendPosition: "middle",
          legendOffset: 40,
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          legend: "Price(INR)",
          legendPosition: "middle",
          legendOffset: -40,
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        enableGridX={false}
        curve="monotoneX"
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
