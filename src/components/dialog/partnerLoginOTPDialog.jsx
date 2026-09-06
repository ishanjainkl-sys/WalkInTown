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
import { CircleUserRound, X } from "lucide-react";
import Link from "next/link";
import { InputOTPComponent } from "../ui/otp";
import { useRouter } from "next/navigation";

const PartnerLoginOTPDialog = ({
  isOpen,
  setIsOpen,
  handleOTPDialog,
  setUserLogin,
}) => {
  const router = useRouter();
  function handleVerifyOTP() {
    window.localStorage.setItem("token", true);
    router.push("/store");
  }
  return (
    <Dialog open={isOpen}>
      <DialogContent className=" max-w-5xl p-0 max-h-[30rem]  overflow-hidden">
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
              onClick={() => setIsOpen(false)}
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
            <DialogDescription className="text-center">
              A 4 digit code has been sent to you
            </DialogDescription>
            <div className=" w-full flex flex-col mx-auto items-center gap-2">
              {/* <div className=' w-full flex items-center justify-center gap-3' >
                                {
                                    [1, 2, 3, 4].map((data) => {
                                        return (
                                            <div key={data} className=' size-12 flex items-center justify-center text-2xl rounded-lg border border-primary-red' >0</div>
                                        )
                                    })
                                }
                            </div> */}
              <InputOTPComponent />
              <div
                onClick={() => handleVerifyOTP()}
                className="cursor-pointer w-full bg-primary-red text-white text-center font-semibold py-2 px-3 rounded-md"
              >
                Verify OTP
              </div>
            </div>
            <div className=" flex flex-col mx-auto items-center gap-0">
              <p>
                Request code again
                <span className=" text-primary-red"> 00:59s</span>
              </p>
              <div className=" flex w-full items-center gap-2">
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
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PartnerLoginOTPDialog;
