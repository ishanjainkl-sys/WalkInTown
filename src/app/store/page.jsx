"use client";
import Footer from "@/components/footer";
import React, { useState, useRef } from "react";
import NavBar from "@/components/nav/navBar";
import {
  Check,
  ChevronDownIcon,
  ChevronLeftCircle,
  ChevronLeftCircleIcon,
  ChevronRightCircle,
  Clock,
  CornerUpRightIcon,
  Phone,
  Share2,
  Star,
  ThumbsUp,
} from "lucide-react";
import PartnerLoginDialog from "@/components/dialog/partnerLoginDialog";
import PartnerLoginOTPDialog from "@/components/dialog/partnerLoginOTPDialog";
import CreateUserDialog from "@/components/dialog/createUserDialog";
import GetCreateOTP from "@/components/dialog/createUserOTP";
import GetPsswordOTP from "@/components/dialog/changePassOTP";
import LoginDialog from "@/components/dialog/loginUserDialog";
import ChangePassDialog from "@/components/dialog/changePassDialog";
import ThankYou from "./thankYou";
import GallaryDialog from "@/components/dialog/gallaryDialog";
import { Menus, storeMenu } from "@/components/nav/utils";
import StoreMenuNavItem from "./storeMenuNavItem";
import { ChevronUpIcon } from "lucide-react";
import Link from "next/link";
import { ShareButton, ThumbsUpButton } from "@/components/likeAndShare";

