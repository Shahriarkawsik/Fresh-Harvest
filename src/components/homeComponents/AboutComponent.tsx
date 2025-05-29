import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div>
      <div className="max-w-[1213px] mx-auto container ">
        <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 items-center justify-center gap-16 p-4 md:p-0">
          <div className="relative">
            {/* image */}
            <figure>
              <Image
                src={"/assets/foodHarvesting.png"}
                width={550}
                height={550}
                className=""
                alt="image"
              />
            </figure>
            {/* Fresh Harvest */}
            <button className="flex items-center gap-2 sm:gap-4 rounded-lg px-4 py-1 md:px-6 md:py-3 bg-[#fff] absolute bottom-[30%] right-[20%] sm:bottom-[30%] sm:right-[20%] lg:bottom-[40%] shadow">
              <Image
                src={"/assets/logo.png"}
                width={25}
                height={25}
                alt="Fresh Harvest logo"
              />
              <h6 className="text-[#212337] font-bold text-[15px] sm:text-xl">
                Fresh Harvest
              </h6>
            </button>
            {/* vegetable Card*/}
            <div className="p-2 rounded-xl shadow text-center space-y-1 sm:space-y-2 absolute -bottom-20 -right-5 sm:-bottom-[20%] sm:right-[1%] -lg:bottom-[40%] -lg:right-[1%] bg-[#fff]">
              <figure className="bg-[#F4F6F6] rounded-lg w-full h-full flex items-center justify-center p-1">
                <Image
                  src={"/assets/latos.png"}
                  width={140}
                  height={160}
                  className="max-sm:w-[70px] max-sm:h-[60px] max-lg:w-[120px] max-lg:h-[100px]"
                  alt="a vegetable image"
                />
              </figure>
              <h4 className="text-[#212337] text-[9.6px] sm:text-[14px] font-medium">
                Mushroom
              </h4>
              <p className="text-[#4A4A52] text-[9.6px] sm:text-[14px]">
                $2.3/kg
              </p>
              <button className="text-[#212337] border border-[#D9D9D9] w-full rounded-md py-2 text-[9.6px] sm:text-[14px] hover:bg-[#FF6A1A] hover:text-white hover:transition-all">
                Add to cart
              </button>
            </div>
          </div>

          {/* content */}
          <div className="space-y-5 lg:space-y-10 ">
            <button className="text-[14px] text-[#749B3F] sm:text-xl bg-[#749B3F1A] rounded-lg font-medium px-3 py-1 ">
              About Us
            </button>
            <h2 className="text-3xl md:text-5xl text-[#212337] font-semibold">
              About Fresh Harvest
            </h2>
            <p className="text-[#4A4A52] text-[14px] leading-6 text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              praesentium temporibus excepturi impedit quaerat sequi maiores
              voluptatem beatae laborum fugit culpa ex eos, hic ullam iusto
              consectetur dolorum laudantium, quae non ea perferendis aperiam
              dolor. Optio, deserunt. Nisi, magni facilis, neque non sapiente
              recusandae unde dolorem quae reiciendis, voluptas qui.
            </p>
            <button className=" border border-[#FF6A1A]  text-[#FF6A1A] max-sm:text-[14px] text-xl px-6 py-3 lg:px-8 lg:py-4 rounded-lg">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
