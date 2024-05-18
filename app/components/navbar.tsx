"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiLogoBlogger } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { AiOutlineClose, AiOutlineHome, AiOutlineMenu } from "react-icons/ai";

const navigationLinks = [
  { path: "/", text: "HOME", icon: <AiOutlineHome size={22} /> },
  { path: "/about", text: "ABOUT US", icon: <FaUsers size={22} /> },
  { path: "/order", text: "ORDER", icon: <BiLogoBlogger size={22} /> },
];

export const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const navBackground = isScrolled ? "bg-white" : "bg-transparent";

  const handleNav = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check for mobile view on mount
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`w-full pt-2 ${navBackground} ${
        isScrolled ? "rounded-b-2xl shadow" : ""
      } fixed top-0 z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="flex h-full w-full items-center px-4">
        {isMobileView ? (
          <Link href="/">
            <img
              src="logo.png"
              height={55}
              width={55}
              alt="logo"
              className="cursor-pointer"
            />
          </Link>
        ) : (
          <Link href="/">
            <img
              src="/logo.png"
              height={90}
              width={90}
              alt="logo"
              className="cursor-pointer"
            />
          </Link>
        )}
        {/* Navigation for lg to xl view */}
        <div className="hidden lg:flex lg:items-center lg:justify-center">
          <ul className="lg:flex">
            {navigationLinks.map((link) => (
              <li key={link.path} className="text-md my-6 ml-10">
                <Link
                  href={link.path}
                  className={`font-semibold text-[#f19d00] ${
                    router.pathname === link.path 
                      ? "border-b-4 border-[#0053F1] py-2"
                      : ""
                  }`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger menu */}
        <div className="lg:hidden">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Dropdown menu for sm to md view */}
      <div
        className={`fixed  top-0 h-screen w-full transform bg-white ${
          menuOpen
            ? "translate-y-0 transition-transform ease-in"
            : "-translate-y-full"
        } px-4 py-2 duration-500 lg:hidden`}
      >
        {/* Close button for sm to md view */}
        <div className="mb-4 flex items-center justify-between">
          <img
            src="/logo.png"
            height={55}
            width={55}
            alt="logo"
            className="cursor-pointer"
          />
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>

        {/* Navigation links for sm to md view */}
        <div className="flex-col px-4 py-4">
          <ul>
            {navigationLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <div
                  className="flex items-center justify-between"
                  onClick={closeMenu}
                >
                  <li className="flex cursor-pointer items-center text-base font-medium text-[#07549C]">
                    <span className="ml-6">{link.icon}</span>
                    <span className="ml-6"> {link.text}</span>
                  </li>
                  <HiArrowNarrowRight
                    size={34}
                    className="mr-6 rounded-full bg-gray-100 px-2 py-1 text-[#07549C] transition-transform hover:scale-110"
                  />
                </div>
                <hr className="mx-3 my-5 border-t border-dashed border-gray-500"></hr>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
