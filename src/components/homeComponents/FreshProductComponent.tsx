"use client";
import Image from "next/image";
import Link from "next/link";
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
export default function FreshProductComponent() {
  const [toggle, setToggle] = useState<string>("All");
  const [products, setProducts] = useState<Product[]>([]);
  console.log(products[0]);

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
    <section className="space-y-10 lg:space-y-10">
      {/* Header */}
      <div className="text-center space-y-4 lg:space-y-5">
        <button className="text-[14px] text-[#749B3F] sm:text-xl bg-[#749B3F1A] rounded-lg lg:rounded-lg font-semibold text-greenText px-3 py-1 ">
          Our Products
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
      {/* Products */}
      {products.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product?.id}
              className="p-4 rounded-2xl shadow-xl space-y-4"
            >
              <Link href={``}></Link>
              <figure className="bg-[#F4F6F6] rounded-2xl flex items-center justify-center">
                <Image
                  // src="/assets/kiwi.png"
                  src={`${product.images[0]}`}
                  width={200}
                  height={200}
                  // className="max-sm:max-w-[140px] max-sm:max-h-[140px] max-lg:max-w-[200px] max-lg:max-h-[200px] max-2xl:max-w-[200px] max-2xl:max-h-[200px] w-[200px] h-[200px] py-5"
                  className="max-sm:w-[140px] max-sm:h-[140px] max-lg:w-[200px] max-lg:h-[200px] max-2xl:w-[200px] max-2xl:h-[200px] w-[200px] h-[200px] py-5"
                  alt="A fruit image"
                />
              </figure>
              <div className="text-center space-y-2">
                <h4 className="font-medium text-[#212337] text-xl">
                  {product.productName as string}
                </h4>
                <p className="text-[#4A4A52] ">${`${product.price}`}/kg</p>
                <button
                  onClick={() => console.log(product?.id)}

                  className="text-[#212337] font-medium border border-[#D9D9D9] w-full rounded-md py-1 text-xl hover:bg-[#FF6A1A] hover:text-white hover:transition-all"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        "Loading........."
      )}
      {/* <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product?.id}
            className="p-4 rounded-2xl shadow-xl space-y-4"
          >
            <figure className="bg-[#F4F6F6] rounded-2xl flex items-center justify-center">
              <Image
                // src="/assets/kiwi.png"
                src={`${product.images[0]}`}
                width={200}
                height={200}
                // className="max-sm:max-w-[140px] max-sm:max-h-[140px] max-lg:max-w-[200px] max-lg:max-h-[200px] max-2xl:max-w-[200px] max-2xl:max-h-[200px] w-[200px] h-[200px] py-5"
                className="max-sm:w-[140px] max-sm:h-[140px] max-lg:w-[200px] max-lg:h-[200px] max-2xl:w-[200px] max-2xl:h-[200px] w-[200px] h-[200px] py-5"
                alt="A fruit image"
              />
            </figure>
            <div className="text-center space-y-2">
              <h4 className="font-medium text-[#212337] text-xl">
                {product.productName as string}
              </h4>
              <p className="text-[#4A4A52] ">${`${product.price}`}/kg</p>
              <button className="text-[#212337] font-medium border border-[#D9D9D9] w-full rounded-md py-1 text-xl hover:bg-[#FF6A1A] hover:text-white hover:transition-all">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div> */}
      {/* All Product Button */}
      <div className="flex items-center justify-center">
        <button className=" border border-[#FF6A1A]  text-[#FF6A1A] max-sm:text-[14px] text-xl px-6 py-3 lg:px-8 lg:py-4 rounded-lg">
          See All Products
        </button>
      </div>
    </section>
  );
}
