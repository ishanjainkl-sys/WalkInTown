"use client";
import {
  ArrowLeft,
  ArrowRight,
  BookImage,
  ChevronLeftCircle,
  ChevronRightCircle,
  Info,
  Pencil,
  Trash2,
} from "lucide-react";
import InputFild from "./inputFild";
import MenMenu from "./dialog/filter/men";
import WomenMenu from "./dialog/filter/women";
import MenuKids from "./dialog/filter/kid";
import BeautyMenu from "./dialog/filter/beauty";
import HomeDecoreMenu from "./dialog/filter/homeDecore";
import HomeAppliencesMenu from "./dialog/filter/homeAppliences";
import ElectronicsMenu from "./dialog/filter/electronics";
import React, { useRef, useState } from "react";
import BrandsShowMore from "./dialog/brandsShowMore";
import StoreImageSelector from "./storeImageSelector";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import TermsAndConditionVendorDetailsDialog from "./dialog/termsAndConditionVendorDetails";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function ShopDetailsSection({ path }) {
  const [isChecked, setIsChecked] = React.useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [location, setLocation] = useState("");
  const [disCount, setDiscount] = useState("");

  const router = useRouter();
  function handleNext() {
    if (
      !name ||
      !description ||
      !address ||
      !pinCode ||
      !location ||
      !disCount ||
      !isChecked
    ) {
      toast.error("Please fill all the mendatory details");
      return;
    }

    router.push("/vendor-dashbord?form=3");
  }
  return (
    <div className=" px-4 max-w-6xl mx-auto w-full flex flex-col gap-4">
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className=" mx-auto w-fit flex flex-col gap-4">
        <p className=" text-3xl md:text-4xl font-medium ">Business Details</p>
        <p className=" text-gray-600 ">
          Fill the Details to get more business Opportunities
        </p>
      </div>
      <div className=" flex flex-col gap-16 md:gap-20 lg:flex-row">
        <div className=" flex w-full max-w-none  lg:max-w-60 mt-6  shrink-0 flex-col gap-4">
          <StoreImageSelector />

          <div className="flex mt-12 flex-col">
            <div className=" flex flex-col gap-4">
              <p className=" text-3xl md:text-4xl font-medium">
                Product Categories
              </p>
              <p className=" text-gray-600">Select Categories for Shop</p>
            </div>
            <div className="flex w-full mt-3 flex-wrap gap-2">
              <MenMenu path="vendor" />
              <WomenMenu path="vendor" />
              <MenuKids path="vendor" />
              <BeautyMenu path="vendor" />
              <HomeDecoreMenu path="vendor" />

              <HomeAppliencesMenu path="vendor" />
              <ElectronicsMenu path="vendor" />
            </div>
            <div>
              <p className="font-semibold mt-6 text-lg">Brands</p>
              <p className=" text-sm text-gray-600">
                Select your Trusted Brand
              </p>
            </div>
            <div className="flex w-full mt-3 flex-wrap gap-2">
              <SearchByBrand path="vendor" />
            </div>
          </div>
        </div>

        <div className=" w-full">
          <div className=" flex mt-6 flex-col gap-2 w-full">
            <div className=" w-full flex flex-col gap-1">
              <p className={`font-semibold`}>
                Shpo name <span className=" text-primary-red">*</span>
              </p>
              <input
                type="text"
                placeholder="Enter your Shop name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=" w-full text-sm rounded-md p-2 border "
              />
            </div>
            <div className=" flex flex-col gap-1">
              <p className=" font-semibold">
                Shop Description <span className=" text-primary-red">*</span>
              </p>
              <textarea
                rows={4}
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className=" text-sm rounded-md p-2 border "
              />
            </div>
            <div className=" w-full flex flex-col gap-1">
              <p className={`font-semibold`}>
                Address <span className=" text-primary-red">*</span>
              </p>
              <input
                type="text"
                placeholder="Enter your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className=" w-full text-sm rounded-md p-2 border "
              />
            </div>
            <div className=" w-full flex flex-col md:flex-row gap-4">
              <div className=" w-full flex flex-col gap-1">
                <p className={`font-semibold`}>
                  Pin Code <span className=" text-primary-red">*</span>
                </p>
                <input
                  type="number"
                  placeholder="Enter your Pin code"
                  value={pinCode}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 6) {
                      setPinCode(value);
                    }
                  }}
                  className=" w-full text-sm rounded-md p-2 border "
                />
              </div>
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
            <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="w-full flex flex-col md:flex-row gap-4">
                <div className="w-full flex flex-col gap-1">
                  <p className="font-semibold">
                    Location/Area* <span className="text-primary-red">*</span>
                  </p>
                  <Select
                    onValueChange={(value) => {
                      setLocation(value);
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Jaipur">Jaipur</SelectItem>
                        <SelectItem value="Malviya Nagar">
                          Malviya Nagar
                        </SelectItem>
                        <SelectItem value="Delhi">Delhi</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <InputFild label={"GST Number"} notNsc={true} />
            </div>
            <div className=" w-full flex flex-col md:flex-row gap-4">
              <div className=" w-full flex justify-between flex-col gap-1">
                <p className=" font-semibold">
                  WalkIn Town Additional Discount{" "}
                  <span className=" text-primary-red">*</span>
                </p>
                <input
                  type="text"
                  value={disCount}
                  onChange={(e) => setDiscount(e.target.value)}
                  className=" bg-white text-sm rounded-md p-2 border "
                />
                <div className="mt-2">
                  <TermsAndConditionVendorDetailsDialog
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                  />
                </div>
              </div>
              <div className=" w-full flex flex-col gap-1">
                <div className=" flex gap-1 items-center">
                  Subscription Plan <span className=" text-primary-red">*</span>
                  <Info size={18} color="#666" />
                </div>
                <SelectPlan />
              </div>
            </div>
          </div>
          <ImageCarousel />
        </div>
      </div>

      <div className=" w-full px-4 max-w-6xl mx-auto justify-end flex gap-4 items-center">
        <Link
          href={`/vendor-dashbord?form=1`}
          className=" flex items-center gap-2 w-fit rounded-md text-primary-red border-primary-red border px-4 py-2"
        >
          <p className=" font-semibold">Back</p>
          <ArrowLeft size={20} />
        </Link>
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

function SearchByBrand({ path }) {
  const brands = [
    "./companies-logo/zara.png",
    "./companies-logo/h&m.png",
    "./companies-logo/puma.png",
    "./companies-logo/forever.png",
    "./companies-logo/gap.png",
    "./companies-logo/gap.png",
    "./companies-logo/h&m.png",
    "./companies-logo/puma.png",
    "./companies-logo/forever.png",
    "./companies-logo/gap.png",
    "./companies-logo/gap.png",
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
    <div className="flex w-full mt-3 overflow-x-auto md:flex-wrap gap-2">
      {/* <div className=" py-1 px-2 shrink-0 flex items-center justify-center bg-secondary-red font-semibold text-sm rounded-md" >Vaishali Nagar</div> */}
      {brands?.slice(0, 6).map((data, idx) => {
        const isPresect = selectedFields.includes(data);
        return (
          <div
            onClick={() => handleCheckboxChange(data)}
            key={idx}
            className={`h-8 w-auto py-1 px-2 border border-black font-semibold text-sm rounded-md ${
              isPresect ? "bg-secondary-red" : ""
            }`}
          >
            <img key={data} className=" w-full h-full " src={data} alt="" />
          </div>
        );
      })}
      <BrandsShowMore
        path={path}
        selectedFields={selectedFields}
        setSelectedFields={setSelectedFields}
        itemsToShow={brands.slice(6)}
      />
    </div>
  );
}
function SelectPlan() {
  const [selected, setSelected] = useState("Silver");
  const types = ["Silver", "Gold", "Platinum"];
  return (
    <div className=" flex cursor-pointer w-fit flex-col gap-1">
      {types.map((item, index) => (
        <div
          onClick={() => setSelected(item)}
          key={index}
          className=" flex gap-1 items-center"
        >
          <input
            checked={selected === item}
            onChange={() => setSelected(item)}
            name="radio"
            type="radio"
            className="w-fit"
          />

          <p
            className={`${selected === item ? "text-black" : " text-gray-400"}`}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

function ImageCarousel() {
  const scrollContainer = useRef(null);

  const [images, setImages] = useState([
    "./v2.png",
    "./v3.png",
    "./v4.png",
    "./v5.png",
    "./v2.png",
    "./v3.png",
  ]);

  const [error, setError] = useState(""); // For storing error messages

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const { current } = scrollContainer;
      const scrollAmount = 150;
      if (direction === "left") {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  function handleRemoveImage(item) {
    setImages((prev) => prev.filter((img) => img !== item));
  }

  // Image validation before uploading
  function validateImage(file) {
    const maxFileSize = 2 * 1024 * 1024; // 2MB in bytes
    const img = new Image();
    const fileReader = new FileReader();

    return new Promise((resolve, reject) => {
      fileReader.onload = () => {
        img.src = fileReader.result;

        img.onload = () => {
          const { width, height } = img;
          if (file.size > maxFileSize) {
            reject("File size exceeds 2MB");
          } else if (height < 450 || height > 600) {
            reject("Height must be between 450px and 600px");
          } else if (width < 600 || width > 800) {
            reject("Width must be between 600px and 800px");
          } else {
            resolve(URL.createObjectURL(file)); // Return image URL if valid
          }
        };
      };

      fileReader.onerror = () => {
        reject("Error reading file");
      };

      fileReader.readAsDataURL(file); // Start reading the file
    });
  }

  function handleImageUpload(event) {
    const file = event.target.files[0];

    if (file) {
      validateImage(file)
        .then((imageUrl) => {
          // If valid, add image to state
          setImages((prev) => [...prev, imageUrl]);
          setError(""); // Clear any previous errors
        })
        .catch((errorMessage) => {
          setError(errorMessage); // Display error message
        });
    }
  }

  return (
    <div className="mt-8 flex items-center gap-2 flex-row">
      <button onClick={() => scroll("left")}>
        <ChevronLeftCircle className="w-6 cursor-pointer" size={20} />
      </button>

      <div
        ref={scrollContainer}
        className="max-w-xl overflow-x-scroll px-2 hide-scrollbar flex relative gap-2 w-auto scroll-smooth"
      >
        <div className="relative rounded-md cursor-pointer h-28 w-36 shrink-0 items-center flex gap-2 px-3 border border-black py-1.5">
          <p className="text-black text-sm text-center">Upload image here</p>
          <BookImage
            size={20}
            className="absolute bottom-0 right-0 bg-black p-1 rounded size-7 text-white"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
          />
        </div>

        {images.map((item, index) => (
          <div key={index} className="w-36 shrink-0 relative">
            <img
              src={item}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <Trash2
              size={20}
              onClick={() => handleRemoveImage(item)}
              className="absolute bottom-0 right-0 bg-white p-1 rounded size-7 text-black"
            />
          </div>
        ))}
      </div>

      <button onClick={() => scroll("right")}>
        <ChevronRightCircle className="w-6 cursor-pointer" size={20} />
      </button>

      {/* Error message display */}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}
