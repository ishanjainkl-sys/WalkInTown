"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menus } from "./utils";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import UserProfileDialog from "../dialog/userProfileDialog";

const NavBar = ({}) => {
  const [isUserProfile, setIsUserProfile] = React.useState(false);
  return (
    <div>
      <UserProfileDialog
        isOpen={isUserProfile}
        setIsUserProfile={setIsUserProfile}
      />

      <header className="h-20 z-[999] text-[15px] fixed inset-0 flex items-center bg-white ">
        <nav className=" px-2 flex items-center justify-between gap-1 w-full mx-auto">
          <Link
            href="/"
            className="flex-center shrink-0 gap-x-3 z-[999] relative"
          >
            <img src={"./logo.svg"} alt="" className="w-auto h-8" />
          </Link>

          <ul className="xl:flex items-center gap-1 shrink-0 hidden">
            {Menus.map((menu, i) => (
              <DesktopMenu menu={menu} key={i} />
            ))}
          </ul>
          {/* Dummy component to place the navbar menues to right on large screen */}
          <div></div>

          <div className="flex items-end justify-end w-full max-w-3xl gap-x-5">
            <div className=" w-full hidden xl:flex items-center justify-end gap-2 ">
              <div className=" border w-full border-black h-10 justify-between rounded py-2 px-3 flex items-center gap-3">
                <Link href={"/search"} className=" w-full flex items-center">
                  <img src="./nav/search.png" alt="" />
                  <p className="font-medium text-gray-400">Search</p>
                </Link>
                <div className=" px-1 border-l w-full max-w-52 justify-around border-black flex items-center gap-2 ">
                  <SearchLocation />
                </div>
              </div>

              <Link
                href={"/partner-login"}
                className="bg-primary-red h-10 shrink-0 rounded py-2 px-3 flex items-center gap-2"
              >
                <img src="./nav/hand-shake.png" alt="" />
                <p className="font-medium whitespace-nowrap text-sm text-white">
                  Partner with us
                </p>
              </Link>
              <div
                onClick={() => {
                  setIsUserProfile(true);
                }}
                className=" size-8 shrink-0 cursor-pointer"
              >
                <img src="./nav/navUser.svg" alt="" />
              </div>
            </div>
            <div className="xl:hidden">
              <MobMenu setIsUserProfile={setIsUserProfile} Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;

const locations = [
  { name: "Jaipur", icon: "./search-locaion.svg", mapIcon: "./map-pin.svg" },
  { name: "Delhi", icon: "./india-gate.svg", mapIcon: "./map-pin.svg" },
  {
    name: "Mansarover",
    mapIcon: "./map-pin.svg",
  },
];

function SearchLocation() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0].name);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative w-full">
      <div
        className="flex items-center p-2 cursor-pointer"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {locations.find((loc) => loc.name === selectedLocation).icon ? (
          <img
            src={locations.find((loc) => loc.name === selectedLocation).icon}
            alt=""
            className="w-6 h-6"
          />
        ) : (
          <div className=" h-6 w-4"></div>
        )}

        <p className="ml-2">{selectedLocation}</p>
        <img src="./map-pin.svg" alt="" className="w-6 h-6 ml-auto" />
      </div>

      {dropdownOpen && (
        <div className="absolute top-full left-0 w-full bg-white border rounded-lg shadow-lg mt-2">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelectedLocation(loc.name);
                setDropdownOpen(false);
              }}
            >
              {loc.icon ? (
                <img src={loc.icon} alt="" className="w-6 h-6" />
              ) : (
                <div className=" w-6 h-6"></div>
              )}
              <p>{loc.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
