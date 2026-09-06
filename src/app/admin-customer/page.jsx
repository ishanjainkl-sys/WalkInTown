"use client";
import React from "react";
import {
  BadgeCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  Search,
  Tag,
  UserRound,
  UserRoundIcon,
} from "lucide-react";
import NavBar from "../admin/navBar";
import { SelectBrand } from "@/components/select/brands";
import { SelectLocation } from "@/components/select/location";
import { SelectCities } from "@/components/select/cities";
import DeleteVendor from "@/components/dialog/admin/vendorDeleteConfirm";
import UserProfileDialog from "@/components/dialog/userProfileDialog";
import Footer from "@/components/footer";

const Page = () => {
  const [isDeleteVendor, setIsDeleteVendor] = React.useState(false);
  const [isUserOpen, setIsUserOpen] = React.useState(false);
  return (
    <div>
      <UserProfileDialog isOpen={isUserOpen} setIsOpen={setIsUserOpen} />
      <NavBar page="customer" />
      <DeleteVendor isOpen={isDeleteVendor} setIsOpen={setIsDeleteVendor} />
      <div className=" w-full overflow-x-scroll hide-scrollbar">
        <VendorList
          setIsUserOpen={setIsUserOpen}
          setIsDeleteVendor={setIsDeleteVendor}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Page;

function VendorList({ setIsDeleteVendor, setIsUserOpen }) {
  const data = [
    {
      name: "Naveen Sharma",
      phone: "+91-9012345678",
      email: "naveensharma@gmail.com",
    },
    {
      name: "Piya Sharma",
      phone: "+91-8043215670",
      email: "piyasharma@gmail.com",
    },
    {
      name: "Shruti Kumari",
      phone: "+91-9012345678",
      email: "shruti1kumari@gmail.com",
    },
    {
      name: "Isha Kumari",
      phone: "+91-9928245678",
      email: "Isha2umari@gmail.com",
    },
    {
      name: "Aysuh Anand",
      phone: "+91-6086245678",
      email: "aysuhanand2@gmail.com",
    },
    {
      name: "Sanika Shinde",
      phone: "+91-9095671230",
      email: "sanikashinde23@gmail.com",
    },
    {
      name: "Dhanashree Lungare",
      phone: "+91-7055545678",
      email: "dhanashreelungare@gmail.com",
    },
    {
      name: "Ankit Agrwal",
      phone: "+91-9543225678",
      email: "ankitagrwal@gmail.com",
    },
    {
      name: "Ritika Joshi",
      phone: "+91-8292085539",
      email: "ritikajosh27@gmail.com",
    },
    {
      name: "Ashish Raj",
      phone: "+91-9430456483",
      email: "ashish29raj@gmail.com",
    },
  ];
  return (
    <div className=" min-w-[80rem] w-full max-w-7xl flex flex-col mx-auto mt-6 border rounded-md ">
      <div className=" flex justify-between items-center p-4 gap-6">
        <div className=" flex gap-2 items-center">
          <p className=" text-3xl font-semibold">Customer List</p>
          <img src="./customer-list-red.svg" className=" size-9" />
        </div>
        <div className=" flex gap-2 items-center">
          <SelectBrand />
          <SelectLocation />
          <SelectCities />
          <div className=" flex gap-2 items-center">
            <div className=" border flex items-center gap-1 border-gray-700 text-primary-red py-2 px-2 rounded-md">
              <Search size={18} />
              {/* <p className=' text-gray-700 text-sm font-semibold' >
                                Search
                            </p> */}
              <input
                type="text"
                className=" text-gray-700 text-sm font-semibold max-w-24 "
                placeholder="Search"
              />
            </div>
          </div>
          <div className=" flex gap-2 items-center">
            <div className=" border flex items-center gap-1 border-gray-700 text-primary-red py-2 px-2 rounded-md">
              {/* <Tag size={18} /> */}
              <p className=" text-gray-700 text-sm font-semibold">Export</p>
              <img src="./export.svg" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" w-full p-4 bg-primary-red text-white grid grid-cols-4 gap-2 ">
          {/* <div className=' flex gap-1 items-center' >
                        <p className=' font-semibold' >Store Name</p>
                        <img src='./vendor-store-white.svg' />
                    </div> */}
          <div className=" flex gap-1 items-center">
            <p className=" font-semibold">Customer Name</p>
            <UserRoundIcon size={18} />
          </div>
          <div className=" flex gap-1 items-center">
            <p className=" font-semibold">Contact</p>
            <Phone size={18} />
          </div>
          <div className=" flex gap-1 items-center">
            <p className=" font-semibold">Email ID</p>
            <Mail size={18} />
          </div>
          {/* <div className=' flex gap-1 justify-center items-center' >
                        <p className=' font-semibold' >Active</p>
                        <img src="./contact-check.svg" alt="" />
                    </div>
                    <div className=' flex gap-1 justify-center items-center' >
                        <p className=' font-semibold' >Verified</p>
                        <BadgeCheck size={18} />
                    </div> */}
          <div className=" flex gap-1 items-center justify-center">
            <p className=" font-semibold">Action</p>
            <img src="./action.svg" alt="" />
          </div>
        </div>
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className={` border-b w-full p-4 grid grid-cols-4 gap-2  ${
                idx % 2 != 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              {/* <p>Happy Shoppy</p> */}
              <p>{item.name}</p>
              <p>{item.phone}</p>
              <p className=" text-sm overflow-x-scroll hide-scrollbar">
                {item.email}
              </p>
              {/* <input type="checkbox" className=" size-3.5 mx-auto border border-primary-red " />
                                <input type="checkbox" className=" size-3.5 mx-auto border border-primary-red " /> */}
              <div className=" flex items-center justify-center">
                <img
                  onClick={() => setIsUserOpen(true)}
                  src="./edit-list.svg"
                />
                <img onClick={() => setIsDeleteVendor(true)} src="./bin.svg" />
              </div>
            </div>
          );
        })}
        <div className=" flex  items-center justify-center gap-2 py-4">
          <ChevronLeft className=" border rounded-md p-1 " size={28} />
          <div className=" border rounded-md p-1 shrink-0 size-7 flex items-center justify-center bg-gray-200 ">
            1
          </div>
          <div className=" border rounded-md p-1 shrink-0 size-7 flex items-center justify-center">
            2
          </div>
          <div className=" border rounded-md p-1 shrink-0 size-7 flex items-center justify-center">
            3
          </div>
          <div className=" border rounded-md p-1 shrink-0 size-7 flex items-center justify-center">
            4
          </div>
          <ChevronRight className=" border rounded-md p-1 " size={28} />
        </div>
      </div>
    </div>
  );
}
