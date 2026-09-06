import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageSquare, X } from "lucide-react";
import ThankYou from "./thankYou";

const ReviewUs = () => {
  return (
    <div>
      <DialogDemo />
    </div>
  );
};

export default ReviewUs;

function DialogDemo() {
  const showCloseButton = false;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="border border-primary-red flex gap-1  md:self-end min-w-40 items-center  justify-center cursor-pointer shrink-0 self-start text-primary-red px-2 py-2 rounded-md">
          <p className="whitespace-nowrap">Review Us</p>
          <img src="./red-plus.svg" alt="" />
        </div>
      </DialogTrigger>
      <DialogContent showCloseButton={showCloseButton} className="sm:max-w-xl">
        <DialogTitle></DialogTitle>
        <div className=" flex flex-col gap-2  items-center justify-center py-6">
          <p className=" font-semibold text-lg">Rate this store</p>
          <p className=" text-gray-600">Please rate your experience with us.</p>
          <p className=" text-green-500 text-lg">Excellent</p>
          <div className=" flex gap-6 items-center justify-center">
            <div className=" flex flex-col items-center justify-center gap-1">
              <img src="./star.png" className=" size-7" />
              <p className=" text-gray-600 text-xs">Poor</p>
            </div>
            <div className=" flex flex-col items-center justify-center gap-1">
              <img src="./star.png" className=" size-7" />
              <p className=" text-gray-600 text-xs">Average</p>
            </div>
            <div className=" flex flex-col items-center justify-center gap-1">
              <img src="./star.png" className=" size-7" />
              <p className=" text-gray-600 text-xs">Good</p>
            </div>
            <div className=" flex flex-col items-center justify-center gap-1">
              <img src="./star.png" className=" size-7" />
              <p className=" text-gray-600 text-xs">Very Good</p>
            </div>
            <div className=" flex flex-col items-center justify-center gap-1">
              <img src="./star.png" className=" size-7" />
              <p className=" text-gray-600 text-xs">Excilent</p>
            </div>
          </div>

          <textarea
            rows={7}
            className=" border-gray-400 border rounded-2xl mt-3 w-full max-w-96 placeholder:text-gray-400 p-2"
            placeholder=" Write a Review"
          />
        </div>

        <DialogFooter
          className={"w-full flex gap-4 items-center justify-center"}
        >
          <DialogClose>
            {" "}
            <div className=" border border-primary-red px-3 py-2 flex gap-1 items-center justify-center font-medium rounded-md bg-secondary-red text-primary-red">
              Cancel <X size={20} />
            </div>
          </DialogClose>
          <ThankYou />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
