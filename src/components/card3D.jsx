import { motion } from "framer-motion";
import React from "react";
import UserLoginProvider from "./userLoginProvider";
import Link from "next/link";
import { MapPinIcon } from "lucide-react";

export function Card3DDeals({ frontSide, backSide, className }) {
  const [flipped, setFlipped] = React.useState(false);
  const { storeName, discountPercentage, zudioList } = backSide;

  return (
    <div
      className="card-container"
      style={{
        perspective: "1200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          borderRadius: "12px",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
        }}
        animate={{
          rotateY: flipped ? 180 : 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.68, -0.55, 0.27, 1.55],
        }}
      >
        <div
          onClick={() => setFlipped((prev) => !prev)}
          className="card-front"
          style={{
            borderRadius: "12px",
            fontWeight: "bold",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          {frontSide}
        </div>
        <div
          className="card-back"
          style={{
            transform: "rotateY(180deg)",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            color: "#333",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "12px",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className=" z-20 h-96 w-60 md:w-64 rounded-md  shrink-0 py-6 px-4 flex flex-col bg-black">
            <UserLoginProvider>
              <div className=" text-white flex cursor-pointer justify-between gap-2 mb-4 ">
                <p className=" text-2xl font-semibold">{storeName}</p>
                <p className=" text-2xl font-semibold">
                  {discountPercentage}%off
                </p>
              </div>
            </UserLoginProvider>
            {zudioList.map((item, index) => (
              <Link
                href={"/search"}
                key={index}
                className=" text-gray-300  text-sm"
              >
                {item}
              </Link>
            ))}
            <div
              onClick={() => setFlipped((prev) => !prev)}
              className=" h-full w-full"
            ></div>

            <div className=" w-full mt-auto flex gap-2 justify-between">
              <Link
                href={`https://www.google.com/maps/search/${storeName}`}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex gap-1 items-center"
              >
                <MapPinIcon className="h-5 w-6 text-white" />
                <p className=" text-white font-semibold ">3.2 Km</p>
              </Link>
              <UserLoginProvider>
                <div className=" cursor-pointer text-white font-semibold">
                  View Offers
                </div>
              </UserLoginProvider>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export function Card3DStores({ frontSide, backSide, className }) {
  const [flipped, setFlipped] = React.useState(false);
  const { storeName, ratingCount, zudioList } = backSide;

  return (
    <div
      className="card-container"
      style={{
        perspective: "1200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          borderRadius: "12px",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
        }}
        animate={{
          rotateY: flipped ? 180 : 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.68, -0.55, 0.27, 1.55],
        }}
      >
        <div
          onClick={() => setFlipped((prev) => !prev)}
          className="card-front"
          style={{
            borderRadius: "12px",
            fontWeight: "bold",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          {frontSide}
        </div>
        <div
          className="card-back"
          style={{
            transform: "rotateY(180deg)",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            color: "#333",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "12px",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className=" z-20 h-96 w-60 md:w-64 rounded-md  shrink-0 py-6 px-4 flex flex-col bg-black">
            <UserLoginProvider className=" text-white flex  justify-between gap-2 mb-4 ">
              <p className=" text-2xl font-semibold break-all">{storeName}</p>
              <div className=" flex shrink-0 text-xl font-semibold items-center">
                {ratingCount}{" "}
                <img src="./golden-star.png" className=" size-6" alt="" />
              </div>
            </UserLoginProvider>
            {zudioList.map((item, index) => (
              <Link
                href={"/search"}
                key={index}
                className=" text-gray-300  text-sm"
              >
                {item}
              </Link>
            ))}

            <div
              onClick={() => setFlipped((prev) => !prev)}
              className=" h-full w-full"
            ></div>

            <div className=" w-full mt-auto flex gap-2 justify-between">
              <Link
                href={`https://www.google.com/maps/search/${"shreej"}`}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex gap-1 items-center"
              >
                <MapPinIcon className="h-5 w-6 text-white" />
                <p className=" text-white font-semibold ">3.2 Km</p>
              </Link>
              <UserLoginProvider className=" text-white font-semibold">
                View Offers
              </UserLoginProvider>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
