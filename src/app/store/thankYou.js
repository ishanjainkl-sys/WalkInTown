import React from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, MessageSquare } from "lucide-react";
import { X } from "lucide";

const ThankYou = () => {
  return (
    <div>
      <DialogDemo />
    </div>
  );
};

export default ThankYou;

function DialogDemo() {
  const showCloseButton = true;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" border border-primary-red px-4 py-2 w-fit ml-auto flex gap-1 items-center justify-center font-medium rounded-md text-white bg-primary-red">
          Submit Review <Check size={20} />
        </div>
      </DialogTrigger>
      <DialogContent showCloseButton={true} className=" p-0 overflow-hidden">
        <DialogHeader className="">
          <DialogTitle className="hidden"></DialogTitle>
          <div className=' w-full h-full flex' >
            {/* <img src="./login-page-bg.png" alt="" /> */}
            <div className=' w-full h-full flex flex-col items-center justify-center gap-3' >
              {/* <X onClick={() => setIsOpen(false)} className=' absolute top-4 right-4 cursor-pointer' /> */}
              <div className=' w-full py-10 max-w-80 mx-auto p-4 flex flex-col gap-1 ' >
                <div className=' flex gap-2 items-center' >
                  <div className=' rounded-md h-1 w-full bg-primary-red' ></div>
                  <p className=' text-2xl font-semibold text-primary-red whitespace-nowrap' >Thank You</p>
                  <div className=' rounded-md h-1 w-full bg-primary-red' ></div>
                </div>
                <p className=' text-2xl font-semibold  text-primary-red whitespace-nowrap text-center' >for Reviewing Us!</p>
                <p className=' text-gray-600 text-center mt-6'> Your Feedback helps us continue to improve and provide the best experience possible.</p>
                {/* <Link href={'/vendor-dashbord'} className=' bg-primary-red px-8 w-fit mx-auto mt-12 py-3 rounded-lg font-semibold gap-2 text-white text-center flex items-center justify-center' >
                  <p>Next</p>
                  <ArrowRight size={20} />
                </Link> */}
              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
