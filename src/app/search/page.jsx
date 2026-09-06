"use client";
import BrandsShowMore from "@/components/dialog/brandsShowMore";
import ChangePassDialog from "@/components/dialog/changePassDialog";
import GetPsswordOTP from "@/components/dialog/changePassOTP";
import CreateUserDialog from "@/components/dialog/createUserDialog";
import GetCreateOTP from "@/components/dialog/createUserOTP";
import BeautyMenu from "@/components/dialog/filter/beauty";
import ElectronicsMenu from "@/components/dialog/filter/electronics";
import HomeAppliencesMenu from "@/components/dialog/filter/homeAppliences";
import HomeDecoreMenu from "@/components/dialog/filter/homeDecore";
import MenuKids from "@/components/dialog/filter/kid";
import MenMenu from "@/components/dialog/filter/men";
import WomenMenu from "@/components/dialog/filter/women";
import LocationShowMore from "@/components/dialog/locationSeeMore";
import LoginDialog from "@/components/dialog/loginUserDialog";
import Footer from "@/components/footer";
import { HeroCarousel } from "@/components/heroCarousel";
import { ShareButton, ThumbsUpButton } from "@/components/likeAndShare";
import NavBar from "@/components/nav/navBar";
import UserLoginProvider from "@/components/userLoginProvider";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

const Page = () => {
  const [isCreateUser, setIsCreateUser] = React.useState(false);
  const [isUserLogin, setIsUserLogin] = React.useState(false);
  const [isPassOTP, setIsPassOTP] = React.useState(false);
  const [isCreateOTP, setIsCreateOTP] = React.useState(false);
  const [isUerPassword, setIsUerPassword] = React.useState(false);

  return (
    <div>
      <HeroCarousel />
      <div className="relative flex flex-col justify-center gap-6">
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
      <Suspense fallback={<div>Loading...</div>}>
        <StoreSection />
      </Suspense>

      <Footer />
    </div>
  );
};

export default Page;

function StoreSection() {
  // All the filtered Values
  const [filterValueList, setFilterValueList] = useState({
    categories: [],
    brands: [],
    locations: [],
    suggesions: [],
  });

  const params = useSearchParams();

  useEffect(() => {
    if (!params.get("filter")) return;
    setFilterValueList({
      categories: [params.get("filter")],
      brands: [],
      locations: [],
      suggesions: [],
    });
  }, [params]);
  return (
    <div className="flex flex-col lg:flex-row justify-center">
      <div className="lg:py-10 px-6 w-full lg:max-w-72 lg:flex flex-col gap-4">
        <div className="flex flex-col gap-0">
          <p className="font-semibold mt-12 text-lg">Product Categories</p>
          <p className=" hidden lg:block text-sm text-gray-600">
            Select Categories for Shop
          </p>
          <div className="flex overflow-x-auto py-3 w-full md:flex-wrap gap-2">
            <div className="shrink-0">
              <MenMenu
                filterValueList={filterValueList.categories}
                setFilterValueList={setFilterValueList}
              />
            </div>
            <div className="shrink-0">
              <WomenMenu
                filterValueList={filterValueList.categories}
                setFilterValueList={setFilterValueList}
              />
            </div>
            <div className="shrink-0">
              <MenuKids
                filterValueList={filterValueList.categories}
                setFilterValueList={setFilterValueList}
              />
            </div>
            <div className="shrink-0">
              <BeautyMenu
                filterValueList={filterValueList.categories}
                setFilterValueList={setFilterValueList}
              />
            </div>
            <div className="shrink-0">
              <HomeDecoreMenu
                filterValueList={filterValueList.categories}
                setFilterValueList={setFilterValueList}
              />
            </div>
            <div className="shrink-0">
              <HomeAppliencesMenu
                filterValueList={filterValueList.categories}
                setFilterValueList={setFilterValueList}
              />
            </div>
            <div className="shrink-0">
              <ElectronicsMenu
                filterValueList={filterValueList.categories}
                setFilterValueList={setFilterValueList}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-3 gap-0">
          <p className="font-semibold text-lg">Brands</p>
          <p className=" text-sm text-gray-600">Select your Trusted Brand</p>
          <div className="flex w-full mt-3 flex-wrap gap-2">
            <SearchByBrand
              filterValueList={filterValueList.brands}
              setFilterValueList={setFilterValueList}
            />
          </div>

          <p className="font-semibold mt-8 text-lg">Area/Location</p>
          <p className=" hidden lg:block text-sm text-gray-600">
            Explore Shops in your Area
          </p>
          <SearchByLoaction
            filterValueList={filterValueList.locations}
            setFilterValueList={setFilterValueList}
          />

          <div className="flex flex-col gap-1 mt-4">
            <p className="font-semibold text-lg mt-2">Suggested</p>
            <Suggestions
              filterValueList={filterValueList.suggesions}
              setFilterValueList={setFilterValueList}
            />
          </div>
        </div>
      </div>

      <div className="py-10 max-w-7xl px-6 flex flex-col w-full gap-3">
        <AllAppliedFilter
          filterValueList={filterValueList}
          setFilterValueList={setFilterValueList}
        />
        <ProductList />
        <ProductList />
        <ProductList />
      </div>
    </div>
  );
}

