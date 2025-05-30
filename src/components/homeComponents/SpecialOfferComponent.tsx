"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SpecialOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown logic
  useEffect(() => {
    const countdownTarget = new Date("2025-06-07T23:59:59");

    const updateCountdown = () => {
      const now = new Date();
      const difference = countdownTarget.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative lg:mt-32">
      <div className="max-lg:text-center ">
        <button className="text-[14px] text-[#749B3F] sm:text-xl bg-[#749B3F1A] rounded-lg lg:rounded-lg font-semibold text-greenText px-3 py-1 ">
          Special Offer
        </button>
        <h1 className="text-[48px] md:text-[80px] font-bold text-[#212337]">
          Seasonal Fruit Bundle
        </h1>
        <h4 className="text-[32px] md:text-[48px] font-semibold">
          <span className="text-[#212337]">Discount up to </span>{" "}
          <br className="lg:hidden" />
          <span className="text-[#FF6A1A]">80% OFF</span>
        </h4>
        {/* countdown */}
        <div className="flex max-lg:justify-center max-lg:items-center gap-2">
          {/* Days */}
          <div className="flex flex-col justify-center items-center gap-2 shadow bg-[#FFF] rounded-xl w-[98px] h-[122px]">
            <h4 className="text-[#212337] text-4xl font-medium">
              {String(timeLeft.days).padStart(2, "0")}
            </h4>
            <p className="text-[#4A4A52] text-xl">Days</p>
          </div>
          {/* Hour */}
          <div className="flex flex-col justify-center items-center gap-2 shadow bg-[#FFF] rounded-xl w-[98px] h-[122px]">
            <h4 className="text-[#212337] text-4xl font-medium">
              {String(timeLeft.hours).padStart(2, "0")}
            </h4>
            <p className="text-[#4A4A52] text-xl">Hours</p>
          </div>
          {/* Min */}
          <div className="flex flex-col justify-center items-center gap-2 shadow bg-[#FFF] rounded-xl w-[98px] h-[122px]">
            <h4 className="text-[#212337] text-4xl font-medium">
              {String(timeLeft.minutes).padStart(2, "0")}
            </h4>
            <p className="text-[#4A4A52] text-xl">Min</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 shadow bg-[#FFF] rounded-xl w-[98px] h-[122px]">
            <h4 className="text-[#212337] text-4xl font-medium">
              {String(timeLeft.seconds).padStart(2, "0")}
            </h4>
            <p className="text-[#4A4A52] text-xl">Second</p>
          </div>
        </div>
        {/* Promo code */}
        <div className=" mt-5">
          <button className="rounded-[92.88px] px-8 py-4 text-2xl lg:text-3xl font-semibold bg-[#176D38]">
            <span className="text-[#FFF]">CODE :</span>{" "}
            <span className="text-[#fac714]">FRESH28</span>
          </button>
        </div>
      </div>
      <figure className="max-lg:hidden absolute lg:top-[25%] lg:right-[0%] 2xl:top-[20%] 2xl:right-[10%]">
        <Image
          src={"/assets/fruits.png"}
          alt="logo"
          width={627}
          height={380}
          className=""
        />
      </figure>
    </section>
  );
};

export default SpecialOffer;
