"use client";
import React, { useEffect } from "react";
import PartnerLoginDialog from "./dialog/partnerLoginDialog";
import PartnerLoginOTPDialog from "./dialog/partnerLoginOTPDialog";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const UserLoginProvider = ({ children, className }) => {
  const [isPartnerLogin, setIsPartnerLogin] = React.useState(false);
  const [isPartnerOTP, setIsPartnerOTP] = React.useState(false);
  const router = useRouter();
  function handleUserOpenDialog() {
    const localStorage = window.localStorage;
    const token = localStorage.getItem("token");
    if (token && !isPartnerLogin) {
      // navigate to store page
      console.log(token);
      router.push("/store");
    } else {
      setIsPartnerLogin(true);
    }
  }
  return (
    <>
      <PartnerLoginDialog
        isOpen={isPartnerLogin}
        setIsOpen={setIsPartnerLogin}
        handleOTPDialog={setIsPartnerOTP}
      />
      <PartnerLoginOTPDialog
        isOpen={isPartnerOTP}
        setIsOpen={setIsPartnerOTP}
      />
      <div
        onClick={() => handleUserOpenDialog()}
        className={cn("cursor-pointer", className)}
      >
        {children}
      </div>
    </>
  );
};

export default UserLoginProvider;
