import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="max-w-[1213px] mx-auto container mt-24 p-4 md:p-0">
      {/* ToDo header দিতে হবে */}

      <div className="md:flex items-center gap-[83px] pt-4">
        {/* image */}
        <figure>
          {/* ToDo  */}
          <Image src={""} width={200} height={200} alt="A person Image" />
        </figure>

        {/* content */}
        <div className="space-y-[32px]">
          <p className="text-[#4A4A52]">
            I absolutely love Fresh Harvest! The quality of their produce is
            outstanding. It’s always fresh, flavorful, and delicious. The
            convenience of ordering online and having it delivered to my
            doorstep saves me so much time. Fresh Harvest has become my go-to
            for all my fruit and vegetable needs.
          </p>
          <p className="text-[18px]">
            <span className="font-medium">— Jane Doe</span>, Professional Chef
          </p>
        </div>
      </div>

      <div className="mx-auto pt-8">
        <div className="w-fit mx-auto space-x-1.5 flex">
          <div className="bg-[#749B3F] w-4 h-4 rounded-full"></div>
          <div className="bg-[#D9D9D9] w-4 h-4 rounded-full"></div>
          <div className="bg-[#D9D9D9] w-4 h-4 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
