"use client";
import { cn } from "@/lib/utils";
import { Share2, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function ThumbsUpButton() {
  const [selected, setSelected] = useState(false);
  function handleLikeClick() {
    const localStorage = window.localStorage;
    if (localStorage.getItem("token")) {
      setSelected(!selected);
    }
  }
  return (
    <div className=" cursor-pointer flex flex-col items-center justify-center gap-1">
      <ThumbsUp
        onClick={() => handleLikeClick()}
        className={`${
          selected ? "text-primary-red fill-red-200 cursor-pointer" : ""
        }`}
        size={18}
      />
      <p className=" text-sm">40k</p>
    </div>
  );
}

function ShareButton({ className }) {
  return (
    <Link
      href={"https://web.whatsApp.com"}
      target="_blank"
      className={cn(
        "flex flex-col items-center justify-center gap-1",
        className
      )}
    >
      <Share2 size={18} />
      <p className=" text-sm">40k</p>
    </Link>
  );
}

export { ThumbsUpButton, ShareButton };
