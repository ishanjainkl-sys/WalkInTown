"use client";
import { Menu, Search, User, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const NavBarBG = () => {
  const [showMegaMenu, setShowMegaMenu] = React.useState(false);
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false);
  return (
    <div>
      <div className="max-w-7xl z-10 text-white relative w-full mx-auto px-6 md:px-4 py-6">
        <div className="flex justify-between ">
          <div className="flex gap-6 w-full  md:flex-row">
            <Link
              href={"/"}
              className="border text-black bg-white  w-fit h-fit px-4 py-1"
            >
              LOGO
            </Link>
            <div className=" w-full flex flex-col gap-2">
              <div className="flex w-full items-center flex-col md:flex-row gap-6">
                <Link
                  href={"/search"}
                  className=" hidden md:flex items-center border h-10 border-primary-red bg-white rounded-md overflow-hidden"
                >
                  <div className="flex items-center px-2 gap-2">
                    <span className="text-lg">
                      <img src="./navBG/search-gray.svg" alt="" />
                    </span>
                    <p className="text-sm text-gray-600">
                      What are you looking for?
                    </p>
                  </div>
                  <div className="hidden md:flex items-center px-2 gap-2 ml-6">
                    <span className="text-lg">
                      <img src="./navBG/location.svg" alt="" />
                    </span>
                    <p className="text-sm text-gray-600">Current Location</p>
                  </div>
                  <div className="flex items-center justify-center h-full bg-primary-red px-2">
                    <img src="./navBG/mike.svg" alt="" />
                  </div>
                  <div className="flex items-center justify-center h-full bg-primary-red px-2">
                    <img src="./navBG/search.svg" alt="" />
                  </div>
                </Link>
                <Link href={"/vendor-login/signup"} className=" hidden md:flex items-center gap-2">
                  <p className="font-semibold">Partner with us</p>
                  <img src="./navBG/shop.svg" alt="" />
                </Link>
                <div className="hidden md:block ml-auto">
                  <img src="./navBG/user.svg" alt="" />
                </div>
              </div>
              <div className="md:flex w-full relative justify-between hidden gap-4 mt-6">
                <div
                  className="cursor-pointer flex items-center gap-1"
                  onClick={() => setShowMegaMenu(!showMegaMenu)}
                >
                  <p className="font-semibold">Women</p>
                  <img src="./navBG/women.svg" alt="" />
                  <img src="./navBG/chowdown.svg" alt="" />
                </div>
                <div className="cursor-pointer flex items-center gap-1">
                  <p className="font-semibold">Men</p>
                  <img src="./navBG/men.svg" alt="" />
                  <img src="./navBG/chowdown.svg" alt="" />
                </div>
                <div className="cursor-pointer flex items-center gap-1">
                  <p className="font-semibold">Kids</p>
                  <img src="./navBG/kids.svg" alt="" />
                  <img src="./navBG/chowdown.svg" alt="" />
                </div>
                <div className="cursor-pointer flex items-center gap-1">
                  <p className="font-semibold">Home & Living</p>
                  <img src="./navBG/homeandliving.svg" alt="" />
                  <img src="./navBG/chowdown.svg" alt="" />
                </div>
                <div className="cursor-pointer flex items-center gap-1">
                  <p className="font-semibold">beauty</p>
                  <img src="./navBG/beauty.svg" alt="" />
                  <img src="./navBG/chowdown.svg" alt="" />
                </div>
                <div className="cursor-pointer flex items-center gap-1">
                  <p className="font-semibold">Home Appliances</p>
                  <img src="./navBG/homeapplience.svg" alt="" />
                  <img src="./navBG/chowdown.svg" alt="" />
                </div>
                <div className="cursor-pointer flex items-center gap-1">
                  <p className="font-semibold">Personal Electronics</p>
                  <img src="./navBG/chowdown.svg" alt="" />
                </div>
                {showMegaMenu && <WomenBox />}
              </div>
            </div>
          </div>
          <div className="flex gap-2 relative items-center md:hidden">
            <User color="#fff" />
            <div
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              className="cursor-pointer ml-4 mt-1 text-2xl"
            >
              {openMobileMenu ? <X size={20} /> : <Menu size={20} />}
            </div>
            {openMobileMenu && <MobileMenu />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarBG;

const navBarData = [
  {
    title: "Indiwear",
    items: [
      "Kurtis, Tunics & Tops",
      "Sarees",
      "Ethnic Wear",
      "Leggings, Salwars & Churidars",
      "Skirts & Palazzos",
      "Dress Materials",
      "Lehenga Cholis",
      "Dupattas & Shawls",
      "Jackets",
    ],
  },
  {
    title: "Western Wear",
    items: [
      "Dresses",
      "Tops",
      "Tshirts",
      "Jeans",
      "Trousers & Capris",
      "Shorts & Skirts",
      "Co-ords",
      "Playsuits",
      "Jumpsuits",
      "Shrugs",
    ],
  },
  {
    title: "Footwear",
    items: [
      "Flats",
      "Casual Shoes",
      "Heels",
      "Boots",
      "Sports Shoes & Floaters",
    ],
  },
  {
    title: "Lingerie",
    items: [
      "Bra",
      "Briefs",
      "Shapewear",
      "Sleepwear & Loungewear",
      "Swimwear",
      "Camisoles & Thermals",
    ],
  },
  {
    title: "Active Go",
    items: [
      "Sports & Active Wear",
      "Clothing",
      "Footwear",
      "Sports Accessories",
      "Sports Equipment",
    ],
  },
  {
    title: "BagHub",
    items: ["GoBag"],
  },
  {
    title: "Jewellery",
    items: ["Maternity", "Fashion Jewellery", "Fine Jewellery", "Earrings"],
  },
  {
    title: "Belts & Scarves",
    items: [],
  },
  {
    title: "Sunglasses",
    items: [],
  },
  {
    title: "Watches",
    items: [],
  },
];

function WomenBox() {
  return (
    <div
      id="megaMenu"
      className="absolute top-10 z-50 shadow-md left-0 w-full max-w-3xl mx-auto p-4 border grid grid-cols-3  bg-white flex-wrap gap-6 rounded-md"
    >
      {navBarData.map((data) => {
        return (
          <div key={data.title} className="flex w-fit flex-col gap-1">
            <p className="text-xl font-semibold text-primary-red">Indiwear</p>
            {data.items.map((item) => {
              return (
                <p key={item} className="text-gray-500 ">
                  {item}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function MobileMenu() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <div className=" z-50 h-[80vh] overflow-y-scroll w-60 bg-white text-black p-4 border absolute top-16 -right-4">
      <Link
        href={"/search"}
        className=" border flex gap-2 items-center justify-between text-gray-300 rounded-md border-primary-red px-3 pt-1.5"
      >
        <p>Search here</p>
        <Search size={20} />
      </Link>
      <div>
        <Link href={"/vendor-login/signup"} className="  flex items-center gap-2 text-primary-red font-medium pt-2 underline">
          <p>Partner with us</p>
          <img src="./nav/shop.svg" alt="asdf" />
        </Link>
      </div>

      <div
        onClick={() => setShowSubMenu(!showSubMenu)}
        className=" flex gap-2 items-center justify-between text-gray-600 py-2 border-t mt-2 border-gray-600"
      >
        <p>Women</p>
        <img src="./nav/chowdown.svg" alt="" />
      </div>
      {showSubMenu && <MobileWomenSubMenu />}
      <div className=" flex gap-2 items-center justify-between text-gray-600 py-2 border-t mt-2 border-gray-600">
        <p>Men</p>
        <img src="./nav/chowdown.svg" alt="" />
      </div>
      <div className=" flex gap-2 items-center justify-between text-gray-600 py-2 border-t mt-2 border-gray-600">
        <p>Kids</p>
        <img src="./nav/chowdown.svg" alt="" />
      </div>
      <div className=" flex gap-2 items-center justify-between text-gray-600 py-2 border-t mt-2 border-gray-600">
        <p>Home & Living</p>
        <img src="./nav/chowdown.svg" alt="" />
      </div>
      <div className=" flex gap-2 items-center justify-between text-gray-600 py-2 border-t mt-2 border-gray-600">
        <p>Beauty</p>
        <img src="./nav/chowdown.svg" alt="" />
      </div>
      <div className=" flex gap-2 items-center justify-between text-gray-600 py-2 border-t mt-2 border-gray-600">
        <p>Home Appliances</p>
        <img src="./nav/chowdown.svg" alt="" />
      </div>
      <div className=" flex gap-2 items-center justify-between text-gray-600 py-2 border-t mt-2 border-gray-600">
        <p>Personal Electronics</p>
        <img src="./nav/chowdown.svg" alt="" />
      </div>
    </div>
  );
}

function MobileWomenSubMenu() {
  return (
    <div>
      {navBarData.map((data) => {
        return (
          <div key={data.title} className="flex w-fit flex-col gap-1">
            <p className="text-xl font-semibold text-primary-red">Indiwear</p>
            {data.items.map((item) => {
              return (
                <p key={item} className="text-gray-500 ">
                  {item}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
