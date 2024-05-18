import Link from "next/link";
import React from "react";
import { AiOutlinePhone, AiOutlineMail, AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer className="w-full bg-yellow-800 px-5 py-8 sm:px-14 md:py-10">
      <div className=" mx-auto max-w-[1750px] border-b-2 border-white py-4 sm:py-6">
        <div className="flex flex-col items-center md:flex-row lg:justify-between">
          <div className="text-center md:w-1/3 md:text-left">
            <div className="text-center text-2xl text-gray-100 lg:text-3xl">
              Ikiguys
            </div>
            <div className="mt-2 text-center text-sm text-gray-300 lg:text-base">
              Lopez Jaena Street, Jaro, Iloilo City, Iloilo
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center md:w-1/3">
            <div className="mt-7 text-base text-gray-100 md:mt-1 lg:text-lg">
              CONTACT
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-300 hover:underline lg:text-base">
              <AiOutlinePhone className="mr-1" />
              <div>+639123456789</div>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-300 hover:underline lg:text-base">
              <AiOutlineMail className="mr-1" />
              <div>ikiguys@gmail.com</div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center md:w-1/3">
            <div className="mb-3 mt-8 text-base text-gray-100 md:mt-1 lg:text-lg">
              Follow Us
            </div>

            <div className="flex justify-center">
              <Link
                href="https://www.facebook.com/"
                className="mx-3 rounded-full bg-white px-1 py-1 hover:bg-gray-400"
              >
                <BiLogoFacebook size={22} />
              </Link>
              <Link
                href="https://www.instagram.com/"
                className="mx-3 rounded-full bg-white px-1 py-1 hover:bg-gray-400"
              >
                <AiFillInstagram size={22} />
              </Link>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