function Suggestions({ filterValueList, setFilterValueList }) {
  const suggestionList = [
    "Ongoing offer",
    "Closing soon",
    "Upcoming Offers",
    "Closing Today",
  ];

  const [selectedItemsList, setSelectedItemsList] = useState(filterValueList);

  function handleSelectedItem(item) {
    if (selectedItemsList?.includes(item)) {
      setSelectedItemsList(selectedItemsList.filter((i) => i !== item));
    } else {
      setSelectedItemsList([...selectedItemsList, item]);
    }
  }

  function handleApplyChange() {
    setFilterValueList((prev) => ({
      ...prev,
      suggesions: selectedItemsList,
    }));
  }

  function reNewchange() {
    setSelectedItemsList(filterValueList);
  }

  useEffect(() => {
    reNewchange();
  }, [filterValueList]);

  return (
    <div className="flex flex-col gap-1">
      {suggestionList.map((item) => {
        return (
          <div key={item} className="flex gap-2 items-center">
            <input
              onChange={() => handleSelectedItem(item)}
              name="checkbox"
              value={item}
              type="checkbox"
              checked={selectedItemsList?.includes(item)}
              className=" cursor-pointer size-3.5"
            />
            <p className=" font-medium">{item}</p>
          </div>
        );
      })}
      <div
        onClick={handleApplyChange}
        className=" border border-primary-red flex gap-2 items-center justify-center duration-200 bg-primary-red px-4 py-2 rounded-md cursor-pointer text-white text-center font-semibold mt-6"
      >
        <p>Apply</p>
        <Check size={20} />
      </div>
    </div>
  );
}

function AllAppliedFilter({ filterValueList, setFilterValueList }) {
  function handleRemoveSuggesions(value) {
    setFilterValueList((prev) => ({
      ...prev,
      suggesions: prev.suggesions.filter((item) => item !== value),
    }));
  }

  function handleRemoveLocations(value) {
    setFilterValueList((prev) => ({
      ...prev,
      locations: prev.locations.filter((item) => item !== value),
    }));
  }

  function handleRemoveBrands(value) {
    setFilterValueList((prev) => ({
      ...prev,
      brands: prev.brands.filter((item) => item !== value),
    }));
  }

  function handleRemoveCategories(value) {
    setFilterValueList((prev) => ({
      ...prev,
      categories: prev.categories.filter((item) => item !== value),
    }));
  }

  return (
    <div className="flex gap-2 flex-wrap items-center">
      {filterValueList.suggesions.map((data) => {
        return (
          <div
            key={data}
            className=" gap-1 justify-center rounded-md bg-secondary-red font-semibold flex items-center px-2 py-1.5"
          >
            <p className="text-red-950">{data}</p>
            <X
              onClick={() => handleRemoveSuggesions(data)}
              className=" cursor-pointer text-red-950"
              size={18}
            />
          </div>
        );
      })}
      {filterValueList.locations.map((data) => {
        return (
          <div
            key={data}
            className=" gap-1 justify-center rounded-md bg-secondary-red font-semibold flex items-center px-2 py-1.5"
          >
            <p className="text-red-950">{data}</p>
            <X
              onClick={() => handleRemoveLocations(data)}
              className=" cursor-pointer text-red-950"
              size={18}
            />
          </div>
        );
      })}
      {filterValueList.brands.map((data) => {
        return (
          <div
            key={data}
            className=" gap-2 justify-center rounded-md h-8 w-auto bg-secondary-red font-semibold flex items-center px-2 py-1.5"
          >
            <img key={data} className=" shrink-0 h-full " src={data} alt="" />
            <X
              onClick={() => handleRemoveBrands(data)}
              className=" shrink-0 cursor-pointer text-red-950"
              size={18}
            />
          </div>
        );
      })}
      {filterValueList.categories.map((data) => {
        return (
          <div
            key={data}
            className=" gap-1 justify-center rounded-md bg-secondary-red font-semibold flex items-center px-2 py-1.5"
          >
            <p className="text-red-950">{data}</p>
            <X
              onClick={() => handleRemoveCategories(data)}
              className=" cursor-pointer text-red-950"
              size={18}
            />
          </div>
        );
      })}
    </div>
  );
}

