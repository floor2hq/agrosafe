import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function FarmCard({ farmId }: { farmId: string }) {
  return (
    <main className="py-8">
      <div className="container px-4 max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Farm {farmId}</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              alt="Farm Image"
              className="aspect-[3/2] object-cover w-full rounded-lg overflow-hidden"
              height="200"
              src="/farm.jpeg"
              width="300"
            />
            <ul className="text-base mt-4">
              <li className="text-green-500 font-medium">
                <span className="font-semibold text-black">Farm Health: </span>
                Excellent
              </li>
              <li>
                <span className="font-semibold">Last Harvested: </span>January
                2024
              </li>
              <li>
                <span className="font-semibold">Production Rate: </span> 500
                tons/year
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button size="sm">
              <Link href={`/farmer/farms/${farmId}`}>View Details</Link>
            </Button>
            
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
