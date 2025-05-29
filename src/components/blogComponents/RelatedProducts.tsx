import Image from "next/image";
import React from "react";
export default function RelatedProducts() {
  return (
    <section>
      {/* Header */}
      <div className="text-center space-y-4 lg:space-y-5">
        <button className="text-[14px] sm:text-xl bg-[#749B3F1A] rounded-lg lg:rounded-xl font-medium text-greenText px-3 py-1 ">
          Out Products
        </button>
        <h2 className="text-[#212337] font-medium text-3xl sm:text-4xl lg:text-5xl">
          Related Products
        </h2>
        <p className="text-[12px] sm:text-base text-[#4A4A52]">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card one */}
        <div className="p-4 rounded-2xl shadow-xl space-y-4">
          <figure className="bg-[#F4F6F6] rounded-2xl flex items-center justify-center">
            <Image
              src="/assets/kiwi.png"
              width={200}
              height={200}
              className="h-full py-5"
              alt="A fruit image"
            />
          </figure>
          <div className="text-center space-y-2">
            <h4 className="font-medium text-[#212337] text-xl">Kiwi</h4>
            <p className="text-[#4A4A52] ">$5.3/kg</p>
            <button className="text-[#212337] font-medium border border-[#D9D9D9] w-full rounded-md py-1 text-xl">
              Add to cart
            </button>
          </div>
        </div>
        {/* Card Two */}
        <div className="p-4 rounded-2xl shadow-xl space-y-4">
          <figure className="bg-[#F4F6F6] rounded-2xl flex items-center justify-center">
            <Image
              src="/assets/kiwi.png"
              width={200}
              height={200}
              className="h-full py-5"
              alt="A fruit image"
            />
          </figure>
          <div className="text-center space-y-2">
            <h4 className="font-medium text-[#212337] text-xl">Kiwi</h4>
            <p className="text-[#4A4A52] ">$5.3/kg</p>
            <button className="text-[#212337] font-medium border border-[#D9D9D9] w-full rounded-md py-1 text-xl">
              Add to cart
            </button>
          </div>
        </div>
        {/* Card Three */}
        <div className="p-4 rounded-2xl shadow-xl space-y-4">
          <figure className="bg-[#F4F6F6] rounded-2xl flex items-center justify-center">
            <Image
              src="/assets/kiwi.png"
              width={200}
              height={200}
              className="h-full py-5"
              alt="A fruit image"
            />
          </figure>
          <div className="text-center space-y-2">
            <h4 className="font-medium text-[#212337] text-xl">Kiwi</h4>
            <p className="text-[#4A4A52] ">$5.3/kg</p>
            <button className="text-[#212337] font-medium border border-[#D9D9D9] w-full rounded-md py-1 text-xl">
              Add to cart
            </button>
          </div>
        </div>
        {/* Card Four */}
        <div className="p-4 rounded-2xl shadow-xl space-y-4">
          <figure className="bg-[#F4F6F6] rounded-2xl flex items-center justify-center">
            <Image
              src="/assets/kiwi.png"
              width={200}
              height={200}
              className="h-full py-5"
              alt="A fruit image"
            />
          </figure>
          <div className="text-center space-y-2">
            <h4 className="font-medium text-[#212337] text-xl">Kiwi</h4>
            <p className="text-[#4A4A52] ">$5.3/kg</p>
            <button className="text-[#212337] font-medium border border-[#D9D9D9] w-full rounded-md py-1 text-xl">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
