import Image from "next/image";

const Banner = () => {
  return (
    <div
      className="w-full bg-cover bg-center pt-[60px] lg:pt-[10px]"
      style={{
        backgroundImage: "linear-gradient(to right, white 73%, #749B3F 27%)",
      }}
    >
      <div className="w-11/12 mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end min-h-[85vh]">
          {/* Left Content */}
          <div className="text-black relative w-full lg:w-1/2 mb-10 lg:mb-0">
            <span className="text-[#749B3F] text-lg px-4 py-1 bg-[#dee1da] inline-block rounded-sm mb-4">
              Welcome to Fresh Harvest
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#212337] mb-4">
              Fresh Fruits and <br /> Vegetables
            </h1>
            <p className="text-base md:text-lg max-w-xl text-[#4A4A52] mb-6">
              At Fresh Harvests, we are passionate about providing you with the
              freshest and most flavorful fruits and vegetables.
            </p>
            <button className="bg-[#FF6A1A] text-white text-base font-semibold py-2 px-6 rounded-sm">
              Shop Now
            </button>

            {/* Offer Box */}
            <div className="bg-[#EBEBEB] w-full sm:w-3/4 lg:w-2/3 py-4 px-6 rounded-xl mt-8 mx-auto md:ml-0 lg:ml-auto">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-5 text-center sm:text-left">
                <div>
                  <p className="text-[#176D38] text-base font-semibold">
                    Special Offer
                  </p>
                  <h3 className="text-[#212337] text-xl font-bold">
                    Fresh Salad
                  </h3>
                  <div className="flex items-center justify-center sm:justify-start">
                    <span className="text-[#176D38] text-base">Up to</span>
                    <h4 className="text-xl font-bold mx-1">70%</h4>
                    <small className="text-base">off</small>
                  </div>
                  <button className="bg-[#176D38] px-4 py-1 mt-2 rounded-full text-white text-sm">
                    Code:{" "}
                    <span className="text-[#FAC714] font-semibold">
                      FRESH25
                    </span>
                  </button>
                </div>
                <Image
                  src="/assets/saladPlate.png"
                  alt="Salad Plate"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end">
            <Image
              src="/assets/girl.jpg"
              alt="Banner Girl"
              width={450}
              height={450}
              className="w-full max-w-[450px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
