import Link from "next/link";

// import Image from 'next/image'
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 px-4 md:px-10 mt-28">
      <div className="flex flex-col md:flex-row justify-between max-w-[1213px] mx-auto">
        {/* Logo and App Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold text-green-700 mb-4">
            Fresh Harvests
          </h3>
          <div className="flex space-x-4"></div>
        </div>

        {/* Quick Links 1 */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Quick Links 1</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-600 hover:text-green-700">
                Home
              </Link>
            </li>
            <li>
              <a href="/shop" className="text-gray-600 hover:text-green-700">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-600 hover:text-green-700">
                About us
              </a>
            </li>
            <li>
              <a href="/blog" className="text-gray-600 hover:text-green-700">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Quick Links 2</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/favorites"
                className="text-gray-600 hover:text-green-700"
              >
                Favorites
              </a>
            </li>
            <li>
              <a href="/cart" className="text-gray-600 hover:text-green-700">
                Cart
              </a>
            </li>
            <li>
              <a href="/sign-in" className="text-gray-600 hover:text-green-700">
                Sign in
              </a>
            </li>
            <li>
              <a
                href="/register"
                className="text-gray-600 hover:text-green-700"
              >
                Register
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Contact us</h4>
          <ul className="space-y-2">
            <li className="text-gray-600">Phone: +123 5678 90</li>
            <li className="text-gray-600">Email: freshharvests@gmail.com</li>
            <li className="text-gray-600">
              Address: Jl. Trijung Sari, Pontianak, Indonesia
            </li>
          </ul>
          <div className="flex space-x-2 mt-2">
            {/* <Image width={50} height={50} src="visa.png" alt="Visa" className="h-6" />
                        <Image width={50} height={50} src="paypal.png" alt="PayPal" className="h-6" />
                        <Image width={50} height={50} src="apple-pay.png" alt="Apple Pay" className="h-6" /> */}
          </div>
        </div>
      </div>
      <div className="flex justify-between max-w-[1213px] mx-auto">
        <div className=" text-gray-500 text-sm mt-6">
          © Copyright 2024. All Rights Reserved by Banana Studio
        </div>
        <div className="flex justify-center space-x-4 mt-2">
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Image width={50} height={50} src="twitter-icon.png" alt="Twitter" className="h-6" />
                    </a> */}
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Image width={50} height={50} src="facebook-icon.png" alt="Facebook" className="h-6" />
                    </a> */}
        </div>
      </div>
    </footer>
  );
}
