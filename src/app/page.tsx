"use client";
import AboutUs from "@/components/homeComponents/AboutComponent";
import Banner from "@/components/homeComponents/Banner";
import FreshProductComponent from "@/components/homeComponents/FreshProductComponent";
import HarvestBlog from "@/components/homeComponents/HarvestBlogComponents";
import SpecialOffer from "@/components/homeComponents/SpecialOfferComponent";
import Testimonial from "@/components/homeComponents/TestimonialComponent";

export default function Home() {
  return (
    <section className="w-[92%] md:w-[92%] container mx-auto space-y-6 sm:space-y-10 lg:space-y-16">
      <Banner />
      <FreshProductComponent />
      <AboutUs />
      <SpecialOffer />
      <Testimonial />
      <HarvestBlog />
    </section>
  );
}