function ProductList() {
  return (
    <div className="w-full max-w-7xl flex-col md:flex-row p-6 bg-white border rounded-lg flex gap-8">
      <UserLoginProvider
        className={"h-full max-w-60 rounded-md overflow-hidden w-full"}
      >
        <img
          src="./category1.png"
          className=" h-full w-full object-cover"
          alt=""
        />
      </UserLoginProvider>
      <div className="flex w-full justify-between h-full gap-4 md:gap-4 flex-col">
        <div className=" flex flex-col gap-1 w-full">
          <div className="flex w-full gap-4 justify-between">
            <UserLoginProvider>
              <p className=" text-2xl md:text-3xl font-semibold">Lifestyle</p>
            </UserLoginProvider>
            <div className=" flex items-center gap-1">
              <img
                src="./golden-star.svg"
                className=" size-6 md:size-8"
                alt=""
              />
              <p className=" text-2xl md:text-4xl font-semibold">3.9</p>
            </div>
          </div>
          <UserLoginProvider>
            <p className="text-primary-gray max-w-80">
              A unit of is one of the biggest brand in the tops in women wears.
            </p>
          </UserLoginProvider>
          <Link
            href="https://www.google.com/maps/search/miroad"
            target="_blank"
            className=" mt-1 flex gap-2 items-center"
          >
            <img src="./right-circle.png" className=" size-6 md:size-8" />
            <p className=" md:text-xl">MI Road</p>
          </Link>
          <div className=" mt-1 flex gap-2 items-center justify-between">
            <UserLoginProvider>
              <p className=" text-xl md:text-3xl font-medium">
                35% Off on food items{" "}
                <span className=" text-lg  font-normal">
                  {" "}
                  (Valid till 28th dec)
                </span>{" "}
              </p>
            </UserLoginProvider>
            <ThumbsUpButton />
          </div>
        </div>
        <div className=" flex items-center gap-2">
          <UserLoginProvider>
            <div className=" flex text-base  md:text-lg flex-col gap-2 xl:flex-row">
              <div className=" flex gap-1 items-center">
                <img src="./time.png" alt="" />
                <p>Mon - Fri (11:00 AM - 08:00 PM)</p>
              </div>
              <div className=" flex gap-1 items-center">
                <img src="./phone-red.png" alt="" />
                <p>+91 - 8112XXXXXX</p>
              </div>
            </div>
          </UserLoginProvider>
          <ShareButton className={"ml-auto"} />
        </div>
      </div>
    </div>
  );
}

function SearchByLoaction({ filterValueList, setFilterValueList }) {
  const locations = [
    "Vaishali Nagar",
    "Jagatpura",
    "Civil Lines",
    "C- Scheme",
    "Malviya Nagar",
    "Mansarovar",
    "Ajmer Road",
    "fort lake",
    "amer fort",
    "jal mahal",
    "mukesh art gallery",
    "nargadh fort",
    "Khatu sham ji",
  ];
  const [selectedFields, setSelectedFields] = useState(filterValueList);
  const handleCheckboxChange = (value) => {
    if (selectedFields.includes(value)) {
      const updatedFields = selectedFields.filter((item) => item !== value);
      setSelectedFields(updatedFields);

      setFilterValueList((prev) => ({
        ...prev,
        locations: updatedFields,
      }));
    } else {
      const updatedFields = [...selectedFields, value];
      setSelectedFields(updatedFields);

      setFilterValueList((prev) => ({
        ...prev,
        locations: updatedFields,
      }));
    }
  };

  useEffect(() => {
    setSelectedFields(filterValueList);
  }, [filterValueList]);

  return (
    <div className="flex w-full py-3 overflow-x-auto md:flex-wrap gap-2">
      {locations?.slice(0, 6).map((data) => {
        const isPresect = selectedFields.includes(data);
        return (
          <div
            onClick={() => handleCheckboxChange(data)}
            key={data}
            className={`shrink-0 cursor-pointer py-1 px-2 border border-black font-semibold text-sm rounded-md ${
              isPresect ? "bg-secondary-red" : ""
            }`}
          >
            {data}
          </div>
        );
      })}
      <LocationShowMore
        selectedFields={selectedFields}
        setSelectedFields={setSelectedFields}
        itemsToShow={locations.slice(6)}
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
}

function SearchByBrand({ filterValueList, setFilterValueList }) {
  const brands = [
    "./companies-logo/zara.png",
    "./companies-logo/h&m.png",
    "./companies-logo/puma.png",
    "./companies-logo/forever.png",
    "./companies-logo/gap.png",
    "./logo-1.png",
    "./logo-2.png",
    "./logo-3.png",
    "./logo-4.png",
    "./logo-5.png",
    "./logo-6.png",
    "./logo-7.png",
  ];

  const [selectedFields, setSelectedFields] = useState(filterValueList);
  const handleCheckboxChange = (value) => {
    if (selectedFields.includes(value)) {
      setSelectedFields(selectedFields.filter((item) => item !== value));
      setFilterValueList((prev) => ({
        ...prev,
        brands: selectedFields.filter((item) => item !== value),
      }));
    } else {
      setSelectedFields([...selectedFields, value]);
      setFilterValueList((prev) => ({
        ...prev,
        brands: [...selectedFields, value],
      }));
    }
  };

  useEffect(() => {
    setSelectedFields(filterValueList);
  }, [filterValueList]);

  return (
    <div className="flex w-full pb-3 overflow-x-auto md:flex-wrap gap-2">
      {brands?.slice(0, 6).map((data, idx) => {
        const isPresect = selectedFields.includes(data);
        return (
          <div
            onClick={() => handleCheckboxChange(data)}
            key={idx}
            className={`h-8 cursor-pointer w-auto py-1 px-2 border border-black font-semibold text-sm rounded-md ${
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
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
}
