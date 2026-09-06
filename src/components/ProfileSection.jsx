"use client";
import React, { useEffect, useState } from "react";
import TermsAndConditionVendorDetailsDialog from "./dialog/termsAndConditionVendorDetails";
import { ArrowRight } from "lucide-react";
import StoreImageSelector from "./storeImageSelector";
import { useRouter } from "next/navigation";
import toast, { ToastBar, Toaster } from "react-hot-toast";

export default function ProfileSection() {
  const [isChecked, setIsChecked] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [whatsAppNumber, setWhatsAppNumber] = useState("");
  const router = useRouter();
  function handleNext() {
    if (!name || !email || !mobileNumber || !whatsAppNumber || !isChecked) {
      toast.error("Please fill all the mendatory details");
      return;
    }

    router.push("/vendor-dashbord?form=2");
  }

  return (
    <div className=" max-w-6xl px-4 mx-auto w-full flex flex-col gap-4">
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className=" w-fit mx-auto flex flex-col gap-4">
        <p className=" text-3xl md:text-4xl font-medium">Vendor Details</p>
        <p className=" text-gray-600">
          Fill the Details to gain Costumer’s trust
        </p>
      </div>
      <div className=" flex flex-col h-full gap-16 mt-6 lg:mt-0 md:gap-20 lg:flex-row ">
        <div className="  h-full w-full max-w-56  flex md:justify-end md:items-end  mt-auto ">
          <StoreImageSelector />
        </div>
        <div className=" flex flex-col w-full gap-6 md:gap-12">
          <div className=" flex flex-col gap-3 w-full">
            <div className=" flex flex-col w-full gap-2">
              <div className=" w-full flex flex-col md:flex-row gap-2">
                <div className=" w-full flex flex-col gap-1">
                  <p className={`font-semibold`}>
                    Name <span className=" text-primary-red">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className=" w-full text-sm rounded-md p-2 border "
                  />
                </div>
                <div className=" w-full flex flex-col gap-1">
                  <p className={`font-semibold`}>
                    Email / UserID <span className=" text-primary-red">*</span>
                  </p>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className=" w-full text-sm rounded-md p-2 border "
                  />
                </div>
              </div>
              <PhoneNumber
                mobileNumber={mobileNumber}
                setMobileNumber={setMobileNumber}
                whatsAppNumber={whatsAppNumber}
                setWhatsAppNumber={setWhatsAppNumber}
              />
            </div>
            <div className=" mt-3">
              <TermsAndConditionVendorDetailsDialog
                isChecked={isChecked}
                setIsChecked={setIsChecked}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full px-4 max-w-6xl mx-auto justify-end flex gap-4 items-center">
        <div
          onClick={handleNext}
          className=" w-fit cursor-pointer rounded-md text-white flex items-center gap-2 bg-primary-red px-4 py-2"
        >
          <p className=" font-semibold">Next</p>
          <ArrowRight color="white" size={20} />
        </div>
      </div>
    </div>
  );
}

function InputFildNumber() {
  return (
    <div className=" w-full flex flex-col gap-1">
      <div className=" flex mt-4 items-center gap-6">
        <div className=" flex gap-2 items-center">
          <input type="checkbox" className=" size-4" disabled />
          <p className=" text-gray-600 ">Active</p>
        </div>
        <div className=" flex gap-2 items-center">
          <input checked={true} type="checkbox" className=" size-4" disabled />
          <p className=" text-gray-600 ">Verified</p>
        </div>
      </div>
    </div>
  );
}

function PhoneNumber({
  mobileNumber,
  setMobileNumber,
  whatsAppNumber,
  setWhatsAppNumber,
}) {
  const [isSameMobileNumber, setIsSameMobileNumber] = useState(false);
  useEffect(() => {
    if (isSameMobileNumber) {
      setWhatsAppNumber(mobileNumber);
    }
  }, [isSameMobileNumber]);
  return (
    <div className=" col-span-2 gap-2 flex w-full flex-col md:flex-row">
      <div className=" flex flex-col w-full gap-1">
        <p className={`font-semibold`}>
          Phone Number
          <span className=" text-primary-red">*</span>
        </p>
        <input
          type="number"
          placeholder="Phone Number"
          className=" w-full text-sm rounded-md p-2 border "
          value={mobileNumber}
          onChange={(e) => {
            const value = e.target.value;
            if (value.length <= 10) {
              setMobileNumber(value);
            }
          }}
        />
        <InputFildNumber />
      </div>
      <div className=" w-full flex flex-col gap-1">
        <p className={`font-semibold`}>
          WhatsApp Number <span className=" text-primary-red">*</span>
        </p>
        <input
          type="number"
          disabled={isSameMobileNumber}
          placeholder="WhatsApp Number"
          className=" w-full text-sm rounded-md p-2 border "
          value={isSameMobileNumber ? mobileNumber : whatsAppNumber}
          onChange={(e) => {
            const value = e.target.value;
            if (value.length <= 10) {
              setWhatsAppNumber(value);
            }
          }}
        />

        <div className=" flex gap-2 mt-4 items-center">
          <input
            onClick={() => setIsSameMobileNumber((prev) => !prev)}
            type="checkbox"
            className=" size-4"
          ></input>
          <p className=" text-gray-600 text-sm">Same as phone number</p>
        </div>
      </div>
    </div>
  );
}
