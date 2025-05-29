"use client";
import "./../globals.css";
// import { ReactStarsRating } from 'react-awesome-stars-rating';
// import { Rating } from "react-simple-star-rating";
import ReviewComponent from "@/components/blogComponents/ReviewComponent";
import RelatedProducts from "@/components/blogComponents/RelatedProducts";
import ProductDetails from "@/components/blogComponents/ProductDetails";

export default function Blog() {
  return (
    <section className="container mx-auto space-y-6 sm:space-y-10">
      {/* section Description */}
      <ProductDetails />
      {/* Review */}
      <ReviewComponent />
      <RelatedProducts />
    </section>
  );
}
