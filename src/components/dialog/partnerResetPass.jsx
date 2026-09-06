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
import { LockKeyhole, Save, X } from "lucide-react";
import LoginScreenImage from "../loginScreenImage";

const PartnerResetPass = ({ isOpen, setIsOpen, handleNext }) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="max-w-5xl w-full p-0 overflow-hidden">
        <DialogHeader className="hidden"></DialogHeader>
        <div className=" w-full h-full grid grid-cols-1 lg:grid-cols-2 ">
          <LoginScreenImage />
          <div className=" w-full mx-auto h-full p-4 flex flex-col items-center justify-center gap-3">
            <X
              onClick={() => setIsOpen(false)}
              className=" absolute top-4 right-4 cursor-pointer"
            />
            <img src="./user-login.svg" className=" size-32 mx-auto" alt="" />
            <DialogTitle className="text-center text-3xl flex items-center gap-2 font-semibold">
              <p>Reset Password</p>
              <LockKeyhole className=" text-primary-red" />
            </DialogTitle>
            <DialogDescription className="text-center">
              Create a new password.
            </DialogDescription>
            <div className=" max-w-80 flex flex-col mx-auto items-center gap-2">
              <input
                type="password"
                placeholder="New Password"
                className=" w-full border py-2 px-3 text-gray-700 rounded-md"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className=" w-full border py-2 px-3 text-gray-700 rounded-md"
              />
              <div
                onClick={() => {
                  setIsOpen(false);
                  handleNext(true);
                }}
                className="cursor-pointer w-full bg-primary-red text-white flex gap-2 items-center justify-center text-center font-semibold py-2 px-3 rounded-md"
              >
                <p>Save</p>
                <Save size={20} />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PartnerResetPass;
