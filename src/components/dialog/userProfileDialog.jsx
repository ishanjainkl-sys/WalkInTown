import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./../ui/dialog";
import {
  Bell,
  CameraIcon,
  Check,
  Heart,
  MapPin,
  Settings,
  SquareArrowOutUpRight,
  Star,
  User,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { ShareButton, ThumbsUpButton } from "../likeAndShare";
import Link from "next/link";

const UserProfileDialog = ({ isOpen, setIsUserProfile }) => {
  const [currentSection, setCurrentSection] = React.useState("profile");

  return (
    <Dialog open={isOpen}>
      <DialogContent
        className={"max-w-5xl w-full h-full max-h-[70vh] overflow-y-auto"}
      >
        <DialogHeader
          className={
            "flex flex-col space-y-1.5 items-center text-center sm:text-left"
          }
        >
          <DialogTitle className=" ml-auto">
            <X
              className=" ml-auto cursor-pointer"
              size={24}
              color="#4b5563"
              onClick={() => {
                setIsUserProfile(false);
              }}
            />
          </DialogTitle>
          <div className=" w-full">
            <div className=" border-b-4 w-full">
              <div className=" flex flex-col md:flex-row justify-between max-w-7xl w-full mx-auto md:items-center gap-6 py-3">
                <div className=" flex items-center justify-start  gap-2">
                  <p className=" text-xl md:text-4xl font-semibold ">
                    User's Profile Page
                  </p>
                </div>
                <div className=" flex items-center flex-row gap-2">
                  <div className="w-full  flex items-center gap-2">
                    <div
                      onClick={() => setCurrentSection("setting")}
                      className={`w-full cursor-pointer justify-center flex items-center gap-2 border border-primary-red px-3 py-1.5 text-primary-red rounded-md ${
                        currentSection == "setting" &&
                        "bg-primary-red text-white"
                      }`}
                    >
                      <p className=" font-medium">Settings</p>
                      <Settings size={20} />
                    </div>
                  </div>
                  <div className=" w-full flex items-center gap-2">
                    <div
                      onClick={() => setCurrentSection("profile")}
                      className={`w-full cursor-pointer justify-center flex items-center gap-2 border border-primary-red px-3 py-1.5 text-primary-red rounded-md ${
                        currentSection == "profile" &&
                        "bg-primary-red text-white"
                      }`}
                    >
                      <p className=" font-medium">Profile</p>
                      <User size={20} />
                    </div>
                    <div
                      onClick={() => setCurrentSection("notification")}
                      className="cursor-pointer mx-3 relative"
                    >
                      <Bell
                        size={20}
                        color="#4b5563"
                        className={` ${
                          currentSection === "notification" &&
                          " fill-primary-red stroke-primary-red"
                        }`}
                      />
                      <p className=" size-5 flex items-center justify-center bg-primary-red rounded-full text-white absolute -top-3 -right-2 text-xs font-semibold  ">
                        4
                      </p>
                    </div>
                    <div
                      onClick={() => setCurrentSection("favorite")}
                      className="cursor-pointer mx-3 relative"
                    >
                      <Heart
                        size={20}
                        color="#4b5563"
                        className={` ${
                          currentSection === "favorite" &&
                          " fill-primary-red stroke-primary-red"
                        }`}
                      />
                      <p className=" size-5 flex items-center justify-center bg-primary-red rounded-full text-white absolute -top-3 -right-2 text-xs font-semibold  ">
                        6
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {currentSection == "profile" && <UserProfile />}
            {currentSection == "notification" && <UserNotification />}
            {currentSection == "favorite" && <UserFavorite />}
            {currentSection == "setting" && <UserSetting />}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UserProfileDialog;

function InputFildNumber({ label, inputName, notNsc, disable }) {
  return (
    <div className=" text-left w-full flex flex-col gap-1">
      <p
        className={` font-semibold py-1 text-left ${
          disable && " text-gray-400"
        }`}
      >
        {label} {!notNsc && <span className=" text-primary-red">*</span>}
      </p>
      <input
        type="number"
        defaultValue={inputName}
        className=" w-full text-sm rounded-md p-2 border "
      />
      <div className=" flex mt-2 items-center gap-6">
        <div className=" flex gap-2 items-center">
          <input type="checkbox" className=" size-4"></input>
          <p className=" text-primary-red ">
            Click to allow offers on Whats App.
          </p>
        </div>
      </div>
    </div>
  );
}

function InputFild({ label, inputName, same, notNsc, disable }) {
  return (
    <div className=" w-full flex flex-col gap-1">
      <p
        className={` font-semibold py-1 text-left ${
          disable && " text-gray-400"
        }`}
      >
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

function UserProfile() {
  const [userImage, setUserImage] = React.useState(null);
  function handleImageUpload(e) {
    setUserImage(e.target.files[0]);
  }
  return (
    <div className=" max-w-6xl px-4 mt-6 md:mt-10 mx-auto w-full flex flex-col gap-4">
      <div className=" flex flex-col h-full gap-16 md:gap-20 md:flex-row ">
        <div className="h-full flex md:justify-end md:items-end">
          <div className=" max-w-44 md:max-w-60 w-full relative items-center justify-center aspect-square flex shrink-0 flex-col gap-4 border border-gray-600 rounded-md ">
            {userImage ? (
              <img
                src={URL.createObjectURL(userImage)}
                className=" h-full rounded-md w-full object-cover"
                alt=""
              />
            ) : (
              <p className=" p-4">Upload your image here</p>
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
        </div>
        <div className=" flex flex-col text-left gap-3 md:gap-4">
          <div className=" flex flex-col gap-4">
            <p className=" text-3xl md:text-4xl font-medium">User's Details</p>
            <p className=" text-gray-600">
              Fill the Details to get Fair Deals{" "}
            </p>
          </div>
          <div className=" flex flex-col gap-2 w-full">
            <div className=" grid grid-cols-1 sm:grid-cols-2 w-full gap-3">
              <InputFild label={"Name"} inputName={"Naveen Sharma"} />
              <InputFildNumber
                label={"Phone Number"}
                inputName={"9012345678"}
              />
              <InputFild
                label={"Email ID/ User ID"}
                inputName={"naveensharma@gmail.com"}
              />
            </div>
          </div>
          <div>
            <p className=" text-left font-semibold py-1">Select Gender *</p>
            <div className=" flex w-full gap-4 items-center">
              <input type="radio" name="gender" className=" size-4"></input>
              <p>Male</p>
              <input type="radio" name="gender" className=" size-4"></input>
              <p>Female</p>
              <input type="radio" name="gender" className=" size-4"></input>
              <p>Other</p>
            </div>
          </div>
          <div>
            <p className=" text-left font-semibold py-1">Select Age Group *</p>
            <div className=" flex flex-col md:flex-row w-full gap-1 md:gap-4 md:items-center">
              <div className=" flex gap-2 items-center">
                <input type="radio" name="age" className=" size-4"></input>
                <p>20-30 yrs</p>
              </div>
              <div className=" flex gap-2 items-center">
                <input type="radio" name="age" className=" size-4"></input>
                <p>30-40 yrs</p>
              </div>
              <div className=" flex gap-2 items-center">
                <input type="radio" name="age" className=" size-4"></input>
                <p>40-50 yrs</p>
              </div>
              <div className=" flex gap-2 items-center">
                <input type="radio" name="age" className=" size-4"></input>
                <p>50 Above</p>
              </div>
            </div>
          </div>
          <div>
            <p className=" text-left font-semibold py-1">Marital Status</p>
            <div className=" flex w-full gap-4 items-center">
              <input
                type="radio"
                name="merriage_status"
                className=" size-4"
              ></input>
              <p>Unmarried</p>
              <input
                type="radio"
                name="merriage_status"
                className=" size-4"
              ></input>
              <p>Married</p>
            </div>
          </div>
          <div
            onClick={() => {
              setIsUserProfile(false);
            }}
            className=" cursor-pointer bg-primary-red text-white flex items-center justify-center gap-2 px-3 py-2 rounded-md w-fit ml-auto"
          >
            <p>Save</p>
            <Check size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

function UserSetting() {
  return (
    <div className=" max-w-6xl px-4 mt-12 mx-auto w-full flex flex-col gap-4">
      <div className=" w-full h-96 bg-gray-200 rounded-lg"></div>
    </div>
  );
}

function UserNotification() {
  const [notificationData, setNotificationData] = React.useState([
    {
      title: "Lifestyle",
      OfferDescription: "Flat Rs 1,000 Off on Smart Phones Above Rs. 10,000",
      offerValidity: "Valid till 26nd Mar",
      image: "./hero-small.png",
    },
    {
      title: "Metro Shoes",
      OfferDescription: "Flat 25% Off on shirts and Trousers",
      offerValidity: "Valid till 22nd Mar",
      image: "./hero-small.png",
    },
    {
      title: "Happy Shoppy",
      OfferDescription: "Flat 50% Off on all items",
      offerValidity: "Valid till 28th Mar",
      image: "./hero-small.png",
    },
  ]);
  return (
    <div className="mt-6 mx-auto w-full flex flex-col gap-4">
      <div className=" flex items-center justify-between">
        <p className=" text-2xl font-semibold">Notifications</p>
        <div
          onClick={() => setNotificationData([])}
          className=" ml-auto px-3 flex items-center gap-1 py-1.5 border border-primary-red rounded-md bg-primary-red/10 hover:bg-primary-red/20 duration-200 text-primary-red font-medium cursor-pointer"
        >
          <X size={20} />
          <p>Clear All</p>
        </div>
      </div>
      <Accordion
        type="single"
        collapsible
        className="px-0  flex flex-col gap-3"
      >
        <AccordionItem
          value="closing-soon"
          className=" rounded-md bg-gray-100 px-2"
        >
          <AccordionTrigger>Closing Soon</AccordionTrigger>
          <AccordionContent className=" flex flex-col gap-2 p-2">
            {notificationData.map((item, index) => (
              <NotificationStoreCard key={index} {...item} />
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="ongoing-offers"
          className=" rounded-md bg-gray-100 px-2"
        >
          <AccordionTrigger>Ongoing Offers</AccordionTrigger>
          <AccordionContent className=" flex flex-col gap-2 p-2">
            {notificationData.map((item, index) => (
              <NotificationStoreCard key={index} {...item} />
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="upcoming-offers"
          className=" rounded-md bg-gray-100 px-2"
        >
          <AccordionTrigger>Upcoming Offers</AccordionTrigger>
          <AccordionContent className=" flex flex-col gap-2 p-2">
            {notificationData.map((item, index) => (
              <NotificationStoreCard key={index} {...item} />
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="closing-today"
          className=" rounded-md bg-gray-100 px-2"
        >
          <AccordionTrigger>Closing Today</AccordionTrigger>
          <AccordionContent className=" flex flex-col gap-2 p-2">
            {notificationData.map((item, index) => (
              <NotificationStoreCard key={index} {...item} />
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="expired-offers"
          className=" rounded-md bg-gray-100 px-2"
        >
          <AccordionTrigger>Expired Offers</AccordionTrigger>
          <AccordionContent className=" flex flex-col gap-2 p-2">
            {notificationData.map((item, index) => (
              <NotificationStoreCard key={index} {...item} />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

const favouriteStoreData = [
  {
    brand: "Lifestyle",
    location: "MI Road, Jaipur, Rajasthan",
    stars: 4,
    image: "./hero-small.png",
    title: "Lifestyle",
  },
  {
    brand: "Metro Shoes",
    location: "Sansar Chandra Road, Jaipur, Rajasthan",
    stars: 5,
    image: "./hero-small.png",
    title: "Metro Shoes",
  },
  {
    brand: "Happy Shoppy",
    location: "Ajmer Road, Jaipur, Rajasthan",
    stars: 3,
    image: "./hero-small.png",
    title: "Happy Shoppy",
  },
  {
    brand: "Shoe World",
    location: "C-Scheme, Jaipur, Rajasthan",
    stars: 4,
    image: "./hero-small.png",
    title: "Shoe World",
  },
];

function NotificationStoreCard({
  image,
  title,
  OfferDescription,
  offerValidity,
}) {
  return (
    <div className=" w-full shadow-sm p-2 rounded-md bg-white flex flex-col sm:flex-row gap-3">
      <img
        src={image}
        alt="store-image"
        className=" w-20 sm:w-28 h-20 sm:h-28"
      />
      <div className=" w-full justify-between flexflex-col gap-1">
        <div className=" w-full flex gap-2 ">
          <Link
            href={"/store"}
            className=" text-left w-full text-xl font-semibold"
          >
            {title}
          </Link>
          <ThumbsUpButton />
          <ShareButton />
        </div>
        <p className=" text-left sm:text-lg text-gray-600">
          {OfferDescription}
        </p>
        <div className=" w-full flex gap-2 ">
          <p className=" text-left w-full text-primary-red">{offerValidity}</p>
          <Link href={"/store"}>
            <SquareArrowOutUpRight className=" text-primary-red" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function UserFavorite() {
  return (
    <div className="mt-6 mx-auto w-full flex flex-col gap-4">
      <div className=" flex items-center justify-between">
        <p className=" text-2xl font-semibold">Favorite Stores</p>
      </div>
      {favouriteStoreData.map((item, index) => (
        <FavouriteStoreCard key={index} {...item} />
      ))}
    </div>
  );
}

function FavouriteStoreCard({ image, title, location, stars }) {
  return (
    <div className=" w-full h-full shadow-sm p-3 rounded-md border bg-white flex flex-col sm:flex-row gap-2">
      <img
        src={image}
        alt="store-image"
        className=" w-20 sm:w-28 h-20 sm:h-28"
      />
      <div className=" w-full justify-between h-full flex flex-col gap-1 sm:gap-2">
        <div className=" w-full flex gap-2 ">
          <Link
            href={"/store"}
            className=" text-left w-full text-xl font-semibold"
          >
            {title}
          </Link>
          <Link href={"/store"}>
            <SquareArrowOutUpRight className=" text-primary-red" size={20} />
          </Link>
        </div>
        <Link
          target="_blank"
          href={`https://google.com/maps/search/${location}`}
          className=" flex gap-1"
        >
          <MapPin size={20} className=" mt-1 text-primary-red" />
          <p className=" text-left sm:text-lg text-gray-600">{location}</p>
        </Link>
        <div className=" w-full flex gap-2 ">
          <div className=" w-full flex gap-1 items-center">
            <Star size={22} className=" fill-yellow-400 stroke-yellow-500" />
            <p className=" text-left text-lg text-primary-red">{stars}</p>
          </div>
          <HeartCustomIcon />
        </div>
      </div>
    </div>
  );
}

function HeartCustomIcon() {
  const [isChecked, setIsChecked] = React.useState(true);
  return (
    <Heart
      onClick={() => setIsChecked((prev) => !prev)}
      size={24}
      className={` cursor-pointer text-primary-red ${
        isChecked && " fill-primary-red"
      }`}
    />
  );
}
