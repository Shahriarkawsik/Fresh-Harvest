import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <section className="space-y-10">
      {/* Header  */}
      <div className="text-center space-y-4 lg:space-y-5">
        <button className="text-[14px] text-[#749B3F] sm:text-xl bg-[#749B3F1A] rounded-lg lg:rounded-lg font-semibold text-greenText px-3 py-1 ">
          Testimonial
        </button>
        <h2 className="text-[#212337] font-medium text-3xl sm:text-4xl lg:text-5xl">
          What Our Customers Say
        </h2>
        <p className="text-[12px] sm:text-base text-[#4A4A52] max-sm:w-[80%] lg:w-[35%] mx-auto text-center">
          Don&apos;t just take our word for it—here&apos;s what some of our
          customers have to say about their experience with Fresh Harvest:
        </p>
      </div>
      <div className="lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center max-lg:gap-5">
        {/* image */}
        <figure className="flex items-center justify-center relative">
          <Image
            src={"/assets/testimonial.png"}
            width={287}
            height={396}
            alt="A person Image"
            className="rounded-[200px]"
          />
          <Image
            src={"/assets/3dots.png"}
            width={80}
            height={80}
            alt="A person Image"
            className="absolute top-[0%] right-[5%] sm:top-[0%] sm:right-[20%] lg:top-[0%] lg:right-[15%]"
          />
        </figure>
        {/* content */}
        <div className="space-y-[32px] bg-[#F4F6F6] rounded-xl lg:rounded-3xl px-6 py-3 lg:px-6 lg:py-4">
          <p className="text-[#4A4A52] lg:text-xl leading-8">
            I absolutely love Fresh Harvest! The quality of their produce is
            outstanding. It’s always fresh, flavorful, and delicious. The
            convenience of ordering online and having it delivered to my
            doorstep saves me so much time. Fresh Harvest has become my go-to
            for all my fruit and vegetable needs.
          </p>
          <p className="text-[18px] text-[#212337]">
            <span className="font-medium">Jane Doe - </span> Professional Chef
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
