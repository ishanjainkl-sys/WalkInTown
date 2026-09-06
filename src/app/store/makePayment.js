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

const MakePayment = () => {
  return (
    <div>
      <DialogDemo />
    </div>
  );
};

export default MakePayment;

function DialogDemo() {
  const showCloseButton = true;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="py-2 cursor-pointer px-3 border border-primary-red flex gap-1 items-center rounded-md text-primary-red">
          <p>Make Payment</p>
          <img src="./payment.svg" alt="" />
        </div>
      </DialogTrigger>
      <DialogContent showCloseButton={showCloseButton} className="sm:max-w-3xl">
        <DialogTitle></DialogTitle>
        <div className=" py-8">
          <p className=" mx-auto max-w-md text-center w-full text-xl font-semibold">
            To get the additional{" "}
            <span className=" text-primary-red">WalkInTown</span> Discount and start
            saving today!
          </p>
          <div className=" w-full flex items-center flex-col md:flex-row gap-4">
            <img
              src="./phone.png"
              className=" overflow-hidden w-full h-auto"
              alt="phone"
            />
            <div className=" max-w-60 w-full  flex flex-col items-center justify-center gap-4">
              <p className="  font-semibold text-xl text-primary-red">
                Download the app now.
              </p>
              <p className=" text-center">
                You've received a message with a link to download our app.
                Simply click the link to install and get started!
              </p>
              <img src="./downloard-apk.png" className="" alt="phone" />
            </div>
          </div>
        </div>

        <DialogFooter>
          {/* <Button type="submit">Save changes</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
