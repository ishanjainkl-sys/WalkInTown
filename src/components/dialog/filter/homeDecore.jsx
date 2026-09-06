"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./../../ui/dialog";
import { Menus } from "@/components/nav/utils";

const HomeDecoreMenu = ({
  filterValueList = ["Home Decore"],
  setFilterValueList = () => {},
  path,
}) => {
  const [selectedItems, setSelectedItems] = useState(() => {
    return Menus[4].subMenu
      .flatMap((submenu) => submenu.items.map((item) => item.name))
      .filter(() => false);
  });

  const [selectedItemsLength, setSelectedItemsLength] = useState(0);

  function handleSelect(item) {
    setSelectedItems((prevSelected) => {
      const isAlreadySelected = prevSelected.includes(item);
      return isAlreadySelected
        ? prevSelected.filter((selected) => selected !== item)
        : [...prevSelected, item];
    });
  }

  function handleTitleSelect(items, title) {
    if (selectedItems.includes(title)) {
      setSelectedItems((prevSelected) => {
        return prevSelected.filter((item) => item !== title);
      });
      items.map((item) => {
        setSelectedItems((prevSelected) => {
          return prevSelected.filter((filterItem) => filterItem !== item.name);
        });
      });
    } else {
      setSelectedItems((prevSelected) => {
        return [...prevSelected, title];
      });
      items.map((item) => {
        setSelectedItems((prevSelected) => {
          return [...prevSelected, item.name];
        });
      });
    }
  }

  useEffect(() => {
    setSelectedItemsLength(selectedItems.length);
    if (selectedItems.length > 0) {
      setFilterValueList((prev) => ({
        ...prev,
        categories: prev.categories.includes("Home Decore")
          ? prev.categories
          : [...prev.categories, "Home Decore"],
      }));
    } else {
      setFilterValueList((prev) => ({
        ...prev,
        categories: prev.categories.filter((item) => item !== "Home Decore"),
      }));
    }
  }, [selectedItems]);

  useEffect(() => {
    if (!filterValueList.includes("Home Decore") && selectedItems.length > 0) {
      setSelectedItems([]);
    }
  }, [filterValueList]);

  return (
    <Dialog>
      <DialogTrigger>
        <div
          className={`border h-9 flex items-center gap-1 border-black px-3 py-2 text-xs rounded font-semibold text-black ${
            selectedItems.length > 0 ? "bg-secondary-red" : " bg-transparent"
          }`}
        >
          Home Decore
          <img src="./../home-decore.svg" className=" size-5" alt="" />
        </div>
      </DialogTrigger>
      <DialogContent showCloseButton={true} className="max-w-5xl w-full">
        <DialogHeader
          className={
            "flex flex-col space-y-1.5 py-8 items-center text-center sm:text-left"
          }
        >
          <DialogTitle></DialogTitle>
          <div className=" w-full">
            <div
              className={` flex flex-col overflow-y-auto md:block max-h-96 md:max-h-none gap-7 space-y-0 ${
                Menus[4].gridCols == 1
                  ? "columns-1"
                  : Menus[4].gridCols == 2
                  ? "columns-2"
                  : Menus[4].gridCols == 3
                  ? "columns-3"
                  : "columns-4"
              }`}
              style={{ columnGap: "1.75rem" }}
            >
              {Menus[4].subMenu.map((submenu, index) => (
                <div key={index} className="  space-y-0.5">
                  <div className=" w-full flex gap-2">
                    <input
                      type="checkbox"
                      className="size-4 mt-2"
                      checked={selectedItems.includes(submenu.title)}
                      onChange={() =>
                        handleTitleSelect(submenu?.items, submenu.title)
                      }
                    />
                    <h6 className=" leading-5 py-1 text-left font-semibold text-lg text-primary-red">
                      {submenu.title}
                    </h6>
                  </div>
                  {submenu?.items?.map((item, i) => (
                    <div key={i} className=" flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="size-4"
                        checked={selectedItems.includes(item.name)}
                        onChange={() => handleSelect(item.name)}
                      />

                      <div
                        key={i}
                        className=" block text-sm cursor-pointer text-gray-800"
                      >
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {/* <DialogClose className="w-full">
              <div
                onClick={handleApplyChange}
                className=" bg-primary-red px-4 py-2 flex items-center gap-2 rounded-md mt-4 text-white text-center font-semibold cursor-pointer w-fit ml-auto"
              >
                <p>{path && path === "vendor" ? "Save" : "Apply"}</p>
                {path && path === "vendor" ? (
                  <Save size={20} />
                ) : (
                  <Check size={20} />
                )}
              </div>
            </DialogClose> */}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default HomeDecoreMenu;
