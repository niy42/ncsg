"use client";

import Image from "next/image";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Link from "next/link";

interface MobNav {
    title: string;
    url: string;
}

const mobileNav: MobNav[] = [
    { title: "test1", url: "" },
    { title: "test2", url: "" },
    { title: "test3", url: "" },
    { title: "test4", url: "" },
];

const Header: React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false); // Default to hidden
    const [bg, setBg] = useState<boolean>(false);
    const [showBorder, setShowBorder] = useState<boolean>(false);

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
                    {toggleMenu ? (
                        <RiCloseLine
                            fontSize={26}
                            onClick={() => setToggleMenu(false)}
                            className="text-white cursor-pointer"
                        />
                    ) : (
                        <RiMenu3Line
                            fontSize={26}
                            onClick={() => setToggleMenu(true)}
                            className="text-white cursor-pointer"
                        />
                    )}
                    <div className={`flex flex-col items-end justify-start h-fit mobile-nav ${toggleMenu ? "active" : ""} ${showBorder ? "show-border" : ""}`}>
                        {mobileNav.map(({ title, url }, index) => (
                            <div key={index} className="py-2 px-4">
                                <Link legacyBehavior href={url}>
                                    <a className="block">{title}</a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className={`items-center hidden md:flex justify-between space-x-4 ${bg ? 'text-white' : 'text-black'}`}>
                    <Nav fixedBg={bg} />
                </div>
                <div
                    className="max-md:hidden flex w-fit items-center justify-end cursor-pointer bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white font-light py-2 px-4 border border-pink-800 rounded-lg shadow-md transition-all duration-200"
                    onClick={() => console.log("Button clicked")}
                >
                    <span className="hover:text-gray-300 transition-colors duration-300 bg-transparent">Take Action</span>
                </div>
            </nav>
        </header>
    );
};

export default Header;
