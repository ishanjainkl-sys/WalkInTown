import {
  ArrowLeft,
  ArrowRight,
  BadgePercentIcon,
  BookImage,
  CalendarDays,
  CameraIcon,
  Check,
  ChevronLeftCircle,
  ChevronRightCircle,
  CopyPlus,
  ImageIcon,
  Pencil,
  ShapesIcon,
  Trash2,
} from "lucide-react";
import { CalendarForm } from "./datePicker";
import { useEffect, useRef, useState } from "react";
import { PaginationVendor } from "./paginationVendor";
import Link from "next/link";

export default function OfferDetailsSection() {
  const [offerEditData, setOfferEditData] = useState({
    offerId: 1,
    offerName: "",
    offerDescription: "",
    offerValidFrom: "",
    offerValidTill: "",
  });
  const [historyTableData, setHistoryTableData] = useState(offerData);

  function handleOfferEditValidFrom(value) {
    setOfferEditData((prev) => {
      return {
        ...prev,
        offerValidFrom: value,
      };
    });
  }

  function handleOfferEditValidTill(value) {
    setOfferEditData((prev) => {
      return {
        ...prev,
        offerValidTill: value,
      };
    });
  }

  function handleClearOfferEdit() {
    setOfferEditData({
      offerName: "",
      offerDescription: "",
      offerValidFrom: "",
      offerValidTill: "",
    });
  }

  function handleOfferEditClick({
    offerId,
    offerName,
    offerDescription,
    offerValidFrom,
    offerValidTill,
  }) {
    setOfferEditData({
      offerId,
      offerName,
      offerDescription,
      offerValidFrom,
      offerValidTill,
    });
  }

  function handleSaveOffer() {
    const offerId = offerEditData.offerId;
    if (
      !offerEditData.offerName ||
      !offerEditData.offerDescription ||
      !offerEditData.offerValidFrom ||
      !offerEditData.offerValidTill
    )
      return;
    setHistoryTableData((prev) => {
      return prev.map((item) => {
        if (item.offerId === offerId) {
          return {
            ...item,
            offerName: offerEditData.offerName,
            offerDescription: offerEditData.offerDescription,
            offerValidFrom: offerEditData.offerValidFrom,
            offerValidTill: offerEditData.offerValidTill,
          };
        }
        return item;
      });
    });
    setOfferEditData({
      offerName: "",
      offerDescription: "",
      offerValidFrom: "",
      offerValidTill: "",
    });
  }

  function handleDeleteOffer(offerId) {
    setHistoryTableData((prev) =>
      prev.filter((item) => item.offerId !== offerId)
    );
  }

  return (
    <div className=" max-w-6xl px-4 mx-auto flex-col w-full flex gap-4">
      <div className=" flex flex-col gap-4 w-fit mx-auto">
        <p className=" text-3xl md:text-4xl font-medium">
          Product & Offer Details
        </p>
        <p className=" text-gray-600 ">Create deals & offers</p>
      </div>
      <div className=" w-full flex flex-col gap-8 mt-6 lg:mt-0 lg:gap-20 xl:flex-row ">
        {/* Image container */}

        <div className="w-full flex flex-col gap-8 max-w-52">
          <div className=" w-full rounded-md relative">
            <img src="./store-pic.jpg" alt="" />
            <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 size-16 bg-primary-red p-1 flex items-center justify-center rounded-full cursor-pointer">
              <CameraIcon className="text-white" size={36} />
            </div>
          </div>
          <p className=" font-semibold text-lg">Happy Shop</p>
        </div>

        <div className=" w-full flex flex-col gap-8">
          <div className=" w-full flex flex-col md:flex-row md:gap-4 gap8">
            <div className=" w-full flex flex-col gap-1">
              <p className={` font-medium`}>
                Offer <span className=" text-primary-red">*</span>
              </p>
              <input
                type="text"
                value={offerEditData.offerName}
                onChange={(e) =>
                  setOfferEditData((prev) => {
                    return { ...prev, offerName: e.target.value };
                  })
                }
                className=" w-full text-sm bg-white rounded-md p-2 border "
              ></input>
            </div>
            <div className=" w-full flex flex-col gap-1">
              <p className={` font-medium`}>
                Offer Description <span className=" text-primary-red">*</span>
              </p>

              <textarea
                value={offerEditData.offerDescription}
                onChange={(e) => {
                  setOfferEditData((prev) => {
                    return {
                      ...prev,
                      offerDescription: e.target.value,
                    };
                  });
                }}
                className=" p-2 border w-full min-h-20 rounded h-full"
              />
            </div>
          </div>

          {/* Callender */}
          <div className=" w-full flex flex-col md:flex-row gap-4">
            <div className=" w-full flex flex-col gap-1">
              <p className={` font-medium`}>
                Validity From<span className=" text-primary-red">*</span>
              </p>
              <CalendarForm
                date={offerEditData.offerValidFrom}
                setDate={handleOfferEditValidFrom}
              />
            </div>

            <div className=" w-full flex flex-col gap-1">
              <p className={` font-medium`}>
                Validity Till<span className=" text-primary-red">*</span>
              </p>
              <CalendarForm
                date={offerEditData.offerValidTill}
                setDate={handleOfferEditValidTill}
                selectFuture={true}
              />
            </div>
          </div>
          <div className=" w-full mt-8 lg:mt-2  flex flex-col gap-1">
            <p>
              Select Template/Image for Offer Display
              <span className=" text-primary-red">*</span>
            </p>
            <SelectStoreImage />
          </div>

          <div className=" w-full mt-12 max-w-5xl mx-auto justify-end flex gap-4 items-center">
            <div
              onClick={handleClearOfferEdit}
              className=" flex cursor-pointer items-center gap-2 w-fit rounded-md text-primary-red border-primary-red border px-4 py-2"
            >
              <p className=" font-semibold">Create New</p>
              <CopyPlus size={20} />
            </div>

            <div
              onClick={handleSaveOffer}
              className=" cursor-pointer w-fit  rounded-md text-white flex items-center gap-2 bg-primary-red px-4 py-2"
            >
              <p className=" font-semibold">Save Offer</p>
              <Check color="white" size={20} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className=" text-lg py-3 font-semibold">Offer History</p>
        <div className=" overflow-x-scroll hide-scrollbar">
          <div className=" border rounded-md  w-[70rem]">
            <div className=" grid bg-primary-red text-white py-2 grid-cols-7">
              <div className=" flex gap-2 items-center justify-center">
                <p>Offer Image</p>
                <ImageIcon size={18} />
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
            {historyTableData.map((data, idx) => {
              return (
                <div
                  key={idx}
                  className={`grid  text-gray-600 py-2 grid-cols-7 ${
                    idx % 2 == 0 ? "bg-gray-100" : "bg-white"
                  } `}
                >
                  <div className=" flex gap-2 items-center justify-center">
                    <img src={data.img} />
                  </div>
                  <div className=" flex gap-2 items-center justify-center">
                    <p className=" text-sm text-center">{data.offerName}</p>
                  </div>
                  <div className=" flex gap-2 items-center justify-center">
                    <div className="text-sm text-center">
                      <p>
                        {
                          new Date(data.offerValidFrom)
                            .toISOString()
                            .split("T")[0]
                        }
                        -{" "}
                      </p>
                      <p>
                        {
                          new Date(data.offerValidTill)
                            .toISOString()
                            .split("T")[0]
                        }
                      </p>
                    </div>
                  </div>
                  <div className=" flex gap-2 items-center justify-center">
                    <p className=" text-sm text-center">{data.status}</p>
                  </div>
                  <div className=" flex gap-2 items-center justify-center">
                    <p className=" text-sm text-center">
                      {data.offerDescription}
                    </p>
                  </div>
                  <div
                    onClick={() => handleOfferEditClick({ ...data })}
                    className="cursor-pointer flex gap-2 items-center justify-center"
                  >
                    <Pencil size={18} />
                  </div>
                  <div
                    onClick={() => handleDeleteOffer(data.offerId)}
                    className=" cursor-pointer flex gap-2 items-center justify-center"
                  >
                    <Trash2 size={18} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" w-full mt-4">
          <PaginationVendor />
        </div>
      </div>
      <div className=" w-full px-4 max-w-6xl mx-auto justify-end flex gap-4 items-center">
        <Link
          href={`/vendor-dashbord?form=2`}
          className=" flex items-center gap-2 w-fit rounded-md text-primary-red border-primary-red border px-4 py-2"
        >
          <p className=" font-semibold">Back</p>
          <ArrowLeft size={20} />
        </Link>

        <Link
          href={`/vendor-dashbord?form=4`}
          className=" w-fit cursor-pointer rounded-md text-white flex items-center gap-2 bg-primary-red px-4 py-2"
        >
          <p className=" font-semibold">Next</p>
          <ArrowRight color="white" size={20} />
        </Link>
      </div>
    </div>
  );
}

const offerData = [
  {
    offerId: 1,
    img: "./vendor-store-offer.png",
    offerName: "Weekend Sale",
    category: "All Categories",
    discount: "18%",
    offerValidFrom: "2025-03-04T00:00:00.000Z",
    offerValidTill: "2025-03-24T23:59:59.999Z",
    offerDescription: "Offer display message",
    status: "Active",
  },
  {
    offerId: 2,
    img: "./vendor-store-offer.png",
    offerName: "Weekend Sale",
    category: "All Categories",
    discount: "12%",
    offerValidFrom: "2025-12-31T00:00:00.000Z",
    offerValidTill: "2026-01-01T23:59:59.999Z",
    offerDescription: "Offer display message",
    status: "Ending Soon Offer",
  },
  {
    offerId: 3,
    img: "./vendor-store-offer.png",
    offerName: "Weekend Sale",
    category: "All Categories",
    discount: "20%",
    offerValidFrom: "2025-12-30T00:00:00.000Z",
    offerValidTill: "2026-01-01T23:59:59.999Z",
    offerDescription: "Offer display message",
    status: "Expired",
  },
];

function SelectStoreImage() {
  const [allImages, setAllImages] = useState([
    "./v2.png",
    "./v3.png",
    "./v4.png",
    "./v5.png",
    "./vendor-store-offer.png",
  ]);
  const [selectedImage, setSelectedImage] = useState(allImages[0]);
  const carouselRef = useRef(null);
  const [error, setError] = useState(""); // To store error messages

  // Scroll left and right functions
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  // Validate the uploaded image (size, height, and width)
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
            resolve(URL.createObjectURL(file)); // Return the image URL if valid
          }
        };
      };

      fileReader.onerror = () => {
        reject("Error reading file");
      };

      fileReader.readAsDataURL(file); // Start reading the file
    });
  }

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  // Handle the image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      validateImage(file)
        .then((imageUrl) => {
          setAllImages((prev) => [imageUrl, ...prev]);
          setError(""); // Clear any previous error messages
        })
        .catch((errorMessage) => {
          setError(errorMessage); // Display error message if validation fails
        });
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 lg:flex-row">
      <div className="max-w-[52rem] w-full flex items-center">
        <ChevronLeftCircle
          className="w-6 cursor-pointer z-10 hidden md:block"
          size={30}
          onClick={scrollLeft}
        />

        <div
          ref={carouselRef}
          className="overflow-x-scroll h-fit px-2 hide-scrollbar flex relative gap-2 w-full"
        >
          <div className="shrink-0 relative rounded-md !cursor-pointer h-28 w-36 items-center flex gap-2 px-3 border border-black py-1.5">
            <p className="cursor-pointer text-black text-sm text-center">
              Upload image here
            </p>
            <input
              onChange={handleImageUpload}
              type="file"
              accept="image/*"
              className="opacity-0 absolute inset-0 w-full h-full"
            />
          </div>
          {allImages.map((item, index) => (
            <div
              key={index}
              className={`shrink-0 w-36 h-28 relative ${
                selectedImage === item
                  ? "border-4 border-red-300 rounded-lg overflow-hidden"
                  : ""
              }`}
            >
              <img src={item} className="w-full h-full object-cover" />
              <div className="absolute bottom-1 right-1 bg-white p-1 rounded text-black size-6 flex items-center justify-center">
                <input
                  onChange={() => handleImageSelect(item)}
                  checked={selectedImage === item}
                  type="radio"
                  name="selectedImage"
                  className="w-full h-full cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>

        <ChevronRightCircle
          className="w-6 cursor-pointer z-10 hidden md:block"
          size={30}
          onClick={scrollRight}
        />
      </div>

      {/* Error message display */}
      {error && <p className="text-red-500 min-w-20 text-sm mt-2">{error}</p>}
    </div>
  );
}
