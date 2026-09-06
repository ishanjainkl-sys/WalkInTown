"use client";
import ChangePassDialog from "@/components/dialog/changePassDialog";
import GetPsswordOTP from "@/components/dialog/changePassOTP";
import CreateUserDialog from "@/components/dialog/createUserDialog";
import GetCreateOTP from "@/components/dialog/createUserOTP";
import LoginDialog from "@/components/dialog/loginUserDialog";
import Footer from "@/components/footer";
import { HeroCarousel } from "@/components/heroCarousel";
import NavBar from "@/components/nav/navBar";
import { ChevronLeftCircle, ChevronRightCircle, MapPin } from "lucide-react";
import {
  ChevronLeftCircleIcon,
  ChevronRightCircleIcon,
  MapPinIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ReactFlipCard from "reactjs-flip-card";
import { Card3DDeals, Card3DStores } from "@/components/card3D";

const Page = () => {
  const [isCreateUser, setIsCreateUser] = React.useState(false);
  const [isUserLogin, setIsUserLogin] = React.useState(false);
  const [isPassOTP, setIsPassOTP] = React.useState(false);
  const [isCreateOTP, setIsCreateOTP] = React.useState(false);
  const [isUerPassword, setIsUerPassword] = React.useState(false);

  // For location
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(position.coords);
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      <div className=" w-full mx-auto">
        <HeroCarousel />
      </div>
      <div className="relative">
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
      </div>

      <ExploreCategory />

      <PopularDetails />
      <PopularStores />

      <div className="flex flex-col bg-white gap-14 px-4 py-12 pb-20 lg:px-6">
        <div className="flex flex-col gap-2 lg:gap-0 items-center">
          <p className="text-center text-2xl font-semibold">Shop by Brands</p>
          <p className="text-center text-lg text-primary-gray">
            Find your favorite brands and explore trending names, all in one
            place.
          </p>
        </div>
        <LogoCarousel />
      </div>

      <Footer />
    </div>
  );
};

export default Page;

const logos = [
  { src: "./logo-1.png", alt: "Logo 1" },
  { src: "./red-dot.svg", alt: "Red Dot 1" },
  { src: "./logo-2.png", alt: "Logo 2" },
  { src: "./red-dot.svg", alt: "Red Dot 2" },
  { src: "./logo-3.png", alt: "Logo 3" },
  { src: "./red-dot.svg", alt: "Red Dot 3" },
  { src: "./logo-4.png", alt: "Logo 4" },
  { src: "./red-dot.svg", alt: "Red Dot 4" },
  { src: "./logo-5.png", alt: "Logo 5" },
  { src: "./red-dot.svg", alt: "Red Dot 5" },
  { src: "./logo-6.png", alt: "Logo 6" },
  { src: "./red-dot.svg", alt: "Red Dot 6" },
  { src: "./logo-7.png", alt: "Logo 7" },
];

function LogoCarousel() {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto w-full">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-1 hover:bg-gray-100"
      >
        <ChevronLeftCircle className="shrink-0 text-gray-600" size={24} />
      </button>

      <div
        ref={scrollRef}
        className="flex items-center overflow-x-scroll hide-scrollbar gap-3 lg:gap-6 px-8"
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`w-auto shrink-0 ${
              logo.src.includes("logo") ? "h-20" : "h-2"
            }`}
          >
            <img
              src={logo.src}
              className="w-auto h-full object-contain"
              alt={logo.alt}
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-1 hover:bg-gray-100"
      >
        <ChevronRightCircle className="shrink-0 text-gray-600" size={24} />
      </button>
    </div>
  );
}

const StoreCard = ({ name, imgSrc, rating, address }) => {
  return (
    <Link
      href={`/store`}
      className="max-w-56 shrink-0 rounded-lg overflow-hidden bg-white w-full flex flex-col"
    >
      <div className="w-full max-w-56 overflow-hidden h-48">
        <img
          src={imgSrc}
          className="w-full h-full object-cover"
          alt={`${name} store`}
        />
      </div>
      <div className="flex flex-col px-3 py-2 pb-6">
        <div className="flex justify-between w-full gap-2">
          <p>{name}</p>
          <div className="flex items-center gap-1">
            <img src="./star.png" alt="Rating star" />
            <p className="font-semibold">{rating}</p>
          </div>
        </div>
        <p className="text-primary-gray line-clamp-1 text-sm">{address}</p>
      </div>
    </Link>
  );
};

// Main Component
const StoreList = ({ storeData }) => {
  return (
    <div className="flex w-full gap-16 mt-4 md:mt-8 px-4 md:pl-6 overflow-x-scroll hide-scrollbar">
      {storeData.map((store, index) => (
        <StoreCard
          key={index}
          name={store.name}
          imgSrc={store.imgSrc}
          rating={store.rating}
          address={store.address}
        />
      ))}
    </div>
  );
};

