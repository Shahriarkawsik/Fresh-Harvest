import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function Register() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div>
      <form className="flex flex-col gap-3 mt-4">
        <label className="text-[#212337]">Full Name</label>
        <input
          type="text"
          placeholder="Enter your Name"
          className="p-4 border rounded-lg"
        />
        <label className="text-[#212337]">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="p-4 border rounded-lg"
        />
        <label className="text-[#212337]">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="p-4 border rounded-lg"
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="btn btn-xs absolute right-10 top-64"
        >
          {showPassword ? (
            <FaEyeSlash className="text-[#A6A6A6]" />
          ) : (
            <FaEye className="text-[#A6A6A6]" />
          )}
        </span>
        <button
          type="submit"
          className="bg-[#FF6A1A] font-semibold text-white py-4 rounded-lg text-lg"
        >
          Register
        </button>
        <div className="createDivider text-center py-6 text-4 text-[#4A4A52] font-semibold">
          Or Sign in with
        </div>
        {/* button */}
        <div className="flex justify-between items-center gap-4">
          <button className="flex items-center gap-3 border-2 border-[#D9D9D9] w-full justify-center py-3 rounded-lg">
            <FcGoogle className="w-6 h-6" />{" "}
            <span className="text-[#212337] font-bold text-xl ">Google</span>
          </button>
          <button className="flex items-center gap-3 border-2 border-[#D9D9D9] w-full justify-center py-3 rounded-lg">
            <FaFacebook className="w-6 h-6" />{" "}
            <span className="text-[#212337] font-bold text-xl ">Facebook</span>
          </button>
        </div>
        <div className="flex justify-center items-center gap-1">
          <p className="text-black text-4 font-bold">
            Already have an account?
          </p>
          <Link href="/register" className="text-[#FF6A1A] font-bold text-4">
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
}
