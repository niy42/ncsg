"use client";

import Image from "next/image";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Link from "next/link";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";

interface SubNavLink {
    title: string;
    url: string;
}

interface MobNav {
    title: string;
    url: string;
    subNavLinks: SubNavLink[];
}

const mobileNav: MobNav[] = [
    { title: "About", url: "", subNavLinks: [{ title: "Volunteer", url: "" }, { title: "Meet the Team", url: "" }, { title: "Our Story", url: "" }] },
    { title: "Services", url: "", subNavLinks: [{ title: "Health & Wellness", url: "" }, { title: "Outreach", url: "" }, { title: "Upskilling and Courses", url: "" }] },
    { title: "Offerings", url: "", subNavLinks: [{ title: "News", url: "" }, { title: "Support Groups", url: "" }, { title: "Support NCSG", url: "" }] },
];

const Header: React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false); // Default to hidden
    const [bg, setBg] = useState<boolean>(false);
    const [showBorder, setShowBorder] = useState<boolean>(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Handle toggle menu
    const handleToggleMenu = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Handle scroll event to change background color of navbar
    const handleScroll = () => {
        setBg(window.scrollY >= 40);
        setShowBorder(window.scrollY >= 40);
    };

    // Use effect to set up and clean up scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-colors duration-300 ${bg ? 'bg-gray-800' : 'bg-transparent'}`}
        >
            <nav className="flex items-center justify-between lg:justify-around p-4 md:p-6 lg:p-8">
                {/* Logo */}
                <div>
                    <Image
                        src="/ncsg.png"
                        alt="logo"
                        width={130}
                        height={130}
                        className="cursor-pointer"
                    />
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden relative">
                    <div className="relative -top-2 right-4">
                        {toggleMenu ? (
                            <RiCloseLine
                                fontSize={24}
                                onClick={() => setToggleMenu(false)}
                                className="cursor-pointer"
                            />
                        ) : (
                            <RiMenu3Line
                                fontSize={24}
                                onClick={() => setToggleMenu(true)}
                                className="cursor-pointer"
                            />
                        )}
                    </div>
                    <div className={`flex flex-col items-end justify-start h-fit mobile-nav ${toggleMenu ? "active" : ""} ${bg ? "" : ""}`}>
                        <div className="py-3 px-5 hover:bg-gray-700 w-full rounded-xl">
                            <Link legacyBehavior href={'#'}>
                                <a className="block text-xs font-light hover:text-gray-400">Home</a>
                            </Link>
                        </div>
                        {mobileNav.map(({ title, url, subNavLinks }, index) => (
                            <div key={title + index} className="py-3 px-5 hover:bg-gray-700 w-full rounded-xl">
                                <a
                                    onClick={() => handleToggleMenu(index)}
                                    className="flex w-full justify-between items-center text-white hover:text-gray-300 transition-colors duration-300 whitespace-nowrap cursor-pointer"
                                >
                                    <span className="block text-xs font-light hover:text-gray-400">{title}</span>
                                    <span>
                                        {openIndex === index ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                                    </span>
                                </a>
                                {openIndex === index && (
                                    <div className="pl-4 mt-2 transition-all transform translate-y-2 duration-300 ease-out">
                                        {subNavLinks.map(({ title, url }, subIndex) => (
                                            <Link legacyBehavior key={title + subIndex} href={url || '#'}>
                                                <a className="block text-xs text-gray-300 hover:text-gray-100 py-1 whitespace-nowrap">{title}</a>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="py-3 px-5 sm:py-2 sm:px-4 w-full items-center justify-end cursor-pointer bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-light border border-gray-800 rounded-lg shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg hover:animate-pulse">
                            <Link legacyBehavior href={'#'}>
                                <a className="block text-xs sm:text-sm md:text-base lg:text-lg font-light hover:text-gray-400" aria-label="Donate button">
                                    <span className="hover:text-gray-300 transition-colors duration-300 bg-transparent">Donate</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Desktop Menu */}
                <div className={`items-center hidden md:flex justify-between space-x-4 ${bg ? 'text-white' : 'text-black'}`}>
                    <Nav fixedBg={bg} />
                </div>

                <div
                    className="max-md:hidden hover:scale-105 hover:shadow-lg hover:animate-pulse flex w-fit items-center justify-end cursor-pointer bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white font-light py-2 px-4 border border-pink-800 rounded-lg shadow-md transition-all duration-200"
                    onClick={() => console.log("Button clicked")}
                >
                    <span className="hover:text-gray-300 transition-colors duration-300 bg-transparent">Donate</span>
                </div>
            </nav>
        </header >
    );
};

export default Header;
