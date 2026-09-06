"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./../../ui/dialog";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgePercent,
  BadgePercentIcon,
  Camera,
  CircleUser,
  Megaphone,
  BookImage,
  CalendarDays,
  CalendarDaysIcon,
  CameraIcon,
  Check,
  ChevronLeftIcon,
  ChevronRightIcon,
  CopyPlus,
  Info,
  Menu,
  Pencil,
  ScanQrCode,
  ShapesIcon,
  Square,
  X,
  Trash2,
  Image,
  Save,
  ChevronRightCircle,
  ChevronLeftCircle,
} from "lucide-react";
import WomenBox from "@/components/womenBook";
import VendorAdminNavBar from "./vendorAdminNavBar";
import TermsAndConditionVendorDetailsDialog from "../termsAndConditionVendorDetails";
import MenMenu from "../filter/men";
import WomenMenu from "../filter/women";
import MenuKids from "../filter/kid";
import BeautyMenu from "../filter/beauty";
import HomeDecoreMenu from "../filter/homeDecore";
import HomeAppliencesMenu from "../filter/homeAppliences";
import ElectronicsMenu from "../filter/electronics";
import TermsAndConditioBusinessDetailsnDialog from "../termsAndCondition";
import { CalendarForm } from "@/components/datePicker";
import BrandsShowMore from "../brandsShowMore";

