"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./../globals.css";
import { FaHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
// import { ReactStarsRating } from 'react-awesome-stars-rating';
import { Rating } from "react-simple-star-rating";
import ReviewComponent from "@/components/blogComponents/ReviewComponent";

export default function Blog() {
  const [quantity, setQuantity] = useState<number>(1);
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <section className="container mx-auto space-y-6 sm:space-y-10">
      {/* section Description */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-20">
        <figure className="w-full">
          <Image
            src="/assets/coconut.png"
            width={500}
            height={500}
            alt="Picture of coconut"
            className="w-full h-full rounded-3xl"
          />
        </figure>
        <div className="space-y-10 font-rubik">
          <div className="space-y-6">
            <button className="text- text-xl bg-[#749B3F1A] rounded-xl font-medium text-greenText px-3 py-1 ">
              Fruits
            </button>
            <h2 className="text-[#212337] text-5xl font-medium ">Coconut</h2>
            {/* TODO: */}
            {/* <div className="App">
            <Rating className="flex" initialValue={5} />
          </div> */}
            <p>Review</p>
            <h4 className="text-[#FF6A1A] font-semibold text-3xl">$6.3/kg</h4>
            <p className="text-[#4A4A52] text-[18px] text-justify">
              From our farm directly to your door, our fresh coconuts are
              harvested at the peak of ripeness, offering you a sweet, hydrating
              treat full of flavor. Packed with natural nutrients, coconut is
              perfect for a variety of culinary uses, from smoothies to savory
              dishes, or even for a refreshing drink straight from the shell.
            </p>
          </div>
          <div className="space-y-6">
            {/* Quantity */}
            <div className="flex gap-10 items-center">
              <span className="text-xl font-medium text-[#212337]">
                Quantity
              </span>
              <div>
                <button
                  className="px-5 py-1 rounded-l-md border border-[#D9D9D9] text-2xl font-bold"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <button className="px-5 py-1 border border-[#D9D9D9] border-x-0 text-2xl font-bold text-[#343434]">
                  {quantity}
                </button>
                <button
                  className="px-5 py-1 rounded-r-md border border-[#D9D9D9] text-2xl font-bold"
                  onClick={handleIncrease}
                >
                  +
                </button>
                <span className="ml-5">/kg</span>
              </div>
            </div>
            {/* Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <button className="flex items-center justify-center gap-5 px-8 py-4 rounded-lg bg-[#F4F6F6]">
                <FaHeart />
                <span className="text-[#4A4A52] font-semibold text-xl">
                  Save as favorite
                </span>
              </button>
              <button className="flex items-center justify-center gap-5 px-8 py-4 rounded-lg bg-[#FF6A1A] text-white">
                <MdShoppingCart />
                <span className="font-semibold text-xl font-rubik">
                  Add to cart
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Review */}
      <ReviewComponent />
    </section>
  );
}
