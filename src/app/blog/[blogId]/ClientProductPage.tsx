"use client";

import ReviewComponent from "@/components/blogComponents/ReviewComponent";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { Rating } from "react-simple-star-rating";

type Product = {
  id: string;
  images: string[];
  image: string;
  productName: string;
  price: number;
  description: string;
};
type Products = {
  id: string;
  images: string[];
  image: string;
  productName: string;
  price: number;
  description: string;
};
type ClientProductPageProps = {
  blogId: string;
};

type ApiResponse = {
  success: boolean;
  data: Product;
};
type ApiResponses = {
  success: boolean;
  data: Product[];
};

export default function ClientProductPage({ blogId }: ClientProductPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Products[]>([]);
  const relatedProducts =
    products.filter((product) => product.id !== blogId) || [];

  /* Fetch all Product */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://code-commando.com/api/v1/products"
        );
        const result: ApiResponses = await response.json();
        setProducts(result.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const { productName, price, images = [], description } = product || {};
  const rating: number = 5;
  const [image] = images;

  
  const [quantity, setQuantity] = useState<number>(1);
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  /* Fetch Single Product */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://code-commando.com/api/v1/products/${blogId}`
        );
        const result: ApiResponse = await response.json();
        setProduct(result.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [blogId]);
  if (!product)
    return <div className="flex justify-center items-center">Loading...</div>;
  return (
    <section className="w-[92%] md:w-[92%] container mx-auto space-y-6 sm:space-y-10">
      <section className="w-full h-[15vh] space-y-6 sm:space-y-10">
        <div className="relative z-10 flex flex-col justify-center items-center h-full w-full text-center"></div>
        <section className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-20">
          <figure className="w-ful max-lg:mx-auto">
            <Image
              src={`${image}`}
              width={500}
              height={500}
              alt="Picture of coconut"
              // className="w-full h-full rounded-3xl"
              className="border max-sm:w-[340px] max-sm:h-[340px] max-lg:w-[700px] max-lg:h-[700px] max-2xl:w-[600px] max-2xl:h-[600px] 2xl:w-[650px] 2xl:h-[650px] py-5 rounded-2xl bg-fixed"
            />
          </figure>
          <div className="space-y-10 font-rubik flex flex-col justify-between py-5">
            <div className="max-sm:space-y-6 max-lg:space-y-8 max-2xl:space-y-10 2xl:space-y-10">
              <button className="text-[14px] text-[#749B3F] sm:text-xl bg-[#749B3F1A] rounded-lg lg:rounded-lg font-semibold text-greenText px-3 py-1 ">
                Fruits
              </button>
              <h2 className="text-[#212337] text-3xl sm:text-5xl font-medium ">
                {productName}
              </h2>

              <div className="flex items-center gap-5">
                <Rating initialValue={rating} size={20} />
                <p className="font-medium text-[18px]">
                  {rating.toFixed(1)}{" "}
                  <span className="text-[12px]">(1 review)</span>{" "}
                </p>
              </div>

              <h4 className="text-[#FF6A1A] font-semibold text-2xl sm:text-3xl">
                ${price}/kg
              </h4>
              <p className="text-[#4A4A52] text-[18px] text-justify">
                {description}
                {/* From our farm directly to your door, our fresh coconuts are
            harvested at the peak of ripeness, offering you a sweet, hydrating
            treat full of flavor. Packed with natural nutrients, coconut is
            perfect for a variety of culinary uses, from smoothies to savory
            dishes, or even for a refreshing drink straight from the shell. */}
              </p>
            </div>
            <div className="max-sm:space-y-6 max-lg:space-y-8 max-2xl:space-y-10 2xl:space-y-10">
              {/* Quantity */}
              <div className="flex gap-10 items-center">
                <span className="text-xl font-medium text-[#212337]">
                  Quantity
                </span>
                <div>
                  <button
                    className="px-5 py-1 rounded-l-md border border-[#D9D9D9] text-2xl font-bold"
                    onClick={handleDecrease}
                  >
                    -
                  </button>
                  <button className="px-5 py-1 border border-[#D9D9D9] border-x-0 text-2xl font-bold text-[#343434]">
                    {quantity}
                  </button>
                  <button
                    className="px-5 py-1 rounded-r-md border border-[#D9D9D9] text-2xl font-bold"
                    onClick={handleIncrease}
                  >
                    +
                  </button>
                  <span className="ml-5">/kg</span>
                </div>
              </div>
              {/* Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <button className="flex items-center justify-center gap-5 px-8 py-4 rounded-lg bg-[#F4F6F6]">
                  <FaHeart />
                  <span className="text-[#4A4A52] font-semibold text-xl">
                    Save as favorite
                  </span>
                </button>
                <button className="flex items-center justify-center gap-5 px-8 py-4 rounded-lg bg-[#FF6A1A] text-white">
                  <MdShoppingCart />
                  <span className="font-semibold text-xl font-rubik">
                    Add to cart
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <ReviewComponent />
        {/* Related Product */}
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
              We pride ourselves on offering a wide variety of fresh and
              flavorful fruits, vegetables, and salad ingredients.
            </p>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card one */}
            {relatedProducts.map((product) => (
              <Link key={product?.id} href={`/blog/${product?.id}`}>
                <div className="p-4 rounded-2xl shadow-xl space-y-4 hover:scale-105 hover:transition-all">
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
              </Link>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
}
