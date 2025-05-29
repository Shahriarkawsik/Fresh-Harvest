import React from "react";

const SpecialOffer = () => {
  return (
    <div className="relative overflow-hidden mt-24">
      {/* Flipped background */}
      <div
        className="absolute inset-0 -z-10 scale-x-[-1]"
        style={{
          backgroundImage: "url('/fruit_background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1213px] mx-auto container mt-24 py-[90px] md:pl-[90px] space-y-2 p-4 md:p-0 text-black">
        <span className="text-[14px] md:text-[20px] text-[#749B3F] font-medium bg-[rgba(116,155,63,0.1)] py-2 px-4">
          Special Offer
        </span>
        <h1 className="text-[48px] md:text-[80px] font-500 text-black">
          Seasonal Fruit Bundle
        </h1>
        <h4 className="text-[32px] md:text-[48px] font-500">
          Discount up to <span className="text-[#FF6A1A]">80% OFF</span>
        </h4>

        <div className="flex gap-2">
          <div className="p-4 bg-[#ddd] text-black">
            <h4>03</h4>
            <p>Days</p>
          </div>
          <div className="p-4 bg-[#ddd] text-black">
            <h4>18</h4>
            <p>Hours</p>
          </div>
          <div className="p-4 bg-[#ddd] text-black">
            <h4>54min</h4>
            <p>Min</p>
          </div>
          <div className="p-4 bg-[#ddd] text-black">
            <h4>21</h4>
            <p>Second</p>
          </div>
        </div>

        <div className=" mt-5">
          <p className="py-[15px] px-[31px] bg-[#176D38] w-fit mx-auto md:mx-0 text-white">
            CODE : FRESH28
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