function ExploreCategory() {
  return (
    <div className="w-full mt-8 min-h-96 relative">
      <div className="absolute hidden md:block top-0 left-0">
        <img
          src="./bg-dots.png"
          className="h-52 -z-10 w-auto object-contain"
          alt=""
        />
      </div>
      <div className="absolute hidden md:block top-8 right-0">
        <img
          src="./bg-dots.png"
          className="h-52 w-auto object-contain"
          alt=""
        />
      </div>

      <div className="flex mx-auto max-w-7xl px-4 w-full pb-12 flex-col gap-10">
        <p className="px-6 md:px-4  max-w-3xl font-semibold w-full text-primary-gray text-center mt-6 mx-auto text-2xl md:text-3xl">
          Explore our wide range of categories to find exactly what you need!
        </p>
        <div className="w-full flex flex-col md:flex-row [&>*]:h-60 md:[&>*]:h-96 gap-2">
          {/* Women Card on the Left */}
          <Link
            href={"/search"}
            className="col-span-1 row-span-2 w-full rounded-md overflow-hidden relative h-full"
          >
            <p className="absolute bottom-3 left-4 text-white z-40 text-2xl font-semibold">
              Women
            </p>
            <img
              src="./women.png"
              alt="Women"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </Link>

          <Link
            href={"/search"}
            className=" w-full h-full flex md:flex-col gap-2"
          >
            <div className="col-span-1 row-span-1 w-full rounded-md overflow-hidden relative h-full">
              <p className="absolute bottom-3 left-4 text-white z-40 text-xl font-semibold">
                Home Appliances
              </p>
              <img
                src="./home-appliences.png"
                alt="Home Appliances"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 w-full rounded-md overflow-hidden relative h-full">
              <p className="absolute bottom-3 left-4 text-white z-40 text-xl font-semibold">
                Men
              </p>
              <img
                src="./men.png"
                alt="Home Appliances"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </Link>

          <Link
            href={"/search"}
            className="col-span-1 row-span-2 w-full rounded-md overflow-hidden relative h-full"
          >
            <p className="absolute bottom-3 left-4 text-white z-40 text-2xl font-semibold">
              Kids
            </p>
            <img
              src="./kids.png"
              alt="Women"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </Link>

          <Link
            href={"/search"}
            className=" flex md:flex-col w-full h-full gap-2"
          >
            <div className="col-span-1 row-span-1 w-full rounded-md overflow-hidden relative h-full">
              <p className="absolute bottom-3 left-4 text-white z-40 text-xl font-semibold">
                Home Decore
              </p>
              <img
                src="./home-decore.png"
                alt="Home Appliances"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 w-full rounded-md overflow-hidden relative h-full">
              <p className="absolute bottom-3 left-4 text-white z-40 text-xl font-semibold">
                Electronics
              </p>
              <img
                src="./electronics.png"
                alt="Home Appliances"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </Link>

          <Link
            href={"/search"}
            className="col-span-1 row-span-2 w-full rounded-md overflow-hidden relative h-full"
          >
            <p className="absolute bottom-3 left-4 text-white z-40 text-2xl font-semibold">
              Beauty
            </p>
            <img
              src="./beauty.png"
              alt="Women"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

const DiscountCard = ({ discount, storeName, imageSrc }) => {
  return (
    <div className="w-60 md:w-64 h-96 rounded-md shrink-0 overflow-hidden relative">
      <img
        src={imageSrc}
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt={storeName}
      />
      <div className="bg-gradient-to-b from-transparent to-black absolute top-0 left-0 w-full h-full"></div>
      <div className="absolute bottom-6 left-4 flex flex-col gap-1">
        <p className="font-semibold text-white text-5xl">{discount}% off</p>
        <p className="text-white font-semibold text-lg">{storeName}</p>
      </div>
    </div>
  );
};

function PopularDetails() {
  const scrollContainerRef1 = useRef("");
  const handleScroll1 = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -252 : 252,
        behavior: "smooth",
      });
    }
  };

  const zudioList = [
    "Women Fassion",
    "Kids Wear",
    "Men Collection",
    "Sweaters & Muffers",
    "Sweatshirt",
    "Men Accessories",
    "Women Accessories",
  ];
  const storeData = [
    { discount: 10, storeName: "Karin Store", imageSrc: "./w1.png" },
    { discount: 20, storeName: "Samanth Store", imageSrc: "./w2.png" },
    { discount: 30, storeName: "Krishna Group", imageSrc: "./w3.png" },
    { discount: 15, storeName: "Elite Mart", imageSrc: "./w1.png" },
    { discount: 25, storeName: "Trendy Hub", imageSrc: "./w2.png" },
    { discount: 35, storeName: "Fashion Fiesta", imageSrc: "./w3.png" },
  ];
  const styles = {
    card: {
      // background: "blue",
      color: "white",
      borderRadius: 20,
    },
  };

  return (
    <div className=" bg-yellow-100 overflow-hidden min-h-96 px-4 w-full py-6 relative">
      <div className="absolute hidden md:block top-6 left-0">
        {/* <img
          src="./yellow-dots.png"
          className="h-52 -z-10 w-auto object-contain"
          alt=""
        /> */}
      </div>
      <div className=" z-20 flex flex-col items-center gap-1">
        <p className=" text-3xl md:text-4xl font-semibold text-center ">
          Popular Deals Of The Day
        </p>
        <p className=" text-gray-600 md:text-xl  font-semibold text-center">
          Discover exciting discounts and offers curated just for you.
        </p>
      </div>

      <div className=" z-50 max-w-7xl justify-center mx-auto items-center gap-2 flex flex-row ">
        <ChevronLeftCircleIcon
          className=" shrink-0  cursor-pointer"
          onClick={() => handleScroll1(scrollContainerRef1, "left")}
        />

        <div className=" flex gap-2 mt-4 items-center overflow-x-scroll hide-scrollbar">
          <div className="flex py-6 overflow-hidden" ref={scrollContainerRef1}>
            <div className="flex gap-4 justify-center ">
              {storeData.map((store, index) => (
                <Card3DDeals
                  key={index}
                  frontSide={
                    <div className="w-full h-full rounded-md shrink-0 overflow-hidden relative">
                      <DiscountCard {...store} />
                    </div>
                  }
                  backSide={{
                    storeName: store.storeName,
                    discountPercentage: 18,
                    zudioList: zudioList,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <ChevronRightCircleIcon
          className=" cursor-pointer shrink-0"
          onClick={() => handleScroll1(scrollContainerRef1, "right")}
        />
      </div>
    </div>
  );
}

const RatingCard = ({ rating, storeName, imageSrc }) => {
  return (
    <div className="w-60 md:w-72 h-96 rounded-md shrink-0 overflow-hidden relative">
      <img
        src={imageSrc}
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt={storeName}
      />
      <div className="bg-gradient-to-b from-transparent to-black absolute top-0 left-0 w-full h-full"></div>
      <div className="absolute bottom-6 left-4 flex flex-col gap-1">
        <div className="font-semibold flex text-white text-5xl">
          <img src="./golden-star.png" className="size-12" alt="star" />
          <p>{rating}</p>
        </div>
        <p className="text-white font-semibold text-lg">{storeName}</p>
      </div>
    </div>
  );
};

function PopularStores() {
  const scrollContainerRef = useRef("");
  const handleScroll = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };
  const styles = {
    card: {
      // background: "blue",
      color: "white",
      borderRadius: 20,
    },
  };
  const zudioList = [
    "Women",
    "Kids Wear",
    "Men Collection",
    "Sweaters & Muffers",
    "Sweatshirt",
    "Men Accessories",
    "Women Accessories",
  ];
  const ratingData = [
    { rating: 4.6, storeName: "Karin Store", imageSrc: "./w1.png" },
    { rating: 4.2, storeName: "Radhe-Krishnan Store", imageSrc: "./w2.png" },
    {
      rating: 3.2,
      storeName: "Khushi Kirana Store",
      imageSrc: "./khushi-kirana-store.png",
    },
    { rating: 4.8, storeName: "Elite Supermarket", imageSrc: "./w1.png" },
    { rating: 3.9, storeName: "Budget Mart", imageSrc: "./w2.png" },
    {
      rating: 4.5,
      storeName: "Everyday Essentials",
      imageSrc: "./khushi-kirana-store.png",
    },
  ];

  return (
    <div className=" bg-pink-100 overflow-hidden mt-6 min-h-96 px-4 w-full py-6 relative">
      <div className="absolute hidden md:block bottom-6 right-10 z-10"></div>
      <div className=" flex flex-col items-center gap-1">
        <p className=" text-3xl md:text-4xl font-semibold text-center ">
          Popular Stores Of The Month
        </p>
        <p className=" text-gray-600 md:text-xl  font-semibold text-center">
          Discover Star of the Month curated just for you.
        </p>
      </div>

      <div className=" z-20 max-w-7xl mt-4 justify-center mx-auto items-center gap-2 flex flex-row ">
        <ChevronLeftCircleIcon
          className=" shrink-0"
          onClick={() => handleScroll(scrollContainerRef, "left")}
        />

        {/* Cards */}

        <div
          ref={scrollContainerRef}
          className="flex h-96 gap-4 overflow-hidden"
        >
          <div className="flex gap-4  justify-center ">
            {ratingData.map((store, index) => (
              <Card3DStores
                key={index}
                frontSide={
                  <div className="w-60 md:w-64 h-96 rounded-md shrink-0 overflow-hidden relative">
                    <RatingCard {...store} />
                  </div>
                }
                backSide={{
                  storeName: store.storeName,
                  ratingCount: 4.6,
                  zudioList: zudioList,
                }}
              />
            ))}
          </div>
        </div>
        <ChevronRightCircleIcon
          className=" shrink-0"
          onClick={() => handleScroll(scrollContainerRef, "right")}
        />
      </div>
    </div>
  );
}