const VendorEditAdminDialog = ({
  isOpen,
  setIsVendorReport,
  setIsVendorSetting,
  setIsEditVendor,
}) => {
  const [currentStep, setCurrentStep] = React.useState(1);
  useEffect(() => {
    if (isOpen) setCurrentStep(1);
  }, [isOpen]);
  return (
    <Dialog open={isOpen}>
      <DialogContent className=" p-0 max-w-7xl w-full max-h-[90vh] h-full overflow-y-auto">
        <DialogHeader
          className={
            "flex flex-col w-full border space-y-1.5 py-8 items-center text-center justify-center sm:text-left"
          }
        >
          <X
            onClick={() => setIsEditVendor(false)}
            className=" absolute top-4 right-4 cursor-pointer"
          />
          <DialogTitle className="text-center"></DialogTitle>
          <VendorAdminNavBar
            setIsVendorReport={setIsVendorReport}
            setIsVendorSetting={setIsVendorSetting}
            setIsEditVendor={setIsEditVendor}
            page={"dashbord"}
          />
          <VendorOnbordForm
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />

          {currentStep === 1 && <ProfileSection />}
          {currentStep === 2 && <ShopDetailsSection />}
          {currentStep === 3 && <OfferDetailsSection />}
          {currentStep === 4 && <PromoteMyStoreSection />}

          <VendorFooterBar
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            setIsOpen={setIsEditVendor}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default VendorEditAdminDialog;

// Step One
function ProfileSection() {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <div className=" text-left max-w-6xl px-6 mt-12 pt-6 mx-auto w-full flex flex-col gap-4">
      <div className=" flex flex-col h-full gap-12 md:flex-row ">
        <div className="  h-full flex md:justify-end md:items-end  mt-auto ">
          <VendorProfileImage />
        </div>
        <div className=" flex flex-col gap-6 md:gap-12">
          <div className=" flex flex-col gap-4">
            <p className=" text-3xl md:text-4xl font-medium">Vendor Details</p>
            <p className=" text-gray-600">
              Fill the Details to gain Costumer’s trust
            </p>
          </div>
          <div className=" flex flex-col gap-2 w-full">
            <div className=" grid grid-cols-1 sm:grid-cols-2 w-full gap-4">
              <InputFild label={"Name"} inputName={"Naveen Sharma"} />
              <InputFild
                label={"Email ID/ User ID"}
                inputName={"naveensharma@gmail.com"}
              />
              <InputFildNumber
                label={"Phone Number"}
                inputName={"91-9012345678"}
              />
              <InputFild
                label={"WhatsApp Number"}
                inputName={"91-9012345678"}
                same={true}
              />
            </div>
            <div className=" mr-auto mt-3 md:mt-6">
              <TermsAndConditionVendorDetailsDialog
                isChecked={isChecked}
                setIsChecked={setIsChecked}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputFildNumber({ label, inputName, notNsc, disable }) {
  return (
    <div className=" w-full flex flex-col gap-1">
      <p className={`${disable && " text-gray-400"} font-semibold`}>
        {label} {!notNsc && <span className=" text-primary-red">*</span>}
      </p>
      <input
        type="text"
        defaultValue={inputName}
        className=" w-full text-sm rounded-md p-2 border "
      />
      <div className=" flex mt-4 items-center gap-6">
        <div className=" flex gap-2 items-center">
          <input type="checkbox" className=" size-4"></input>
          <p className=" text-gray-600 ">Active</p>
        </div>
        <div className=" flex gap-2 items-center">
          <input type="checkbox" className=" size-4"></input>
          <p className=" text-gray-600 ">Verified</p>
        </div>
      </div>
    </div>
  );
}

//   Step Two
function ShopDetailsSection() {
  function handleApplyFilter() {}
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <div className=" text-left px-4 max-w-[96vw] pt-6 md:max-w-5xl mt-12 mx-auto w-full flex flex-col gap-4">
      <div className=" flex flex-col gap-8 md:gap-16 lg:flex-row">
        <div className=" flex md:max-w-60 md:mt-28 shrink-0 flex-col gap-12">
          <VendorProfileImage />

          <div className="flex flex-col">
            <div className=" flex flex-col gap-4">
              <p className=" text-3xl md:text-4xl font-medium">
                Product Categories
              </p>
              <p className=" text-gray-600">Select Categories for Shop</p>
            </div>
            <div className="flex w-full mt-3 overflow-x-auto py-2 [&>*]:shrink-0 md:flex-wrap gap-2">
              <MenMenu path="vendor" />
              <WomenMenu path="vendor" />
              <MenuKids path="vendor" />
              <BeautyMenu path="vendor" />
              <HomeDecoreMenu path="vendor" />

              <HomeAppliencesMenu path="vendor" />
              <ElectronicsMenu path="vendor" />
            </div>
            <p className="font-semibold mt-6 text-lg">Brands</p>
            <p className=" text-sm text-gray-600">Select your Trusted Brand</p>
            <div className="flex w-full mt-3 flex-wrap gap-2">
              {/* <div className=" py-1 px-2  bg-secondary-red font-semibold text-sm rounded-md" >Zara</div> */}
              {/* {
                  ["H&M", "Puma", "Forever 21", "Gap", "Snitch", "Levi’s", "Marks & Spencer"].map((data) => {
                    return (
                      <div key={data} className=" py-1 px-2 border border-black font-semibold text-sm rounded-md" >{data}</div>
                    )
                  })
                } */}
              {/* {
                            ["h&m", "puma", "forever", "gap", "gap"].map((data, ind) => {
                                return (
                                    // <div key={data} className=" py-1 px-2 border border-black font-semibold text-sm rounded-md" >{data}</div>
                                    <div key={ind} className=" h-8 w-auto py-1 px-2 border border-black font-semibold text-sm rounded-md" >
                                        <img key={data} className=" w-full h-full " src={`/companies-logo/${data}.png`} alt="" />
                                    </div>
                                )
                            })
                        } */}
              <SearchByBrand path="vendor" />
            </div>
            <div
              onClick={handleApplyFilter}
              className=" border border-primary-red flex gap-2 items-center justify-center duration-200 bg-primary-red px-4 py-2 rounded-md cursor-pointer text-white text-center font-semibold mt-6"
            >
              <p>Save</p>
              <Save size={20} />
            </div>{" "}
          </div>
        </div>

        <div>
          <div className=" w-fit flex flex-col gap-4">
            <p className=" text-3xl md:text-4xl font-medium ">
              Business Details
            </p>
            <p className=" text-gray-600 ">
              Fill the Details to get more business Opportunities
            </p>
          </div>
          <div className=" flex mt-6 flex-col gap-2 w-full">
            <InputFild label={"Shop Name"} />
            <div className=" flex flex-col gap-1">
              <p className=" font-semibold">
                Shop Description <span className=" text-primary-red">*</span>
              </p>
              <textarea
                rows={4}
                type="text"
                className=" text-sm rounded-md p-2 border "
              />
            </div>
            <InputFild label={"Address"} />
            <div className=" w-full flex flex-col md:flex-row gap-4">
              <InputFild label={"Pin code"} />
              <InputFild label={"Landmark"} notNsc={true} />
            </div>
            <div className=" w-full flex flex-col md:flex-row gap-4">
              <InputFild label={"State"} notNsc={true} disable={true} />
              <InputFild label={"City"} notNsc={true} disable={true} />
            </div>
            <div className=" w-full flex flex-col md:flex-row gap-4">
              <InputFild label={"Longitude"} notNsc={true} disable={true} />
              <InputFild label={"Latitude"} notNsc={true} disable={true} />
            </div>
            <div className=" mt-1 w-full flex flex-col md:flex-row gap-4">
              <div className=" w-full flex flex-col gap-1">
                <p className=" font-semibold">
                  Location/Area* <span className=" text-primary-red">*</span>
                </p>
                <select
                  rows={4}
                  type="text"
                  className=" bg-white text-sm rounded-md p-2 border "
                />
              </div>
              <InputFild label={"GST Number"} notNsc={true} />
            </div>
            <div className=" w-full flex flex-col md:flex-row gap-4">
              <div className=" mt-1 w-full flex justify-between flex-col gap-1">
                <p className=" font-semibold">
                  WalkIn Town Additional Discount{" "}
                  <span className=" text-primary-red">*</span>
                </p>
                <input
                  type="text"
                  className=" bg-white text-sm rounded-md p-2 border "
                />
                <div className=" mt-2">
                  <TermsAndConditioBusinessDetailsnDialog
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                  />
                </div>
              </div>
              <div className=" w-full flex flex-col gap-1">
                <div className=" flex gap-1 font-semibold items-center">
                  Subscription Plan <span className=" text-primary-red">*</span>
                  <Info size={18} color="#666" />
                </div>
                <div className=" flex flex-col gap-1">
                  <div className=" flex gap-1 items-center">
                    <input
                      name="radio"
                      type="radio"
                      defaultChecked
                      className=" w-fit"
                    />
                    <p className="">Silver</p>
                  </div>
                  <div className=" flex gap-1 items-center">
                    <input name="radio" type="radio" className=" w-fit" />
                    <p className="  text-gray-400">Gold</p>
                  </div>
                  <div className=" flex gap-1 items-center">
                    <input name="radio" type="radio" className=" w-fit" />
                    <p className="  text-gray-400">Platinum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-6  flex gap-1 items-center flex-row">
            <ChevronLeftCircle className="shrink-0" size={20} />
            <div className=" max-w-2xl overflow-x-scroll px-2 hide-scrollbar flex relative gap-2 w-full">
              <div className=" relative rounded-md cursor-pointer h-28 w-36 shrink-0 items-center flex gap-2 px-3 border border-black py-1.5">
                <p className="  text-black text-sm  text-center">
                  Upload image here
                </p>
                <BookImage
                  size={20}
                  className=" absolute bottom-0 right-0 bg-black p-1 rounded size-7 text-white"
                />
              </div>

              {[
                "./../v2.png",
                "./../v3.png",
                "./../v4.png",
                "./../v5.png",
                "./../v2.png",
                "./../v3.png",
              ].map((item, index) => (
                <div key={index} className=" w-36 shrink-0 relative">
                  <img src={item} />
                  <Pencil
                    size={20}
                    className=" absolute bottom-0 right-0 bg-white p-1 rounded size-7 text-black"
                  />
                </div>
              ))}
            </div>
            <ChevronRightCircle className="shrink-0" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Step Three
function BankDetailsSection() {
  return (
    <div className=" px-4 max-w-5xl pt-6 mt-12 mx-auto w-full flex flex-col gap-4">
      <div className=" w-fit mx-auto items-center flex flex-col gap-4">
        <p className=" text-3xl md:text-4xl font-medium text-center">
          Bank Details
        </p>
        <p className=" text-gray-600 text-center">Add your bank details</p>
      </div>
      <div className=" flex flex-col gap-8 md:flex-row">
        <div className=" flex shrink-0 flex-col max-w-56 mx-auto gap-4">
          <p className=" text-3xl font-medium text-center md:text-left">
            Bank Info
          </p>
          <p className=" text-gray-600 text-center md:text-left">
            Set Up Your Bank Info
          </p>
          <img src="./../qr.png" />
          <div className=" flex items-center gap-2 border rounded border-primary-red px-3 py-1.5">
            <p className=" text-primary-red">Generate a QR code</p>
            <ScanQrCode size={18} color="#b91c1c" />
          </div>
        </div>
        <div className=" flex flex-col gap-2 w-full">
          <div className=" flex flex-col gap-2">
            <div className=" w-full md:w-1/3">
              <InputFild label={"IFSC Code"} />
            </div>
            <div className=" flex gap-2">
              <div className=" w-full md:w-1/3">
                <InputFild notNsc={true} disable={true} label={"Bank Name "} />
              </div>
              <div className=" w-full md:w-2/3">
                <InputFild
                  notNsc={true}
                  disable={true}
                  label={"Branch Name "}
                />
              </div>
            </div>
            <div className=" flex flex-col md:flex-row gap-2">
              <div className=" w-full md:w-1/3">
                <InputFild label={"Account Holder Name"} />
              </div>
              <div className=" w-full md:w-1/3">
                <InputFild label={"Account Number"} />
              </div>
              <div className=" w-full md:w-1/3">
                <InputFild label={"Confirm Account Number"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Step Four
function OfferDetailsSection() {
  return (
    <div className=" text-left max-w-[96vw] pt-6 lg:max-w-6xl px-4 mt-12 mx-auto flex-col w-full flex gap-4">
      <div className=" flex flex-col gap-12 lg:flex-row">
        <div className="flex md:max-w-60 w-full md:mt-28 shrink-0 flex-col gap-4">
          <div className=" max-w-44 md:max-w-60 relative items-center justify-center aspect-square flex shrink-0 flex-col gap-4 border border-gray-600 rounded-md ">
            <div className=" absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 size-16 bg-primary-red p-1 flex items-center justify-center rounded-full">
              <CameraIcon className=" text-white" size={36} />
            </div>
            <img
              src="./../store-pic.jpg"
              className=" h-full w-full object-cover"
              alt=""
            />
          </div>
          <p className=" text-left font-semibold text-lg">Happy Shop</p>
        </div>

        <div className=" w-full">
          <div className=" -mt-4 md:mt-0 w-full flex flex-col gap-4">
            <p className=" text-3xl md:text-4xl font-medium ">
              Product & Offer Details
            </p>
            <p className=" text-gray-600 ">Create deals & offers</p>
          </div>
          <div className=" flex mt-6 flex-col gap-4 w-full">
            <div className=" w-full flex flex-col md:flex-row gap-4">
              <div className=" w-full flex flex-col gap-1">
                <p className={` font-semibold`}>
                  Offer <span className=" text-primary-red">*</span>
                </p>
                <input className=" w-full text-sm bg-white rounded-md p-2 border "></input>
              </div>
            </div>
            <div className=" w-full flex flex-col gap-1">
              <p className={` font-semibold`}>
                Offer Description <span className=" text-primary-red">*</span>
              </p>

              <textarea
                defaultValue={"Get it soon"}
                className=" p-2 border w-full min-h-24 md:min-h-32 rounded h-full"
              />
            </div>

            <div className=" w-full flex flex-col md:flex-row gap-4">
              <div className=" w-full flex flex-col gap-1">
                <p className={` font-semibold`}>
                  Validity From<span className=" text-primary-red">*</span>
                </p>
                <CalendarForm />
              </div>

              <div className=" w-full flex flex-col gap-1">
                <p className={` font-semibold`}>
                  Validity Till<span className=" text-primary-red">*</span>
                </p>
                <CalendarForm />
              </div>
            </div>

            <div className=" w-full flex flex-col md:flex-row gap-4"></div>
          </div>
          <div className=" mt-2  flex flex-col gap-2">
            <p>
              Select Template/Image for Offer Display
              <span className=" text-primary-red">*</span>
            </p>
            <div className=" w-full gap-2 items-center flex">
              <ChevronLeftCircle className="shrink-0" size={20} />

              <div className=" max-w-2xl overflow-x-scroll h-fit px-2 hide-scrollbar flex relative gap-2 w-full">
                <div className=" relative rounded-md cursor-pointer h-28 w-36 shrink-0 items-center flex gap-2 px-3 border border-black py-1.5">
                  <p className="  text-black text-sm  text-center">
                    Upload image here
                  </p>
                  <BookImage
                    size={20}
                    className=" absolute bottom-0 right-0 bg-black p-1 rounded size-7 text-white"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    className=" opacity-0 absolute inset-0 w-full h-full"
                  />
                </div>
                {[
                  "./../v2.png",
                  "./../v3.png",
                  "./../v4.png",
                  "./../v5.png",
                  "./../v2.png",
                  "./../v3.png",
                ].map((item, index) => (
                  <div key={index} className=" w-36 shrink-0 relative">
                    <img src={item} className=" h-full w-full object-cover" />
                    {/* <Square size={20} className=" absolute bottom-0 right-0 bg-white p-1 rounded size-7 text-black" /> */}
                    <div className=" absolute bottom-1 right-1 bg-white p-1 rounded text-black size-6 flex items-center justify-center">
                      <input type="checkbox" className=" w-full h-full" />
                    </div>
                  </div>
                ))}
              </div>
              <ChevronRightCircle className="shrink-0" size={20} />

              <div className=" rounded-md overflow-hidden">
                <img src="./../special-deal.png" alt="" />
              </div>
            </div>
          </div>

          <OfferBottonBts />
        </div>
      </div>
      <div>
        <p className=" text-lg font-semibold pt-4 pb-2">Offer History</p>
        <div className=" overflow-x-auto hide-scrollbar">
          <div className=" border rounded-md  w-[70rem]">
            <div className=" grid bg-primary-red text-white py-2 grid-cols-7">
              <div className=" flex gap-2 items-center justify-center">
                <p>Offer Image</p>
                <Image size={18} />
              </div>
              <div className=" flex gap-2 items-center justify-center">
                <p>Offer</p>
                <ShapesIcon size={18} />
              </div>
              <div className=" flex items-center justify-center">
                <p className=" text-sm">Start Date-End Date</p>
                <CalendarDays size={18} />
              </div>
              <div className=" flex gap-2 items-center justify-center">
                <p>Status</p>
                <div className=" border bg-gray-50 p-0.5">
                  <Check size={18} className=" text-primary-red" />
                </div>
              </div>
              <div className=" flex gap-2 items-center justify-center">
                <p>Offer Display</p>
                <BadgePercentIcon size={18} />
              </div>
              <div className=" flex gap-2 items-center justify-center">
                <p>Edit the offer</p>
                <Pencil size={18} />
              </div>
              <div className=" flex gap-2 items-center justify-center">
                <p>Delete</p>
                <Trash2 size={18} />
              </div>
            </div>
            {offerData.map((data, idx) => {
              return <OfferDetailList key={idx} data={data} idx={idx} />;
            })}
          </div>
        </div>
        <div className=" mt-6 flex justify-center gap-2">
          <div className=" border rounded-md p-1">
            <ChevronLeftIcon size={18} />
          </div>
          <div className=" border rounded-md py-1 px-3 bg-gray-100">
            <p>1</p>
          </div>
          <div className=" border text-gray-600 rounded-md py-1 px-2">
            <p>2</p>
          </div>
          <div className=" border text-gray-600 rounded-md py-1 px-2">
            <p>3</p>
          </div>
          <div className=" border text-gray-600 rounded-md py-1 px-2">
            <p>4</p>
          </div>
          <div className=" border rounded-md p-1">
            <ChevronRightIcon size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

function OfferDetailList({ data, idx }) {
  return (
    <div
      className={`grid  text-gray-600 py-2 grid-cols-7 ${
        idx % 2 == 0 ? "bg-gray-100" : "bg-white"
      } `}
    >
      <div className=" flex gap-2 items-center justify-center">
        <img src={data.img} />
      </div>
      <div className=" flex gap-2 items-center justify-center">
        <p className=" text-sm text-center">{data.type}</p>
      </div>
      <div className=" flex gap-2 items-center justify-center">
        <p className=" text-sm text-center">{data.validity}</p>
      </div>
      <div className=" flex gap-2 items-center justify-center">
        <p className=" text-sm text-center">{data.status}</p>
      </div>
      <div className=" flex gap-2 items-center justify-center">
        <p className=" text-sm text-center">{data.offerDisplay}</p>
      </div>
      <div className=" flex gap-2 items-center justify-center">
        <Pencil size={18} />
      </div>
      <div className=" flex gap-2 items-center justify-center">
        <Trash2 size={18} />
      </div>
    </div>
  );
}
const offerData = [
  {
    img: "./../vendor-store-offer.png",
    type: "Weekend Sale",
    category: "All Categories",
    discount: "18%",
    validity: "31st Dec - 2nd Jan",
    offerDisplay: "Offer display message",
    status: "Active",
  },
  {
    img: "./../vendor-store-offer.png",
    type: "Weekend Sale",
    category: "All Categories",
    discount: "12%",
    validity: "31st Dec - 1st Jan",
    offerDisplay: "Offer display message",
    status: "Ending Soon Offer",
  },
  {
    img: "./../vendor-store-offer.png",
    type: "Weekend Sale",
    category: "All Categories",
    discount: "20%",
    validity: "30th Dec - 1st Jan",
    offerDisplay: "Offer display message",
    status: "Expired",
  },
];

function InputFild({ label, inputName, same, notNsc, disable }) {
  return (
    <div className=" w-full flex flex-col gap-1">
      <p className={` font-semibold`}>
        {label} {!notNsc && <span className=" text-primary-red">*</span>}
      </p>
      <input
        type="text"
        defaultValue={inputName}
        className=" w-full text-sm rounded-md p-2 border "
      />
      {same && (
        <div className=" flex gap-2 mt-4 items-center">
          <input type="checkbox" className=" size-4"></input>
          <p className=" text-gray-600 text-sm">Same as phone number</p>
        </div>
      )}
    </div>
  );
}

const OfferBottonBts = ({ num }) => {
  // console.log(num)
  const showBack = num != 1;
  return (
    <div className=" w-full mt-12 max-w-5xl mx-auto justify-center md:justify-end flex gap-4 items-center">
      {showBack && (
        <div className=" flex items-center gap-2 w-full sm:w-fit justify-center rounded-md text-primary-red border-primary-red border px-4 py-2">
          <p className=" font-semibold">Create New</p>
          <CopyPlus size={20} />
        </div>
      )}
      <div className=" w-full sm:w-fit justify-center  rounded-md text-white flex items-center gap-2 bg-primary-red px-4 py-2">
        <p className=" font-semibold">Save Offer</p>
        <Check color="white" size={20} />
      </div>
    </div>
  );
};

// Step Five

function PromoteMyStoreSection() {
  return (
    <div className=" max-w-5xl px-4 mt-12 mx-auto w-full flex flex-col gap-4">
      <div className=" w-fit mx-auto items-center flex flex-col gap-4">
        <p className=" text-3xl md:text-4xl font-medium text-center">
          Profile Setup
        </p>
        <p className=" text-gray-600 text-center">
          Manage all your account settings and preferences
        </p>
      </div>
      <div className=" flex flex-col w-full gap-4">
        <div>
          <div className=" flex gap-2 items-center">
            <p className=" text-gray-600 text-lg">Subscription Plan</p>
            <Info size={18} color="#666" />
          </div>
          <div className=" flex gap-1">
            <div className=" flex gap-1 items-center">
              <input name="radio" type="radio" className=" w-fit" />
              <p className="">Silver</p>
            </div>
            <div className=" flex gap-1 items-center">
              <input
                name="radio"
                type="radio"
                defaultChecked
                className=" w-fit"
              />
              <p className="  text-primary-red">Gold</p>
            </div>
            <div className=" flex gap-1 items-center">
              <input name="radio" type="radio" className=" w-fit" />
              <p className=" ">Platinum</p>
            </div>
          </div>
        </div>
        <div className=" px-4 md:px-0 flex gap-4 flex-col md:flex-row max-w-3xl mx-auto w-full">
          <div className=" flex flex-col gap-2 rounded-md border h-96 w-full border-primary-red p-3">
            <p className=" border-b-2 text-primary-red font-semibold text-lg py-2 text-center">
              Silver
            </p>
            <p>
              {" "}
              <span className=" text-primary-red">-</span> Free Listing
            </p>
            <p>
              {" "}
              <span className=" text-primary-red">-</span> Get discovered InTown
              through search
            </p>
            <div className=" h-full flex items-end justify-center">
              <img src="./../silver.png" className="" />
            </div>
          </div>
          <div className=" flex from-yellow-200 via-20% via-yellow-50 to-yellow-500 bg-gradient-to-b flex-col gap-2 rounded-md border h-96 w-full border-primary-red p-3">
            <p className=" border-b-2 text-primary-red font-semibold text-lg py-2 text-center">
              Gold
            </p>
            <p>
              {" "}
              <span className=" text-primary-red">-</span> Gold - Enhanced
              Visibility
            </p>
            <p>
              {" "}
              <span className=" text-primary-red">-</span> Get featured in
              prominent app sections and update your offers monthly
            </p>
            <div className="  h-full flex items-end justify-center">
              <img src="./../gold.png" className="" />
            </div>
          </div>
          <div className=" flex from-zinc-200 via-20% via-zinc-50 to-zinc-400 bg-gradient-to-b flex-col gap-2 rounded-md border h-96 w-full border-primary-red p-3">
            <p className=" border-b-2 text-primary-red font-semibold text-lg py-2 text-center">
              Platinum
            </p>
            <p>
              {" "}
              <span className=" text-primary-red">-</span> Platinum - Maximum
              Exposure
            </p>
            <p>
              {" "}
              <span className=" text-primary-red">-</span>{" "}
              Get premium placement, weekly offer updates, and priority support
            </p>
            <div className=" h-full flex items-end justify-center">
              <img src="./../platinum.png" className="" />
            </div>
          </div>
        </div>
        <div className=" max-w-3xl flex-col md:flex-row mx-auto w-full flex gap-6">
          <InputFild label={"offer Days"} notNsc={true} />
          <InputFild label={"offer Hours"} notNsc={true} />
          <InputFild
            label={"Maximum changes per offer"}
            disable={true}
            notNsc={true}
          />
        </div>
        <div className=" max-w-x2l w-full mx-auto flex flex-col gap-2">
          <p className=" text-xl">Plan Pricing</p>
          <div className="w-full flex-col md:flex-row flex max-w-xl gap-6">
            {planData.map((data) => {
              return (
                <div
                  key={data.name}
                  className="  mx-auto w-full max-w-52 flex flex-col"
                >
                  <p className=" text-primary-red">{data.name}</p>
                  <div className="">
                    {data.data?.map((item) => {
                      return (
                        <p className="" key={item}>
                          {item}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const planData = [
  {
    name: "Silver",
    data: ["500 / month", "2000 / Quaterly", "6000 / Yearly"],
  },
  {
    name: "Gold",
    data: ["1500 / month", "6000 / Quaterly", "18,000 / Yearly"],
  },
  {
    name: "Platinum",
    data: ["5000 / month", "20,000 / Quaterly", "60,000 / Yearly"],
  },
];

// vendor footer
const VendorFooterBar = ({ currentStep, setCurrentStep, setIsOpen }) => {
  const showPrev = currentStep != 1;
  const isLast = currentStep == 4;
  function handleNext() {
    if (isLast) {
      setIsOpen(false);
      return;
    }
    setCurrentStep(currentStep + 1);
  }
  return (
    <div className=" w-full px-4 pt-12 max-w-5xl justify-end flex gap-4 items-center">
      {showPrev && (
        <div
          onClick={() => setCurrentStep(currentStep - 1)}
          className=" flex items-center gap-2 w-fit rounded-md text-primary-red border-primary-red border px-4 py-2"
        >
          <p className=" font-semibold">Back</p>
          <ArrowLeft size={20} />
        </div>
      )}
      <div
        onClick={handleNext}
        className=" w-fit  rounded-md text-white flex items-center gap-2 bg-primary-red px-4 py-2"
      >
        <p className=" font-semibold">{isLast ? "Finish" : "Next"}</p>
        <ArrowRight color="white" size={20} />
      </div>
    </div>
  );
};

const VendorFooterBarFinal = ({ num }) => {
  const showBack = num != 1;
  return (
    <div className=" w-full max-w-5xl px-4 mx-auto justify-end flex gap-4 items-end">
      <img
        src="/swipe-animation.gif"
        alt="Swipe Animation"
        className="hidden"
      />
      {showBack && (
        <Link
          href={`/vendor-dashbord?form=${String(num) - 1}`}
          className=" flex items-center gap-2 w-fit rounded-md text-primary-red border-primary-red border px-4 py-2"
        >
          <p className=" font-semibold">Back</p>
          <ArrowLeft size={20} />
        </Link>
      )}
      <div className=" w-fit rounded-md text-white flex items-center gap-2 bg-primary-red px-4 py-2">
        <p className=" font-semibold">Finish</p>
        <CheckCheck color="white" size={20} />
      </div>
    </div>
  );
};

const VendorOnbordForm = ({ setCurrentStep, currentStep }) => {
  return (
    <div className=" px-2 md:px-4 max-w-[94vw] md:max-w-6xl hide-scrollbar overflow-x-scroll py-6 md:py-3 mx-auto w-full mt-6 flex gap-12 items-center justify-start lg:justify-center">
      <div className=" flex gap-1 md:gap-3">
        <ContactDetails setCurrentStep={setCurrentStep} />
        <Line isRed={currentStep > 1} />
        <ShopDetails setCurrentStep={setCurrentStep} isRed={currentStep > 1} />
        <Line isRed={currentStep > 2} />
        <OfferDetails setCurrentStep={setCurrentStep} isRed={currentStep > 2} />
        <Line isRed={currentStep > 3} />
        <PromoteMyStore
          setCurrentStep={setCurrentStep}
          isRed={currentStep > 3}
        />
      </div>
    </div>
  );
};

function Line({ isRed }) {
  return (
    <div
      className={` h-1.5 mt-4 md:mt-7 w-12 md:w-20 rounded  ${
        isRed ? "bg-secondary-red" : "bg-gray-300"
      } `}
    ></div>
  );
}

function ContactDetails({ setCurrentStep }) {
  return (
    <div className=" flex w-16 flex-col gap-2 items-center ">
      <div
        onClick={() => setCurrentStep(1)}
        className="  size-10 md:size-16 flex items-center justify-center rounded-full bg-secondary-red"
      >
        <CircleUser className="size-6 md:size-9 text-black " />
      </div>
      <p className=" text-xs text-black font-semibold text-center">
        Vendor Details
      </p>
    </div>
  );
}
function ShopDetails({ isRed, setCurrentStep }) {
  return (
    <div className=" flex w-16 flex-col gap-2 items-center ">
      <div
        onClick={() => setCurrentStep(2)}
        className={` size-10 md:size-16 flex items-center justify-center rounded-full  ${
          isRed ? "bg-secondary-red" : " bg-gray-300"
        }`}
      >
        <img src="./../nav/shop.svg" className="size-6 md:size-9" />
      </div>
      <p className={`text-xs  font-semibold text-center text-black `}>
        Business Details
      </p>
    </div>
  );
}
// function BankDetails({ isRed, setCurrentStep }) {
//     return <div className=' flex w-16 flex-col gap-2 items-center ' >
//         <div onClick={()=>setCurrentStep(3)} className={`size-16 flex items-center justify-center rounded-full  ${isRed ? "bg-primary-red" : " bg-gray-300"}`} >
//             <Landmark className={`size-9 ${isRed ? " text-white" : " text-black"} `} />
//         </div>
//         <p className={`text-xs  font-semibold text-center ${isRed ? " text-primary-red" : " text-black"} `} >Bank Details</p>

//     </div>
// }
function OfferDetails({ isRed, setCurrentStep }) {
  return (
    <div className=" flex w-16 flex-col gap-2 items-center ">
      <div
        onClick={() => setCurrentStep(3)}
        className={` size-10 md:size-16 flex items-center justify-center rounded-full  ${
          isRed ? "bg-secondary-red" : " bg-gray-300"
        }`}
      >
        <BadgePercent className={`size-6 md:size-9 text-black `} />
      </div>
      <p className={`text-xs  font-semibold text-center text-black `}>
        Product Offers
      </p>
    </div>
  );
}
function PromoteMyStore({ isRed, setCurrentStep }) {
  return (
    <div className=" flex w-16 flex-col gap-2 items-center ">
      <div
        onClick={() => setCurrentStep(4)}
        className={` size-10 md:size-16 flex items-center justify-center rounded-full  ${
          isRed ? "bg-secondary-red" : " bg-gray-300"
        }`}
      >
        <Megaphone className={`size-6 md:size-9 text-black `} />
      </div>
      <p className={`text-xs  font-semibold text-center text-black `}>
        Promote My Store
      </p>
    </div>
  );
}
function StoreImage() {
  return (
    <div className=" shrink-0 relative">
      <img src="./../store.png" />
      <div className=" -bottom-3 size-12 absolute rounded-full flex items-center justify-center bg-primary-red -right-3">
        <Camera className=" text-white" />
      </div>
    </div>
  );
}

function VendorProfileImage() {
  const [userImage, setUserImage] = React.useState(null);
  function handleImageUpload(e) {
    setUserImage(e.target.files[0]);
  }
  return (
    <div className=" max-w-44 md:max-w-60 md:mx-auto w-full relative items-center justify-center aspect-square flex shrink-0 flex-col gap-4 border border-gray-600 rounded-md ">
      {userImage ? (
        <img
          src={URL.createObjectURL(userImage)}
          className=" h-full rounded-md w-full object-cover"
          alt=""
        />
      ) : (
        <p className=" text-center p-4">Upload your image here</p>
      )}
      <div className=" absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 size-16 bg-primary-red p-1 flex items-center justify-center rounded-full">
        <CameraIcon className=" text-white" size={36} />
      </div>
      <input
        onChange={handleImageUpload}
        type="file"
        accept="image/*"
        className=" absolute opacity-0 w-full h-full inset-0"
      />
    </div>
  );
}

function SearchByBrand() {
  const brands = [
    "./../companies-logo/zara.png",
    "./../companies-logo/h&m.png",
    "./../companies-logo/puma.png",
    "./../companies-logo/forever.png",
    "./../companies-logo/gap.png",
    "./../companies-logo/gap.png",
    "./../companies-logo/h&m.png",
    "./../companies-logo/puma.png",
    "./../companies-logo/forever.png",
    "./../companies-logo/gap.png",
    "./../companies-logo/gap.png",
  ];
  const [selectedFields, setSelectedFields] = useState([]);
  const handleCheckboxChange = (value) => {
    if (selectedFields.includes(value)) {
      setSelectedFields(selectedFields.filter((item) => item !== value));
    } else {
      setSelectedFields([...selectedFields, value]);
    }
  };
  return (
    <div className="flex w-full py-2 mt-3 overflow-x-auto md:flex-wrap gap-2">
      {/* <div className=" py-1 px-2 shrink-0 flex items-center justify-center bg-secondary-red font-semibold text-sm rounded-md" >Vaishali Nagar</div> */}
      {brands?.slice(0, 6).map((data, idx) => {
        const isPresect = selectedFields.includes(data);
        return (
          <div
            onClick={() => handleCheckboxChange(data)}
            key={idx}
            className={`h-8 w-auto shrink-0 py-1 px-2 border border-black font-semibold text-sm rounded-md ${
              isPresect ? "bg-secondary-red" : ""
            }`}
          >
            <img key={data} className=" w-full h-full " src={data} alt="" />
          </div>
        );
      })}
      <BrandsShowMore
        selectedFields={selectedFields}
        setSelectedFields={setSelectedFields}
        itemsToShow={brands.slice(6)}
      />
    </div>
  );
}
