import Image from "next/image";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";

// import Image from 'next/image'
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 px-4 md:px-10 mt-28 w-[92%] md:w-[92%] container mx-auto lg:space-y-10 mb-5">
      <div className="lg:flex lg:gap-10 2xl:gap-40">
        {/* Logo and App Links */}
        <div className="flex flex-col justify-between ">
          {/* Fresh Harvest */}
          <button className="flex items-center gap-2 sm:gap-4 rounded-lg px-4 py-1 md:px-6 md:py-3 bg-[#fff]">
            <Image
              src={"/assets/logo.png"}
              width={25}
              height={25}
              alt="Fresh Harvest logo"
            />
            <h6 className="text-[#212337] font-bold text-[15px] sm:text-xl">
              Fresh Harvest
            </h6>
          </button>
          <div className="space-y-4">
            <h3 className="text-[#212337] font-medium text-[12px]">
              Download App:
            </h3>
            <div className="flex ">
              <figure className="w-ful max-lg:mx-auto">
                <Image
                  src="/assets/appleApp.png"
                  width={138}
                  height={40}
                  alt="appleApp"
                  // className="w-full h-full rounded-3xl"
                  // className="border max-sm:w-[340px] max-sm:h-[340px] max-lg:w-[700px] max-lg:h-[700px] max-2xl:w-[600px] max-2xl:h-[600px] 2xl:w-[650px] 2xl:h-[650px] py-5 rounded-2xl bg-fixed"
                />
              </figure>
              <figure className="w-ful max-lg:mx-auto">
                <Image
                  src="/assets/googlePlay.png"
                  width={138}
                  height={40}
                  alt="appleApp"
                  // className="w-full h-full rounded-3xl"
                  // className="border max-sm:w-[340px] max-sm:h-[340px] max-lg:w-[700px] max-lg:h-[700px] max-2xl:w-[600px] max-2xl:h-[600px] 2xl:w-[650px] 2xl:h-[650px] py-5 rounded-2xl bg-fixed"
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-1 lg:gap-20">
          {/* Quick Links 1 */}
          <div className="mb-6 md:mb-0">
            <h4 className="max-sm:text-[12px] text-lg font-medium mb-2">
              Quick Links 1
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="max-sm:text-[12px] text-xl text-[#4A4A52]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="max-sm:text-[12px] text-xl text-[#4A4A52]"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="max-sm:text-[12px] text-xl text-[#4A4A52]"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="max-sm:text-[12px] text-xl text-[#4A4A52]"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div className="mb-6 md:mb-0">
            <h4 className="max-sm:text-[12px] text-lg font-medium mb-2">
              Quick Links 2
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/favorites"
                  className="max-sm:text-[12px] text-xl text-[#4A4A52]"
                >
                  Favorites
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="max-sm:text-[12px] text-xl text-[#4A4A52]"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  href="/sign-in"
                  className="max-sm:text-[12px] text-xl text-[#4A4A52]"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="max-sm:text-[12px] text-xl text-[#4A4A52]"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="mb-6 md:mb-0">
            <h4 className="max-sm:text-[12px] text-lg font-medium mb-2">
              Contact us
            </h4>
            <ul className="space-y-2">
              <li className="max-sm:text-[12px] text-xl text-[#4A4A52]">
                Phone: +123 5678 90
              </li>
              <li className="max-sm:text-[12px] text-xl text-[#4A4A52]">
                Email: freshharvests@gmail.com
              </li>
              <li className="max-sm:text-[12px] text-xl text-[#4A4A52]">
                Address: Jl. Trijung Sari, Pontianak, Indonesia
              </li>
            </ul>
            <div className="flex space-x-2 mt-2">
              {/* <Image width={50} height={50} src="visa.png" alt="Visa" className="h-6" />
                        <Image width={50} height={50} src="paypal.png" alt="PayPal" className="h-6" />
                        <Image width={50} height={50} src="apple-pay.png" alt="Apple Pay" className="h-6" /> */}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex max-sm:flex-col-reverse max-sm:justify-center justify-between max-w-[1213px] mx-auto">
        <h4 className=" text-[#212337] max-sm:text-[12px] text-sm mt-6">
          © Copyright {new Date().getFullYear()}. All Rights Reserved by Banana
          Studio
        </h4>
        {/* social link */}
        <div className="flex justify-center space-x-4 mt-2">
          <Link href={"https://x.com"}>
            <button className="flex items-center justify-center text-xl bg-black text-white rounded-full p-1 w-8 h-8 ">
              <IoLogoTwitter />
            </button>
          </Link>
          <Link href={"https://www.facebook.com"}>
            <button className="flex items-center justify-center text-xl bg-black text-white rounded-full p-1 w-8 h-8 ">
              <BsFacebook />
            </button>
          </Link>
          <Link href={"https://www.instagram.com/"}></Link>
          <button className="flex items-center justify-center text-xl bg-black text-white rounded-full p-1 w-8 h-8 ">
            <FaSquareInstagram />
          </button>
        </div>
      </div>
    </footer>
  );
}
