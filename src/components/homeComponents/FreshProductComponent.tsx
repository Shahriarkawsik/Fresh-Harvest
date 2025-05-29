import React, { useState } from "react";

export default function FreshProductComponent() {
  const [toggle, setToggle] = useState<string>("All");
  return (
    <section>
      {/* Header */}
      <div className="text-center space-y-4 lg:space-y-5">
        <button className="text-[14px] sm:text-xl bg-[#749B3F1A] rounded-lg lg:rounded-xl font-semibold text-greenText px-3 py-1 ">
          Out Products
        </button>
        <h2 className="text-[#212337] font-medium text-3xl sm:text-4xl lg:text-5xl">
          Our Fresh Products
        </h2>
        <p className="text-[12px] sm:text-base text-[#4A4A52] max-sm:w-[80%] lg:w-[30%] mx-auto">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>
        {/* Buttons */}
        <div className="max-sm:space-x-2 max-lg:space-x-3 max-2xl:space-x-4 2xl:space-x-4">
          <button
            onClick={() => setToggle("All")}
            className={`px-4 py-2 sm:px-8 sm:py-4 lg:px-6 lg:py-3 rounded-lg text-[12px] sm:text-xl lg:text-xl ${
              toggle === "All"
                ? "bg-[#749B3F] text-white"
                : "border border-[#D9D9D9]"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setToggle("Fruits")}
            className={`px-4 py-2 sm:px-8 sm:py-4 lg:px-6 lg:py-3 rounded-lg text-[12px] sm:text-xl lg:text-xl ${
              toggle === "Fruits"
                ? "bg-[#749B3F] text-white"
                : "border border-[#D9D9D9]"
            }`}
          >
            Fruits
          </button>
          <button
            onClick={() => setToggle("Vegetables")}
            className={`px-4 py-2 sm:px-8 sm:py-4 lg:px-6 lg:py-3 rounded-lg text-[12px] sm:text-xl lg:text-xl ${
              toggle === "Vegetables"
                ? "bg-[#749B3F] text-white"
                : "border border-[#D9D9D9]"
            }`}
          >
            Vegetables
          </button>
          <button
            onClick={() => setToggle("Salad")}
            className={`px-4 py-2 sm:px-8 sm:py-4 lg:px-6 lg:py-3 rounded-lg text-[12px] sm:text-xl lg:text-xl ${
              toggle === "Salad"
                ? "bg-[#749B3F] text-white"
                : "border border-[#D9D9D9]"
            }`}
          >
            Salad
          </button>
        </div>
      </div>
    </section>
  );
}
