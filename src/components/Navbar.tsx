"use client";
import Link from "next/link";
import { IoMdClose, IoMdHeart } from "react-icons/io";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { DialogHeader } from "./ui/dialog";
import { Checkbox } from "@radix-ui/react-checkbox";
import { RiShoppingCart2Fill } from "react-icons/ri";

const Navbar = () => {
  const pathName = usePathname();
  // console.log(pathName);
  /////////////////////dumy
  const status = "authenticated";

  const [navBg, setNavBg] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);

  const handleOpenNave = () => setShowNav(true);
  const handleCloseNave = () => setShowNav(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const openNav = showNav ? "translate-x-0" : "translate-x-[100%]";

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 100) {
        setNavBg(true);
      }

      if (window.scrollY < 100) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/aboutUs" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header>
      {/* desktop menu */}
      <div
        className={`${
          navBg ? "bg-white shadow-xl transition-all ease" : "text-white"
        } h-[12vh] flex items-center fixed z-[999] w-full`}
      >
        <nav className="flex justify-between items-center w-11/12 mx-auto px-4 md:px-8">
          {/* left logo  */}
          <div className=" px-4 py-0.5 rounded-xs">
            <Link
              href="/"
              className="text-2xl lg:text-3xl font-semibold text-black"
            >
              <p className="flex items-center gap-2">
                <Image
                  src={"/assets/logo.png"}
                  alt="logo"
                  width={30}
                  height={30}
                  className="bg-transparent rounded-full w-6 h-6"
                />
                <span className="text-[#212337] text-xl md:text-2xl font-bold">
                  Fresh Harvests
                </span>
              </p>
            </Link>
          </div>

          {/* center content */}
          <div className="hidden lg:flex items-center justify-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`pb-1 text-[#4A4A52] text-4 ${
                  pathName === link.path
                    ? "font-bold border-b-2 border-0 border-[#749B3F]"
                    : "font-semibold"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* right content */}
          <div className="flex items-center gap-3">
            <div className=" cursor-pointer p-0.5">
              <p className="hidden lg:flex items-center gap-2">
                <IoMdHeart
                  className={`${
                    pathName === "/blog" ? "text-[#749B3F]" : "text-black"
                  } text-3xl`}
                />
                <span
                  className={`${
                    pathName === "/blog" ? "text-[#749B3F]" : "text-black"
                  } text-xl`}
                >
                  Favorites
                </span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/card" className="relative">
                <RiShoppingCart2Fill
                  className={`${
                    pathName === "/blog" ? "text-[#749B3F]" : "text-black"
                  }text-3xl`}
                  size={25}
                />
                <sup className="absolute left-4 -top-1 w-4 h-4 rounded-full bg-red-500 flex justify-center items-center text-sm p-1 text-white">
                  0
                </sup>
              </Link>
              <p
                className={`${
                  pathName === "/blog" ? "text-[#749B3F]" : "text-black"
                }text-3xl hidden lg:flex`}
              >
                Cart
              </p>
            </div>
            {/* modal start from here  */}
            <div className="hidden lg:flex">
              {status !== "authenticated" ? (
                <button className="font-semibold cursor-pointer py-1 px-4 rounded-4xl">
                  Logout
                </button>
              ) : (
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="font-semibold cursor-pointer py-1 px-4 rounded-4xl">
                        Sign In
                      </button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-3xl text-center font-bold text-[#212337]">
                          Login
                        </DialogTitle>
                      </DialogHeader>
                      {/* Sample form UI (replace with real form logic) */}
                      <form className="flex flex-col gap-3 mt-4">
                        <label className="text-[#212337]">Email</label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="p-2 border rounded"
                        />
                        <label className="text-[#212337]">Password</label>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="p-2 border rounded"
                        />
                        <span
                          onClick={() => setShowPassword(!showPassword)}
                          className="btn btn-xs absolute right-10 top-58"
                        >
                          {showPassword ? (
                            <FaEyeSlash className="text-[#A6A6A6]" />
                          ) : (
                            <FaEye className="text-[#A6A6A6]" />
                          )}
                        </span>
                        <div className="flex justify-between items-center">
                          <p className="flex items-center gap-2">
                            <Checkbox className="border-[#FF6A1A]" />
                            Remember me
                          </p>
                          <span className="border-b-2 border-gray-600">
                            Forget Password
                          </span>
                        </div>
                        <button
                          type="submit"
                          className="bg-[#FF6A1A] font-semibold text-white p-2 rounded text-lg"
                        >
                          Login
                        </button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </div>
            <div className="ml-5">
              <button onClick={handleOpenNave} className="lg:hidden">
                <GiHamburgerMenu size={20} />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* mobile menu */}
      <div>
        {/* overlay */}
        {/* <div
          className={`${openNav} fixed inset-0 transform transition-all duration-500 z-[1000] bg-black opacity-0`}
        ></div> */}

        {/* sidebar menu */}
        <div
          className={`${openNav} right-0 fixed text-white flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-gray-600 space-y-6 z-[1006] transform transition-all duration-500`}
        >
          <div className="flex flex-col justify-center space-y-5 text-black p-8 mt-10">
            <Link
              onClick={handleCloseNave}
              href="/"
              className={`${
                pathName === "/"
                  ? "font-bold border-b-2 border-orange-600"
                  : "font-semibold"
              } w-fit`}
            >
              Home
            </Link>
            <Link
              onClick={handleCloseNave}
              href="/shop"
              className={`${
                pathName === "/shop"
                  ? "font-bold border-b-2 border-orange-600"
                  : "font-semibold"
              } w-fit`}
            >
              Shop
            </Link>
            <Link
              onClick={handleCloseNave}
              href="/aboutUs"
              className={`${
                pathName === "/aboutUs"
                  ? "font-bold border-b-2 border-orange-600"
                  : "font-semibold"
              } w-fit`}
            >
              About Us
            </Link>
            <Link
              onClick={handleCloseNave}
              href="/blog"
              className={`${
                pathName === "/blog"
                  ? "font-bold border-b-2 border-orange-600"
                  : "font-semibold"
              } w-fit`}
            >
              Blog
            </Link>
          </div>
          <button onClick={handleCloseNave} className="absolute top-8 right-8">
            <IoMdClose className="size-6 text-white cursor-pointer" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
