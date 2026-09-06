import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function MobMenu({ Menus, setIsUserProfile }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenUserProfile = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      setIsUserProfile(true);
    }, 500);
  };

  return (
    <div>
      <button className="xl:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-gray-50 backdrop-blur text-black p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <ul>
          <div className=" w-full flex-col md:flex-row flex items-center justify-end gap-2 ">
            <Link
              href={"/search"}
              className=" border w-full border-black h-10 justify-between rounded py-2 px-3 flex items-center gap-3"
            >
              <div className=" w-full flex items-center">
                <img src="./nav/search.png" alt="" />
                <p className="font-medium text-gray-400">Search</p>
              </div>
              <div className=" px-1 border-l w-full max-w-52 justify-around border-black flex items-center gap-2 ">
                <img src="./search-locaion.svg" alt="" />
                <p className="font-medium">Jaipur</p>
                <img src="./map-pin.svg" alt="" />
              </div>
            </Link>

            <div className=" w-full flex gap-4 items-center justify-between">
              <Link
                href={"/partner-login"}
                className="bg-primary-red w-full h-10 justify-center rounded py-2 px-3 flex items-center gap-2"
              >
                <img src="./nav/hand-shake.png" alt="" />
                <p className="font-medium whitespace-nowrap text-sm text-white">
                  Partner with us
                </p>
              </Link>
              <div
                onClick={handleOpenUserProfile}
                className=" size-8 shrink-0 cursor-pointer"
              >
                <img src="./nav/navUser.svg" alt="" />
              </div>
            </div>
          </div>

          {Menus.map(({ label, subMenu }, i) => {
            const hasSubMenu = subMenu?.length;
            // const hasSubMenu = true;
            return (
              <ShowNavElements
                hasSubMenu={hasSubMenu}
                i={i}
                label={label}
                subMenu={subMenu}
                key={i}
              />
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}

function ShowNavElements({ label, subMenu, hasSubMenu, i }) {
  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };
  const [clicked, setClicked] = useState(null);
  const isClicked = clicked === i;
  return (
    <div className="">
      <span
        className="flex items-center justify-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
        onClick={() => setClicked(isClicked ? null : i)}
      >
        {label}
        {hasSubMenu && (
          <ChevronDown className={`ml-auto ${isClicked && "rotate-180"} `} />
        )}
      </span>
      {hasSubMenu && (
        <motion.ul
          initial="exit"
          animate={isClicked ? "enter" : "exit"}
          variants={subMenuDrawer}
          className="ml-5"
        >
          {subMenu.map(({ title, items }, i) => (
            <div
              key={i}
              className="p-2 hover:bg-white/5 rounded-md text-red-500 cursor-pointer"
            >
              {/* <Icon size={17} /> */}
              {title}
              <div className=" pl-2 flex flex-col gap-1 text-gray-700">
                {items?.map(({ name, slug }, i) => (
                  <Link href={slug} key={i}>
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </motion.ul>
      )}
    </div>
  );
}
