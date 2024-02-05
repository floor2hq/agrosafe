import React from "react";
import FarmCard from "@/components/component/farmer/FarmCard";
import FarmerHeader from "@/components/component/farmer/FarmerHeader";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function FarmsPage() {
  const farmIds = ["1", "2", "3"];
  return (
    <>
      <FarmerHeader />
      <div className="flex justify-end p-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">+ Add farm </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Farm</DialogTitle>
              <DialogDescription>Add a farm to your profile.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Location
                </Label>
                <Input
                  id="location"
                  placeholder="City, State"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Size (m²)
                </Label>
                <Input
                  id="size"
                  placeholder="Size of farm in m²"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Crop Type
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Wheat</SelectItem>
                      <SelectItem value="banana">Maize</SelectItem>
                      <SelectItem value="blueberry">Tomato</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {farmIds.map((farmId) => (
          <FarmCard key={farmId} farmId={farmId} />
        ))}
      </div>
    </>
  );
}

export default FarmsPage;
