"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-gray-50">
      <Image
        src="/assets/404.jpg"
        alt="Page Not Found"
        width={400}
        height={300}
        className="max-w-[60%] mx-auto"
      />
      <h1 className="text-4xl font-bold text-[#212337] mt-6">Page Not Found</h1>
      <p className="text-gray-600 mt-2 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <button
        onClick={() => router.push("/")}
        className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go to Homepage
      </button>
    </div>
  );
}
