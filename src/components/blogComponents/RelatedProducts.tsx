"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
type Product = {
  id: string;
  images: string[];
  productName: string;
  price: number;
};
type ApiResponse = {
  success: boolean;
  data: Product[];
};
export default function RelatedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  console.log(products);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://code-commando.com/api/v1/products"
        );
        const result: ApiResponse = await response.json();
        setProducts(result.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      {/* Header */}
      <div className="text-center space-y-4 lg:space-y-5">
        <button className="text-[14px] sm:text-xl bg-[#749B3F1A] rounded-lg lg:rounded-lg text-[#749B3F] font-semibold text-greenText px-3 py-1 ">
          Our Products
        </button>
        <h2 className="text-[#212337] font-medium text-3xl sm:text-4xl lg:text-5xl">
          Related Products
        </h2>
        <p className="text-[12px] sm:text-base text-[#4A4A52]">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card one */}
        <div className="p-4 rounded-2xl shadow-xl space-y-4">
          <figure className="bg-[#F4F6F6] rounded-2xl flex items-center justify-center">
            <Image
              src="/assets/kiwi.png"
              width={200}
              height={200}
              className="max-sm:w-[140px] max-sm:h-[140px] max-lg:w-[200px] max-lg:h-[200px] max-2xl:w-[200px] max-2xl:h-[200px] py-5"
              alt="A fruit image"
            />
          </figure>
          <div className="text-center space-y-2">
            <h4 className="font-medium text-[#212337] text-xl">Kiwi</h4>
            <p className="text-[#4A4A52] ">$5.3/kg</p>
            <button className="text-[#212337] font-medium border border-[#D9D9D9] w-full rounded-md py-1 text-xl hover:bg-[#FF6A1A] hover:text-white hover:transition-all">
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
              className="max-sm:w-[140px] max-sm:h-[140px] max-lg:w-[200px] max-lg:h-[200px] max-2xl:w-[200px] max-2xl:h-[200px] py-5"
              alt="A fruit image"
            />
          </figure>
          <div className="text-center space-y-2">
            <h4 className="font-medium text-[#212337] text-xl">Kiwi</h4>
            <p className="text-[#4A4A52] ">$5.3/kg</p>
            <button className="text-[#212337] font-medium border border-[#D9D9D9] w-full rounded-md py-1 text-xl hover:bg-[#FF6A1A] hover:text-white hover:transition-all">
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
              className="max-sm:w-[140px] max-sm:h-[140px] max-lg:w-[200px] max-lg:h-[200px] max-2xl:w-[200px] max-2xl:h-[200px] py-5"
              alt="A fruit image"
            />
          </figure>
          <div className="text-center space-y-2">
            <h4 className="font-medium text-[#212337] text-xl">Kiwi</h4>
            <p className="text-[#4A4A52] ">$5.3/kg</p>
            <button className="text-[#212337] font-medium border border-[#D9D9D9] w-full rounded-md py-1 text-xl hover:bg-[#FF6A1A] hover:text-white hover:transition-all">
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
              className="max-sm:w-[140px] max-sm:h-[140px] max-lg:w-[200px] max-lg:h-[200px] max-2xl:w-[200px] max-2xl:h-[200px] py-5"
              alt="A fruit image"
            />
          </figure>
          <div className="text-center space-y-2">
            <h4 className="font-medium text-[#212337] text-xl">Kiwi</h4>
            <p className="text-[#4A4A52] ">$5.3/kg</p>
            <button className="text-[#212337] font-medium border border-[#D9D9D9] w-full rounded-md py-1 text-xl hover:bg-[#FF6A1A] hover:text-white hover:transition-all">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
