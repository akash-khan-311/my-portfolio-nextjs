"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const NavItems = ({ label, address, handleToggle }) => {
    const pathname = usePathname()
    const isActive = pathname === address

  return (
    <Link
      href={address}
      end
      onClick={handleToggle}
      className={
        `flex justify-center px-4 py-2 my-1 uppercase  transition-colors duration-300 transform hover:bg-[#f3155852]  hover:text-white ${
            isActive
            ? "bg-[#F31559] text-white "
            : "text-black dark:text-gray-500 "
        }`
      }
    >
      <span className="mx-4 font-bold">{label}</span>
    </Link>
  );
};

export default NavItems;