const Page = () => {
  const [isCreateUser, setIsCreateUser] = React.useState(false);
  const [isUserLogin, setIsUserLogin] = React.useState(false);
  const [isPassOTP, setIsPassOTP] = React.useState(false);
  const [isCreateOTP, setIsCreateOTP] = React.useState(false);
  const [isUerPassword, setIsUerPassword] = React.useState(false);
  const [isPartnerLogin, setIsPartnerLogin] = React.useState(false);
  const [isPartnerOTP, setIsPartnerOTP] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("11:00 AM - 08:00 PM");
  const [showOngoingOffers, setShowOngoingOffers] = useState(true);
  const [showClosingSoonOffers, setShowClosingSoonOffers] = useState(false);
  const [showUpcomingOffers, setShowUpcomingOffers] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectTime = (time) => {
    setSelectedTime(time);
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <NavBar />

      <CreateUserDialog
        isOpen={isCreateUser}
        handleOTPDialog={setIsCreateOTP}
        setUserLogin={setIsUserLogin}
        setIsOpen={setIsCreateUser}
      />
      <GetCreateOTP
        isOpen={isCreateOTP}
        setIsOpen={setIsCreateOTP}
        handleUserLogin={setIsUserLogin}
      />
      <GetPsswordOTP
        isOpen={isPassOTP}
        setIsOpen={setIsPassOTP}
        handleOTPDialog={setIsUerPassword}
      />

      <LoginDialog
        isOpen={isUserLogin}
        handleCreateAccount={setIsCreateUser}
        handleOTPDialog={setIsPassOTP}
        setIsOpen={setIsUserLogin}
      />
      <ChangePassDialog
        isOpen={isUerPassword}
        setIsOpen={setIsUerPassword}
        handleUserLogin={setIsUserLogin}
      />

      <PartnerLoginDialog
        isOpen={isPartnerLogin}
        setIsOpen={setIsPartnerLogin}
        handleOTPDialog={setIsPartnerOTP}
      />
      <PartnerLoginOTPDialog
        isOpen={isPartnerOTP}
        setIsOpen={setIsPartnerOTP}
      />

      <div className=" max-w-7xl mx-auto w-full mt-12  px-6 md:px-4 flex flex-col gap-8">
        <div className="flex md:border-2 flex-col md:px-4 py-4 mt-12 rounded-xl  gap-6 lg:flex-row">
          <div className="flex w-full max-w-xl flex-col gap-4">
            <div className="w-full h-full rounded-md overflow-hidden ">
              <img
                src="./hero-main.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className=" flex items-center justify-between gap-2">
              <p className="font-semibold text-3xl">
                Lifestyle- A Brand for Clot...
              </p>
              <div className=" flex gap-2 items-center justify-center">
                <img src="./golden-star.svg" alt="" />
                <p className=" text-2xl font-semibold mt-1 ">3.9</p>
              </div>
            </div>
            <p className="text-primary-gray-light overflow-y-auto max-h-[4.5rem] ">
              The Lifestyle stores have a multi-level store format, which is
              normally spread over two or three floors that provides a square
              line-of-sight, allowing customers to view the product sections in
              a single glance. Each Lifestyle store offers womenswear, menswear,
              kidswear, footwear, bags, beauty, skincare & accessories such as
              watches, fragrances, sunglasses.
            </p>
            <div className=" flex gap-2">
              <Link
                target="_blank"
                href={
                  "https://www.google.com/maps/search/MGF Metropolitan Bhawani Singh Marg, Sahakar Bhawan Circle, 22 Godam Cir, opposite Nehru, Durgadas Colony, C Scheme, Ashok Nagar, Jaipur"
                }
                className=" p-0.5 text-red-500 shrink-0 size-5 flex items-center justify-center border-2 rounded-full border-red-500"
              >
                <CornerUpRightIcon size={14} strokeWidth={3} />
              </Link>
              <p className=" text-primary-gray">
                MGF Metropolitan Bhawani Singh Marg, Sahakar Bhawan Circle, 22
                Godam Cir, opposite Nehru, Durgadas Colony, C Scheme, Ashok
                Nagar, Jaipur, Rajasthan 302006
              </p>
            </div>
            <div className=" flex flex-col gap-0.5">
              <p className=" text-2xl font-medium">Brand we have</p>
              <p className=" text-gray-600">Selece your trusted brand</p>
              <div className=" flex flex-wrap gap-2 items-center">
                {[
                  "H&M",
                  "Puma",
                  "Forever 21",
                  "Gap",
                  "Snitch",
                  "Levi’s",
                  "Marks & Spencer",
                ].map((data) => {
                  return (
                    <div
                      key={data}
                      className=" py-1 px-2 border border-gray-600 text-gray-700 cursor-pointer font-semibold text-sm rounded-md"
                    >
                      {data}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=" flex gap-2 justify-between items-center">
              <div className=" flex md:items-center gap-4 flex-col md:flex-row">
                <div className="relative flex gap-2 items-center">
                  <Clock className=" text-red-500" size={18} />
                  <p
                    className=" text-gray-800 cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    {selectedTime}
                  </p>
                  {isDropdownOpen ? (
                    <ChevronUpIcon
                      size={18}
                      className=" text-primary-gray"
                      onClick={toggleDropdown}
                    />
                  ) : (
                    <ChevronDownIcon
                      size={18}
                      className=" text-primary-gray"
                      onClick={toggleDropdown}
                    />
                  )}
                  {isDropdownOpen && (
                    <div className="absolute top-full mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                      <p
                        className="p-2 text-gray-800 cursor-pointer"
                        onClick={() => handleSelectTime("10:00 AM - 06:00 PM")}
                      >
                        10:00 AM - 06:00 PM
                      </p>
                      <p
                        className="p-2 text-gray-800 cursor-pointer"
                        onClick={() => handleSelectTime("09:00 AM - 05:00 PM")}
                      >
                        09:00 AM - 05:00 PM
                      </p>
                      <p
                        className="p-2 text-gray-800 cursor-pointer"
                        onClick={() => handleSelectTime("08:00 AM - 04:00 PM")}
                      >
                        08:00 AM - 04:00 PM
                      </p>
                    </div>
                  )}
                </div>
                <div className=" flex gap-2 items-center">
                  <Phone className=" text-red-500" size={18} />
                  <p className=" text-gray-800">+91 - 8112XXXXXX</p>
                </div>
              </div>
              <div className=" flex items-center gap-3">
                <ThumbsUpButton />
                <ShareButton />
              </div>
            </div>
            <div className=" w-full items-center gap-1 flex">
              <ChevronLeftCircle className="shrink-0" size={20} />
              <div className="flex overflow-x-scroll py-3 hide-scrollbar items-center gap-6">
                <img
                  src="./hero-small.png"
                  className="w-28 h-auto shrink-0"
                  alt=""
                />
                <img
                  src="./hero-small.png"
                  className="w-28 h-auto shrink-0"
                  alt=""
                />
                <img
                  src="./hero-small.png"
                  className="w-28 h-auto shrink-0"
                  alt=""
                />
                <img
                  src="./hero-small.png"
                  className="w-28 h-auto shrink-0"
                  alt=""
                />
                <img
                  src="./hero-small.png"
                  className="w-28 h-auto shrink-0"
                  alt=""
                />
              </div>
              <ChevronRightCircle className="shrink-0" size={20} />
            </div>
          </div>
        </div>

        <StoreMenuNavBar />

        <div className=" flex  flex-col md:flex-row gap-6 w-full">
          <AllOffers
            showOngoingOffers={showOngoingOffers}
            setShowOngoingOffers={setShowOngoingOffers}
            showClosingSoonOffers={showClosingSoonOffers}
            setShowClosingSoonOffers={setShowClosingSoonOffers}
            showUpcomingOffers={showUpcomingOffers}
            setShowUpcomingOffers={setShowUpcomingOffers}
          />
          <OtherOutlet />
        </div>
        <p className=" text-gray-500">
          T&C Apply <span className=" text-red-500">*</span>{" "}
        </p>
        <Gallary />
        <ReviewUs />
      </div>

      <Footer />
    </div>
  );
};

export default Page;

function AllOffers({
  showOngoingOffers,
  setShowOngoingOffers,
  showClosingSoonOffers,
  setShowClosingSoonOffers,
  showUpcomingOffers,
  setShowUpcomingOffers,
}) {
  return (
    <div className=" border w-full p-4 rounded-lg ">
      <p className=" text-4xl font-semibold py-2">All Offers</p>
      <div className=" items-center w-full border-b-2 border-gray-200 py-2 flex gap-2">
        <input
          type="checkbox"
          className="size-3 bg-primary-red shrink-0"
          checked={showOngoingOffers}
          onChange={() => setShowOngoingOffers(!showOngoingOffers)}
        />
        <p className=" font-medium">Ongoing offers</p>
        <input
          type="checkbox"
          className="size-3 bg-primary-red shrink-0"
          checked={showClosingSoonOffers}
          onChange={() => setShowClosingSoonOffers(!showClosingSoonOffers)}
        />
        <p className=" font-medium">Closing soon</p>
        <input
          type="checkbox"
          className="size-3 bg-primary-red shrink-0"
          checked={showUpcomingOffers}
          onChange={() => setShowUpcomingOffers(!showUpcomingOffers)}
        />
        <p className=" font-medium">Upcoming Offers</p>
      </div>
      <div className=" flex mt-3 max-h-96 overflow-y-scroll px-2  flex-col gap-2">
        {showOngoingOffers && (
          <>
            <div className=" lg:h-28 flex flex-col lg:flex-row gap-3 lg:gap-6 lg:items-center  py-1 border-b">
              <div className=" flex lg:items-center gap-2">
                <img
                  src="./hero-small.png"
                  className=" lg:h-full w-24 lg:w-auto"
                  alt=""
                />
                <p className=" text-gray-600">
                  <span className=" text-red-500">Flat 25% Off</span> on shirts
                  and Trousers
                </p>
              </div>
              <p className="shrink-0 lg:ml-auto">
                Valid till <span className=" text-red-500">20th Mar</span>
              </p>
            </div>
            <div className=" lg:h-28 flex flex-col lg:flex-row gap-3 lg:gap-6 lg:items-center  py-1 border-b">
              <div className=" flex lg:items-center gap-2">
                <img
                  src="./hero-small.png"
                  className=" lg:h-full w-24 lg:w-auto"
                  alt=""
                />
                <p className=" text-gray-600">
                  <span className=" text-red-500">Flat Rs 1,000 Off</span> on
                  Smart Phones Above Rs. 10,000
                </p>
              </div>
              <p className="shrink-0 lg:ml-auto">
                Valid till <span className=" text-red-500">22nd Mar</span>
              </p>
            </div>
          </>
        )}
        {showClosingSoonOffers && (
          <>
            <div className=" lg:h-28 flex flex-col lg:flex-row gap-3 lg:gap-6 lg:items-center  py-1 border-b">
              <div className=" flex lg:items-center gap-2">
                <img
                  src="./hero-small.png"
                  className=" lg:h-full w-24 lg:w-auto"
                  alt=""
                />
                <p className=" text-gray-600">
                  <span className=" text-red-500">Buy 1 get 1</span> on men
                  Shirts
                </p>
              </div>
              <p className="shrink-0 lg:ml-auto">
                Valid till <span className=" text-red-500">25th Mar</span>
              </p>
            </div>
            <div className=" lg:h-28 flex flex-col lg:flex-row gap-3 lg:gap-6 lg:items-center  py-1 border-b">
              <div className=" flex lg:items-center gap-2">
                <img
                  src="./hero-small.png"
                  className=" lg:h-full w-24 lg:w-auto"
                  alt=""
                />
                <p className=" text-gray-600">
                  <span className=" text-red-500">Flat 25% Off</span> on shirts
                  and Trousers
                </p>
              </div>
              <p className="shrink-0 lg:ml-auto">
                Valid till <span className=" text-red-500">20th Mar</span>
              </p>
            </div>
          </>
        )}
        {showUpcomingOffers && (
          <>
            <div className=" lg:h-28 flex flex-col lg:flex-row gap-3 lg:gap-6 lg:items-center  py-1 border-b">
              <div className=" flex lg:items-center gap-2">
                <img
                  src="./hero-small.png"
                  className=" lg:h-full w-24 lg:w-auto"
                  alt=""
                />
                <p className=" text-gray-600">
                  <span className=" text-red-500">Flat 50% Off</span> on all
                  items
                </p>
              </div>
              <p className="shrink-0 lg:ml-auto">
                Valid till <span className=" text-red-500">30th Mar</span>
              </p>
            </div>
            <div className=" lg:h-28 flex flex-col lg:flex-row gap-3 lg:gap-6 lg:items-center  py-1 border-b">
              <div className=" flex lg:items-center gap-2">
                <img
                  src="./hero-small.png"
                  className=" lg:h-full w-24 lg:w-auto"
                  alt=""
                />
                <p className=" text-gray-600">
                  <span className=" text-red-500">Flat 10% Off</span> on
                  electronics
                </p>
              </div>
              <p className="shrink-0 lg:ml-auto">
                Valid till <span className=" text-red-500">28th Mar</span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
function OtherOutlet() {
  return (
    <div className=" border w-full p-4 rounded-lg ">
      <p className=" text-4xl font-semibold py-2">Other Outlets</p>
      <div className=" items-center w-full border-b-2 border-gray-200 h-10 py-2 flex gap-2"></div>
      <div className=" flex mt-3 max-h-96 overflow-y-scroll px-2  flex-col gap-2">
        {[1, 2, 3, 4, 5, 6].map((idx) => {
          return (
            <div
              key={idx}
              className=" lg:h-28 flex flex-col lg:flex-row gap-3 lg:items-center  py-1 border-b"
            >
              <div className=" w-full flex gap-3">
                <img
                  src="./hero-small.png"
                  className=" lg:h-full w-24 lg:w-auto"
                  alt=""
                />
                <div className=" flex flex-col gap-2 justify-between">
                  <p className=" font-medium">Happy Shoppy Brand of Clothes</p>
                  <div className=" flex items-center gap-2">
                    <img src="./golden-star.svg" className=" size-4" alt="" />
                    <p className=" text-xl font-semibold">4.1</p>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col gap-2">
                <div className=" flex items-center gap-2">
                  <div className=" p-0.5 text-red-500 shrink-0 size-5 flex items-center justify-center border-2 rounded-full border-red-500">
                    <CornerUpRightIcon size={14} strokeWidth={3} />
                  </div>
                  <p className=" text-xl font-semibold">0.5</p>
                </div>
                <p className=" text-gray-500">
                  MI Road, Sansar Chandra Road, Ajmer Road, Jaipur, Rajasth...
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Gallary() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollContainerRef1 = useRef(null);
  const scrollContainerRef2 = useRef(null);

  const handleScroll = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col w-full gap-6">
      <GallaryDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      <p className="text-xl font-semibold">Similar Stores Having Offer</p>
      <div className="flex gap-3 items-center w-full">
        <ChevronLeftCircleIcon
          onClick={() => handleScroll(scrollContainerRef1, "left")}
          className="cursor-pointer"
        />
        <div
          onClick={() => setIsOpen(true)}
          className="w-full flex overflow-x-scroll hide-scrollbar gap-4"
          ref={scrollContainerRef1}
        >
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
        </div>
        <ChevronRightCircle
          onClick={() => handleScroll(scrollContainerRef1, "right")}
          className="cursor-pointer"
        />
      </div>
      <p className="text-xl font-semibold mt-4">Customers also liked</p>
      <div className="flex gap-3 items-center w-full">
        <ChevronLeftCircleIcon
          onClick={() => handleScroll(scrollContainerRef2, "left")}
          className="cursor-pointer"
        />
        <div
          onClick={() => setIsOpen(true)}
          className="w-full flex overflow-x-scroll hide-scrollbar gap-4"
          ref={scrollContainerRef2}
        >
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
        </div>
        <ChevronRightCircle
          onClick={() => handleScroll(scrollContainerRef2, "right")}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

function ReviewUs() {
  return (
    <div>
      <p className=" text-2xl font-semibold">Review Us</p>
      <div className=" flex flex-col md:flex-row gap-4 w-full">
        <div className=" border p-4 h-fit rounded-md w-full flex flex-col gap-4">
          <div className=" flex gap-3 justify-between items-center">
            <img src="./review-profile.png" alt="" />
            <div className=" flex gap-4 items-center">
              <p className=" font-semibold">Rate Us</p>
              <div className=" flex gap-3 items-center">
                {["Excellent", "Good", "Average", "Poor", "Bad"].map((item) => {
                  return (
                    <div
                      key={item}
                      className=" flex w-full items-center flex-col"
                    >
                      <Star className=" text-yellow-500" size={28} />
                      <p className=" text-[0.6rem]">{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <textarea
            className=" border rounded-md p-2"
            placeholder="Write your review here"
            rows={4}
          />
          <ThankYou />
        </div>
        <div className=" w-full flex flex-col gap-4">
          {[0, 1].map(() => {
            return (
              <div
                key={Math.random()}
                className=" border p-4 rounded-md w-full flex flex-col gap-4"
              >
                <div className=" flex gap-3 items-center">
                  <img src="./review-profile.png" alt="" />
                  <div className=" flex gap-1 flex-col-reverse">
                    <div className=" flex gap-1 items-center">
                      <Star
                        fill="#eab308"
                        className=" text-yellow-500"
                        size={18}
                      />
                      <Star
                        fill="#eab308"
                        className=" text-yellow-500"
                        size={18}
                      />
                      <Star
                        fill="#eab308"
                        className=" text-yellow-500"
                        size={18}
                      />
                      <Star
                        fill="#eab308"
                        className=" text-yellow-500"
                        size={18}
                      />
                      <Star className=" text-yellow-500" size={18} />
                    </div>
                    <p className=" text-gray-500 font-semibold">
                      Shruti Rathore
                    </p>
                  </div>
                </div>
                <p className=" text-primary-gray">
                  "I highly recommend this store for shopping aspects" - Based
                  on the store's outstanding pricing and customer service, the
                  reviewer wholeheartedly endorses the store as a top choice for
                  anyone looking to make a purchase, ensuring a satisfying and
                  hassle-free shopping experience.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StoreMenuNavBar() {
  const [subMenuNameToShow, setSubMenuNameToShow] = useState(null);
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <div className=" relative flex flex-wrap w-full gap-3 items-center">
      {Menus.map((menu, i) => {
        const storeCategoryMenu = storeMenu[i];
        return (
          <StoreMenuNavItem
            key={i}
            subMenuNameToShow={subMenuNameToShow}
            setShowSubMenu={setShowSubMenu}
            setSubMenuNameToShow={setSubMenuNameToShow}
            menu={menu}
            storeCategoryMenu={storeCategoryMenu}
          />
        );
      })}
      {/* For mobile screen */}
      {showSubMenu && (
        <div className=" block lg:hidden rounded-md bg-gray-50 py-3 px-4 w-full absolute -bottom-3 translate-y-full min-h-64">
          {Menus.map((menu, i) => {
            const storeCategoryMenu = storeMenu[i];
            if (menu.label === subMenuNameToShow) {
              const allStoreSubMenu = menu.subMenu;
              return (
                <StoreMenuSubItem
                  key={i}
                  storeSubMenu={allStoreSubMenu}
                  storeCategoryMenu={storeCategoryMenu}
                />
              );
            } else {
              return;
            }
          })}
        </div>
      )}
    </div>
  );
}
function StoreMenuSubItem({ storeSubMenu, storeCategoryMenu }) {
  return (
    <div className="flex flex-col">
      {storeSubMenu.map((item, index) => {
        const storeSubMenu = storeCategoryMenu?.subMenu[index];
        return (
          <MobileNavList
            key={index}
            navItems={item}
            storeSubMenu={storeSubMenu}
          />
        );
      })}
    </div>
  );
}

function MobileNavList({ navItems, storeSubMenu }) {
  const [showFullMenu, setShowFullMenu] = useState(false);
  const hasItems = storeSubMenu?.items?.length > 0;
  return (
    <div>
      <div
        onClick={() => setShowFullMenu((prev) => !prev)}
        className=" border-b py-2 flex gap-2 justify-between items-center"
      >
        <p
          className={` font-semibold  ${
            hasItems ? "text-primary-red" : "text-primary-red/50"
          }`}
        >
          {navItems.title}
        </p>
        <ChevronDownIcon
          size={20}
          className={` ${
            showFullMenu && "rotate-180"
          } duration-200 transition-all`}
        />
      </div>
      {showFullMenu && (
        <div className=" flex flex-col border-b py-2 gap-1 pl-2">
          {navItems.items.map((item, i) => {
            const isAvailable =
              storeSubMenu.items.filter((subItem) => subItem.name === item.name)
                .length > 0;
            return (
              <p
                className={` text-sm  ${
                  isAvailable ? "text-black" : " text-gray-400"
                } `}
                key={i}
              >
                {item.name}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}
