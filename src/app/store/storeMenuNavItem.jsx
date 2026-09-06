import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function StoreMenuNavItem({
  subMenuNameToShow,
  setShowSubMenu,
  setSubMenuNameToShow,
  menu,
  storeCategoryMenu,
}) {
  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.3,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  function handleMobileMenu() {
    if (subMenuNameToShow === menu.label) {
      setShowSubMenu(false);
      setSubMenuNameToShow(null);
    } else {
      setShowSubMenu(true);
      setSubMenuNameToShow(menu.label);
    }
  }

  const hasSubMenu = menu?.subMenu?.length;

  return (
    <motion.div
      className=" group/link"
      onHoverStart={() => {
        toggleHoverMenu();
      }}
      onHoverEnd={toggleHoverMenu}
      key={menu.label}
      onClick={handleMobileMenu}
    >
      <span
        className={`flex gap-2 select-none rounded-md items-center relative text-black cursor-pointer px-3 border font-semibold py-2 ${
          menu.label === "Men" && "bg-secondary-red"
        } ${menu.label === subMenuNameToShow && "border border-primary-red"}`}
      >
        {menu.label}
        <img src={menu.image} className=" size-6" alt="" />
      </span>
      <div className="hidden lg:block">
        {hasSubMenu && (
          <motion.div
            className="absolute z-50 translate-y-full lg:top-[2.6rem] p-8 max-w-3xl rounded-[6px] origin-[50%_-170px] shadow-md backdrop-blur bg-gray-50"
            initial="exit"
            animate={isHover ? "enter" : "exit"}
            variants={subMenuAnimate}
          >
            <div
              className={`gap-7 columns-1 space-y-0 ${
                menu.gridCols == 1
                  ? "lg:columns-1"
                  : menu.gridCols == 2
                  ? "lg:columns-2"
                  : menu.gridCols == 3
                  ? "lg:columns-3"
                  : "lg:columns-4"
              }`}
              style={{ columnGap: "1.75rem" }}
            >
              {hasSubMenu &&
                menu.subMenu.map((submenu, index) => {
                  const storeSubMenu = storeCategoryMenu?.subMenu[index];
                  const hasItems = storeSubMenu?.items?.length > 0;
                  return (
                    <div key={index} className="  space-y-0.5">
                      <h6
                        className={` leading-5 py-1 mt-2 font-semibold text-lg ${
                          hasItems ? "text-primary-red" : " text-primary-red/50"
                        }`}
                      >
                        {submenu.title}
                      </h6>
                      {submenu?.items?.map((item, i) => {
                        // Filter -- checking the item is presend in store sub mun array
                        const isAvailable =
                          storeSubMenu.items.filter(
                            (subItem) => subItem.name === item.name
                          ).length > 0;
                        return (
                          <Link
                            href={item.slug}
                            key={i}
                            className={`block text-sm cursor-pointer  ${
                              isAvailable
                                ? "text-black hover:font-semibold"
                                : "text-gray-400"
                            }`}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  );
                })}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
