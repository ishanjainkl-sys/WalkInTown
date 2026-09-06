import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DesktopMenu({ menu }) {
  const [isHover, setIsHover] = useState(false);

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

  const hasSubMenu = menu?.subMenu?.length;

  return (
    <motion.div
      className="group/link"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      key={menu.label}
    >
      <span className="flex items-center relative text-black hover:bg-white/5 cursor-pointer px-1 py-1 rounded-xl">
        {menu.label}
        {hasSubMenu && (
          <ChevronDown
            size={20}
            className="mt-[0.6px] group-hover/link:rotate-180 duration-200"
          />
        )}
      </span>
      {hasSubMenu && (
        <motion.div
          className="absolute top-[4rem] p-8 max-w-3xl rounded-[6px] origin-[50%_-170px] shadow-md backdrop-blur bg-gray-50"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div
            className={`gap-7 space-y-0 ${
              menu.gridCols == 1
                ? "columns-1"
                : menu.gridCols == 2
                ? "columns-2"
                : menu.gridCols == 3
                ? "columns-3"
                : "columns-4"
            }`}
            style={{ columnGap: "1.75rem" }} // Adjusts spacing between columns
          >
            {menu.subMenu.map((submenu, index) => (
              <div key={index} className="space-y-0.5">
                <Link
                  href={"search"}
                  className="py-2 font-semibold text-base text-primary-red"
                >
                  {submenu.title}
                </Link>
                {submenu.items.map((item, i) => (
                  <Link
                    href={item.slug}
                    key={i}
                    className="hover:scale-105 hover:text-black w-fit block text-sm font-medium cursor-pointer text-gray-800"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
