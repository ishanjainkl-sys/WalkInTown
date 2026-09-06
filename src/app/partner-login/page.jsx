"use client";
import CreateAccountThankYou from "@/components/dialog/createAccountThankyouDialog";
import PasswordChanged from "@/components/dialog/partnerChangePassOTP";
import PartnerCreateAccount from "@/components/dialog/partnerCreateAccount";
import PartnerOTPCreateAccount from "@/components/dialog/partnerOTP";
import PartnerOTPResetPass from "@/components/dialog/partnerOTPResetPass";
import PartnerResetPass from "@/components/dialog/partnerResetPass";
import LoginScreenImage from "@/components/loginScreenImage";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Page = () => {
  const [isPartnerReset, setIsPartnerPass] = useState(false);
  const [isPartnerOTPCreateAccount, setIspartnerOTPCreateAccount] =
    useState(false);
  const [isPartnerCreateAccount, setIsPartnerCreateAccount] = useState(false);
  const [isCreateAccountThankYou, setIsCreateAccountThankYou] = useState(false);
  const [isPartnerOTPReset, setIsPartnerOTPReset] = useState(false);
  const [isPassChanged, setIsPassChanged] = useState(false);

  const userNameRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const router = useRouter();
  function handleLogin() {
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    if (userName && password) {
      router.push("/vendor-dashbord");
    } else {
      toast.error("Please fill all the mendatory details");
    }
  }
  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
      <PartnerResetPass
        isOpen={isPartnerReset}
        setIsOpen={setIsPartnerPass}
        handleNext={setIsPassChanged}
      />
      <PartnerOTPCreateAccount
        isOpen={isPartnerOTPCreateAccount}
        setIsOpen={setIspartnerOTPCreateAccount}
        handleNextDialog={setIsCreateAccountThankYou}
      />

      <PartnerOTPResetPass
        isOpen={isPartnerOTPReset}
        setIsOpen={setIsPartnerOTPReset}
        handleNextDialog={setIsPartnerPass}
      />

      <PartnerCreateAccount
        isOpen={isPartnerCreateAccount}
        setIsOpen={setIsPartnerCreateAccount}
        handleOTPDialog={setIspartnerOTPCreateAccount}
      />
      <CreateAccountThankYou
        isOpen={isCreateAccountThankYou}
        setIsOpen={setIsCreateAccountThankYou}
      />

      <PasswordChanged isOpen={isPassChanged} setIsOpen={setIsPassChanged} />

      <div className=" flex items-center h-screen">
        <LoginScreenImage />
        <div className=" w-full">
          <div
            className={
              "flex flex-col gap-2 items-center text-center sm:text-left"
            }
          >
            {/* <X onClick={() => setIsOpen(false)} className=' absolute top-4 right-4 cursor-pointer' /> */}
            <img src="./user-login.svg" className=" size-32 mx-auto" alt="" />
            <div className=" flex items-center gap-2">
              <p className="text-center text-3xl font-semibold">
                Log In to WalkinTown{" "}
              </p>
              <img src="./shop.svg" className=" size-8" />
            </div>
            <p className=" -mt-2 mb-2 text-center">Please login to continue</p>
            <div className=" max-w-96 flex flex-col mx-auto items-center gap-4">
              <input
                type="text"
                placeholder="User Id"
                ref={userNameRef}
                className=" w-full border py-2 px-3 text-gray-700 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                ref={passwordRef}
                className=" w-full border py-2 px-3 text-gray-700 rounded-md"
              />
              <div className=" w-full flex-col md:flex-row flex md:items-center gap-2 md:gap-4 justify-center">
                <div className=" flex items-center gap-2">
                  <input type="checkbox" className=" size-4" />
                  <p>Remember Password</p>
                </div>
                <p
                  onClick={() => setIsPartnerOTPReset(true)}
                  className=" cursor-pointer mr-auto md:ml-auto text-primary-red"
                >
                  Forgot Password ?
                </p>
              </div>
              <div
                onClick={handleLogin}
                className="cursor-pointer flex items-center justify-center gap-2 w-full bg-primary-red text-white text-center font-semibold py-2 px-3 rounded-md"
              >
                <p>Login</p>
                <LogIn size={20} />
              </div>
            </div>

            <div className=" flex max-w-56 mx-auto w-full my-6 items-center gap-2">
              <div className=" w-full h-0.5 bg-gray-200"></div>
              <p>or</p>
              <div className=" w-full h-0.5 bg-gray-200"></div>
            </div>
            <p>
              Don’t have an account ? 
              <span
                onClick={() => setIsPartnerCreateAccount(true)}
                className=" cursor-pointer text-primary-red"
              >
                 Create Account
              </span>
            </p>
            <p className=" mx-auto max-w-xl text-gray-600 text-center text-sm">
              By proceeding, you agree to WalkIn Town{" "}
              <span className=" text-primary-red">Terms of Service</span> and
              acknowledge WalkIn Town{" "}
              <span className=" text-primary-red">Privacy Policy.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
