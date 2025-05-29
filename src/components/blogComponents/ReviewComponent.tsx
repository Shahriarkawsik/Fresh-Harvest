"use client";
import React, { useState } from "react";

export default function ReviewComponent() {
  const [toggle, setToggle] = useState<string>("Des");
  return (
    <section className="space-y-6 sm:space-y-8 lg:space-y-10">
      <div className="flex items-center gap-5">
        <button
          onClick={() => setToggle("Des")}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-xl ${
            toggle === "Des"
              ? "bg-[#749B3F] text-white"
              : "border border-[#D9D9D9]"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setToggle("Rev")}
          // className="px-6 py-3 rounded-lg border border-[#D9D9D9] text-xl"
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-xl ${
            toggle === "Rev"
              ? "bg-[#749B3F] text-white"
              : "border border-[#D9D9D9]"
          }`}
        >
          Review ({1})
        </button>
      </div>
      {/* ToDo: */}
      <p className="px-10 py-8 bg-[#F4F6F6] rounded-3xl lg:w-[62%] text-justify">
        {toggle === "Des"
          ? `Our coconuts are sustainably grown, ensuring the best quality and taste.
        Each coconut is handpicked and carefully prepared, offering you the
        freshest product possible. Rich in healthy fats, electrolytes, and
        essential nutrients, coconuts provide both hydration and nourishment.
        Whether you’re using the water, flesh, or milk, our coconuts bring
        versatility to your kitchen while supporting healthy living.
        Perfect for smoothies, desserts, curries, and more — let the natural sweetness of
        the coconut elevate your recipes. Enjoy the tropical goodness in its
        purest form, directly from nature.`
          : `Review`}
        {/* Our coconuts are sustainably grown, ensuring the best quality and taste.
        Each coconut is handpicked and carefully prepared, offering you the
        freshest product possible. Rich in healthy fats, electrolytes, and
        essential nutrients, coconuts provide both hydration and nourishment.
        Whether you’re using the water, flesh, or milk, our coconuts bring
        versatility to your kitchen while supporting healthy living. Perfect for
        smoothies, desserts, curries, and more — let the natural sweetness of
        the coconut elevate your recipes. Enjoy the tropical goodness in its
        purest form, directly from nature. */}
      </p>
    </section>
  );
}
