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
import { Save, SendHorizontal, X } from "lucide-react";
import LoginScreenImage from "../loginScreenImage";
import toast from "react-hot-toast";

const PartnerCreateAccount = ({ isOpen, setIsOpen, handleOTPDialog }) => {
  const userIdRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  function handleSubmit() {
    const userId = userIdRef.current.value;
    const password = passwordRef.current.value;

    if (userId && password && phoneNumber) {
      setIsOpen(false);
      handleOTPDialog(true);
    } else {
      toast.error("Please fill all the mendatory details");
    }
  }
  return (
    <Dialog open={isOpen}>
      <DialogContent className="max-w-6xl w-full p-0 overflow-hidden">
        <DialogHeader className="hidden"></DialogHeader>
        <div className=" w-full h-full grid grid-cols-1 lg:grid-cols-2 ">
          <LoginScreenImage />
          <div className=" mx-auto p-4 w-full h-fit my-auto flex flex-col items-center justify-center gap-3">
            <X
              onClick={() => setIsOpen(false)}
              className=" absolute top-4 right-4 cursor-pointer"
            />
            <img src="./user-login.svg" className=" size-32 mx-auto" alt="" />
            <DialogTitle className="text-center text-3xl flex items-center gap-2 font-semibold">
              <p>Create Account for WalkInTown</p>
              <img src="./shop.svg" className=" size-8" />
            </DialogTitle>
            <DialogDescription className="text-center">
              Please enter your Email id/User Id Or Phone numbers to receive the
              verification code.
            </DialogDescription>
            <div className=" max-w-80 flex flex-col mx-auto items-center gap-2">
              <input
                type="text"
                placeholder="User Id"
                ref={userIdRef}
                className=" w-full border py-2 px-3 text-gray-700 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                ref={passwordRef}
                className=" w-full border py-2 px-3 text-gray-700 rounded-md"
              />
              <input
                type="number"
                value={phoneNumber}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 10) {
                    setPhoneNumber(value);
                  }
                }}
                placeholder="Phone Number"
                className=" w-full border py-2 px-3 text-gray-700 rounded-md"
              />
              <div
                onClick={handleSubmit}
                className="cursor-pointer w-full bg-primary-red text-white text-center font-semibold flex items-center gap-2 justify-center py-2 px-3 rounded-md"
              >
                <p>Send OTP</p>
                <SendHorizontal size={18} />
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <div className=" w-full h-0.5 bg-gray-200"></div>
              <p>or</p>
              <div className=" w-full h-0.5 bg-gray-200"></div>
            </div>
            <p>
              Already have an account ?
              <span
                onClick={() => setIsOpen(false)}
                className=" cursor-pointer text-primary-red"
              >
                 Log In{" "}
              </span>
            </p>
            <p className=" max-w-xl mx-auto text-center text-sm">
              By proceeding, you agree to WalkIn Town{" "}
              <span className=" text-primary-red">Terms of Service</span> and
              acknowledge WalkIn Town{" "}
              <span className=" text-primary-red">Privacy Policy.</span>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PartnerCreateAccount;
