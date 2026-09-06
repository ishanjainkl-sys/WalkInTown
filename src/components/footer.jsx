import { Facebook, Instagram, Linkedin, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary-black mt-12 w-full text-white px-6 py-6 md:px-4 ">
      <div className="bg-primary-black container flex justify-between flex-col gap-4">
        <div className="flex w-full flex-col md:flex-row justify-between gap-8">
          <div className="w-full flex flex-col gap-2">
            {/* <p className="text-4xl font-semibold">LOGO</p> */}
            <Link href={"/"}>
              {" "}
              <img src="./logo.png" className=" w-32 h-auto" alt="" />
            </Link>
            <p className="  text-lg font-semibold">About</p>
            <p className=" text-sm">About walk in town</p>
            <p className=" text-sm">Carrer</p>
            <p className=" text-sm">WIT Stories</p>
          </div>

          <div className="flex flex-col gap-1 w-full cursor-pointer">
            <p className="font-semibold text-xl">Quick Links</p>
            <Link href={"/"}>
              {" "}
              <p className="text-sm">Home</p>
            </Link>
            <p className="text-sm">About Us</p>
            <p className="text-sm">Terms & Conditions</p>
            <p className="mt-1 text-sm">Privacy Policy</p>
            <p className="mt-1 font-semibold text-lg">Follow us on</p>
            <div className="flex items-center gap-3 mt-2">
              <Link href="https://www.facebook.com" target="_blank">
                <div className="rounded-full bg-white p-2 flex items-center justify-center">
                  <Facebook size={24} fill="#b91c1c" color="#b91c1c" />
                </div>
              </Link>
              <Link href="https://www.linkedin.com" target="_blank">
                <div className="rounded-full bg-white p-2 flex items-center justify-center">
                  <Linkedin size={24} fill="#b91c1c" color="#b91c1c" />
                </div>
              </Link>
              <Link href="https://www.instagram.com" target="_blank">
                <div className="rounded-full bg-white p-2 flex items-center justify-center">
                  <Instagram size={24} fill="#b91c1c" color="#fff" />
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col w-full gap-2 cursor-pointer">
            <p className="font-semibold text-xl">Categories</p>
            <Link href={"/search?filter=Men"}>
              <p className="text-sm">Men</p>
            </Link>
            <Link href={"/search?filter=Women"}>
              <p className="text-sm">Women</p>
            </Link>
            <Link href={"/search?filter=Kids"}>
              <p className="text-sm">Kids</p>
            </Link>
            <Link href={"/search?filter=Beauty"}>
              <p className="text-sm">Beauty</p>
            </Link>
            <Link href={"/search?filter=Home Decore"}>
              <p className="text-sm">Home Decor</p>
            </Link>
            <Link href={"/search?filter=Home Appliances"}>
              <p className="text-sm">Home Appliences</p>
            </Link>
            <Link href={"/search?filter=Electronics"}>
              <p className="text-sm">Electronics</p>
            </Link>
          </div>

          <div className="flex flex-col w-full gap-2">
            <p className="font-semibold text-xl">Grow With Us</p>
            <p className="text-sm">Protect & Build Brand</p>
            <p className="text-sm">Become WIT Affiliated</p>
            <p className="text-sm">Advertise Your Product</p>
            <p className="text-sm">Security</p>
            <p className="text-sm">Privacy</p>
          </div>

          <div className="flex flex-col w-full gap-2">
            <p className="font-semibold text-xl">Let Us Help You</p>
            <p className="text-sm">Mail us</p>
            <p className="text-sm">Your Account</p>
            <p className="text-sm">100% Authentication</p>
            <p className="text-sm">Download App</p>
            <p className="text-sm">Help Center</p>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between gap-4 flex-col md:flex-row">
          <p>Copyright © 2024. All rights reserved</p>
          <p>
            We use cookies for better service.
            <span className="font-semibold"> Accept</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
