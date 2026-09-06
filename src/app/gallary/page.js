import Footer from "@/components/footer";
import NavBar from "@/components/nav/navBar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <NavBar />
      <div className=" flex flex-col mx-auto gap-6  w-full max-w-7xl px-6 md:px-4">
        <p className=" py-6 border-b border-gray-300 text-5xl text-center font-semibold">
          Our Gallary
        </p>
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {gallaryData.map((item, index) => (
            <img
              src={item.src}
              alt={item.alt}
              key={index}
              className="w-full aspect-square rounded-md"
            />
          ))}
        </div>

        <Link
          href={"/store"}
          className=" flex items-center justify-center gap-2 border text-center min-w-28 border-primary-red w-fit text-xl cursor-pointer rounded-md px-4 mt-4 py-2 text-primary-red font-semibold"
        >
          <ArrowLeft size={20} />
          <p>Back</p>
        </Link>

        <div className=" h-4"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;

const gallaryData = [
  { src: "./q1.png", alt: "gallery image" },
  { src: "./q2.png", alt: "gallery image" },
  { src: "./q3.png", alt: "gallery image" },
  { src: "./q4.png", alt: "gallery image" },
  { src: "./q5.png", alt: "gallery image" },
  { src: "./q6.png", alt: "gallery image" },
  { src: "./q7.png", alt: "gallery image" },
  { src: "./q8.png", alt: "gallery image" },
  { src: "./q9.png", alt: "gallery image" },
  { src: "./q10.png", alt: "gallery image" },
  { src: "./q11.png", alt: "gallery image" },
  { src: "./q12.png", alt: "gallery image" },
  { src: "./q13.png", alt: "gallery image" },
  { src: "./q14.png", alt: "gallery image" },
  { src: "./q15.png", alt: "gallery image" },
  { src: "./q16.png", alt: "gallery image" },
  { src: "./q17.png", alt: "gallery image" },
  { src: "./q18.png", alt: "gallery image" },
];
