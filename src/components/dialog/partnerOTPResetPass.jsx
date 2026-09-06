import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./../ui/dialog";
import Link from "next/link";
import { Check, LockKeyhole, Save, X } from "lucide-react";
import { InputOTPComponent } from "../ui/otp";
import LoginScreenImage from "../loginScreenImage";

const PartnerOTPResetPass = ({ isOpen, setIsOpen, handleNextDialog }) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="max-w-5xl w-full p-0 overflow-hidden">
        <DialogHeader className="hidden"></DialogHeader>
        {/* <DialogTitle className="hidden"></DialogTitle> */}
        <div className=" w-full h-full grid grid-cols-1 lg:grid-cols-2 ">
          <LoginScreenImage />
          <div className="w-full p-4 h-full flex flex-col items-center justify-center gap-3">
            <X
              onClick={() => setIsOpen(false)}
              className=" absolute top-4 right-4 cursor-pointer"
            />
            <img src="./user-login.svg" className=" size-32 mx-auto" alt="" />
            <DialogTitle className="text-center text-3xl flex items-center gap-2 font-semibold">
              <p>Enter OTP</p>
              <LockKeyhole className=" text-primary-red" />
            </DialogTitle>
            <p className="text-center">A 4 digit code has been sent to you</p>
            <div className=" max-w-80 flex flex-col mx-auto items-center gap-2">
              <InputOTPComponent />
              <div
                onClick={() => {
                  setIsOpen(false);
                  handleNextDialog(true);
                }}
                className="cursor-pointer w-full bg-primary-red text-white text-center font-semibold flex gap-2 items-center justify-center py-2 px-3 rounded-md"
              >
                <p>Verify OTP</p>
                <Check size={20} />
              </div>
            </div>
            <p>
              Request code again
              <span className=" text-primary-red"> 00:59s</span>
            </p>
            <div className=" flex items-center gap-2">
              <div className=" w-full h-0.5 bg-gray-200"></div>
              <p>or</p>
              <div className=" w-full h-0.5 bg-gray-200"></div>
            </div>
            <p className=" text-center text-sm">
              Edit phone number{" "}
              <span className=" text-primary-red">+91-9012345678</span>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PartnerOTPResetPass;
