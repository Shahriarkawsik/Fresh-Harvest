
"use client";

import ProductDetails from "@/components/blogComponents/ProductDetails";
import RelatedProducts from "@/components/blogComponents/RelatedProducts";
import ReviewComponent from "@/components/blogComponents/ReviewComponent";



export default function Blog() {
  return (
    <section className="w-[92%] md:w-[92%] container mx-auto space-y-6 sm:space-y-10">
      <div className="w-full h-[15vh]">
        <div className="relative z-10 flex flex-col justify-center items-center h-full w-full text-center"></div>
        {/* section Description */}
        <ProductDetails />
        {/* Review */}
        <ReviewComponent />
        {/* Related Product */}
        <RelatedProducts />
      </div>
    </section>
  );
}
