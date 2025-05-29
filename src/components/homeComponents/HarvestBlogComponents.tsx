import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function HarvestBlog() {
  return (
    <section className="space-y-6 lg:space-y-6">
      {/* Header */}
      <div className="text-center space-y-4 lg:space-y-5">
        <button className="text-[14px] text-[#749B3F] sm:text-xl bg-[#749B3F1A] rounded-lg lg:rounded-lg font-semibold text-greenText px-3 py-1 ">
          Our Blog
        </button>
        <h2 className="text-[#212337] font-medium text-3xl sm:text-4xl lg:text-5xl">
          Fresh Harvest Blog
        </h2>
        <p className="text-[12px] sm:text-[14PX] text-[#4A4A52] max-sm:w-[80%] lg:w-[25%] mx-auto">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-12">
        {/* Card one */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-10 ">
          <figure>
            <Image
              src="/assets/blog-1.png"
              width={200}
              height={200}
              className="w-full max-h-[260px] sm:max-h-[360px] lg:max-h-[260px] rounded-2xl"
              alt="A fruit image"
            />
          </figure>
          <div className="space-y-4 sm:space-y-4 lg:space-y-2">
            <p className="text-[#4A4A52] lg:text-xl lg:leading-6">
              May 23, 2024
            </p>
            <h4 className="text-[#212337] lg:text-xl font-semibold">
              Exploring Seasonal Delights: A Guide to What&apos;s Fresh Right
              Now
            </h4>
            <p className="text-[#FF6A1A] text-xl font-semibold flex items-center gap-2">
              Read More <FaArrowRight />
            </p>
          </div>
        </div>
        {/* Card two */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-10 ">
          <figure>
            <Image
              src="/assets/blog-2.jpg"
              width={200}
              height={200}
              className="w-full max-h-[260px] sm:max-h-[360px] lg:max-h-[260px] rounded-2xl"
              alt="A fruit image"
            />
          </figure>
          <div className="space-y-4 sm:space-y-4 lg:space-y-2">
            <p className="text-[#4A4A52] lg:text-xl lg:leading-6">
              May 23, 2024
            </p>
            <h4 className="text-[#212337] lg:text-xl font-semibold">
              Mastering Salad Creations: Tips and Tricks for Building Delicious
              and Nutritious Salads
            </h4>
            <p className="text-[#FF6A1A] text-xl font-semibold flex items-center gap-2">
              Read More <FaArrowRight />
            </p>
          </div>
        </div>
        {/* Card three */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-10 ">
          <figure>
            <Image
              src="/assets/blog-3.jpg"
              width={200}
              height={200}
              className="w-full max-h-[260px] sm:max-h-[360px] lg:max-h-[260px] rounded-2xl"
              alt="A fruit image"
            />
          </figure>
          <div className="space-y-4 sm:space-y-4 lg:space-y-2">
            <p className="text-[#4A4A52] lg:text-xl lg:leading-6">
              May 23, 2024
            </p>
            <h4 className="text-[#212337] lg:text-xl font-semibold">
              The Art of Meal Prepping: How to Save Time and Eat Healthy
              Throughout the Week
            </h4>
            <p className="text-[#FF6A1A] text-xl font-semibold flex items-center gap-2">
              Read More <FaArrowRight />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
