import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./../ui/dialog";
import { CircleUserRound, X } from "lucide-react";

const PartnerLoginDialog = ({
  isOpen,
  setIsOpen,
  handleOTPDialog,
  setUserLogin,
}) => {
  function handleOTP() {
    setIsOpen(false);
    handleOTPDialog(true);
  }

  function handleDialogClose() {
    console.log("clickedddd");
    setIsOpen(false);
    console.log(isOpen);
  }
  return (
    <Dialog open={isOpen}>
      <DialogContent className=" max-w-5xl p-0 max-h-[30rem] overflow-hidden">
        <DialogHeader
          className={
            "flex md:flex-row overflow-y-auto p-0 gap-3  text-center sm:text-left"
          }
        >
          <div className=" hidden md:block md:w-1/2 shrink-0 h-full  ">
            <img
              src="./vendor-auth.png"
              className=" w-full h-full object-cover "
              alt=""
            />
          </div>
          <div className="flex flex-col py-4 px-4 justify-center w-full md:w-1/2 max-w-96 mx-auto  shrink-0 space-y-3 items-center text-center sm:text-left">
            <X
              onClick={() => handleDialogClose()}
              className=" absolute top-4 right-4 cursor-pointer"
            />
            <CircleUserRound
              className=" text-primary-red size-16  "
              strokeWidth={1}
            />
            <DialogTitle className="text-center">Welcome to</DialogTitle>
            <p className=" text-5xl text-red-800  font-semibold">WalkinTown</p>
            <div className=" flex w-full items-center gap-2">
              <div className=" w-full h-0.5 bg-primary-red"></div>
              <p className=" whitespace-nowrap">
                Let’s get your number Verified.
              </p>
              <div className=" w-full h-0.5 bg-primary-red"></div>
            </div>
            <div className="w-full flex flex-col mx-auto gap-4">
              <p className=" text-2xl font-medium text-gray-600">
                Enter your phone number
              </p>
              <div className=" flex gap-3">
                <div className=" border text-center py-3 px-4 rounded-lg w-fit  shadow-md">
                  +91
                </div>
                <input
                  type="number"
                  placeholder="Mobile Number"
                  className=" w-full border py-2 px-3 text-gray-700 rounded-lg shadow-md"
                />
              </div>
              <p
                onClick={handleOTP}
                className="cursor-pointer w-full bg-primary-red text-white text-center font-semibold py-3 px-3 rounded-md"
              >
                Send OTP
              </p>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PartnerLoginDialog;
