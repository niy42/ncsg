"use client";

import Image from "next/image";
import Nav from "./Nav";
import { useState, useEffect } from "react";


const Header: React.FC = () => {
    const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
    const [ismobileNav, setIsmobileNav] = useState<boolean>(false);
    const [bg, setBg] = useState<boolean>(false);
    const classname: string = "pointer-events-none outline-none border-none";

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 991) {
                setIsmobileNav(true);
            } else {
                setIsmobileNav(false);
            }
        };

        const handleBg = function () {
            if (window.scrollY >= 40) {
                setBg(true)
            } else {
                setBg(false);
            }
        }

        const handleScroll = () => {
            console.log("scrollY: ", window.scrollY);
            if (window.scrollY >= 163) {
                setIsNavVisible(false); // Hide the navbar when scrolled 163px or more
            } else {
                setIsNavVisible(true); // Show the navbar when scrolled less than 163px
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleBg);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleBg);
        };
    }, []);

    return (
        <header className="relative flex">
            {ismobileNav ? (
                <nav className="w-full p-4 justify-between items-center">
                    <div>
                        <Image
                            src="/ncsg.png"
                            alt="logo"
                            width={130}
                            height={130}
                            className="cursor-pointer"
                        />
                    </div>
                </nav>
            ) : (
                <nav
                    className={`fixed flex w-full py-[0.4rem] pt-[0rem] justify-between items-center px-[4.5rem] md:px-[3.5rem] lg:px-[5.5rem] md:text-[0.85rem] lg:text-[0.95rem] z-50 transition-all duration-300 ${isNavVisible ? "opacity-100" : "opacity-0"
                        }`}
                    style={{ display: isNavVisible ? "flex" : "none" }}
                >
                    <div className="flex flex-1 items-center justify-start">
                        <Image
                            src="/ncsg.png"
                            alt="logo"
                            height={190}
                            width={190}
                            className="cursor-pointer"
                        />
                    </div>
                    <div className="flex flex-1 items-center justify-center lg:justify-start lg:left-12 xl:left-56">
                        <Nav fixedBg={isNavVisible} bgColor={bg} />
                    </div>
                    <div className="flex flex-1 items-center justify-end cursor-pointer">
                        <div
                            className="w-fit items-center justify-end cursor-pointer bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white font-light py-2 px-4 border border-pink-800 rounded-lg shadow-md transition-all duration-200"
                            onClick={() => console.log("Button clicked")}
                        >
                            <span className={`hover:text-gray-300 transition-colors duration-300 bg-transparent ${classname}`}>Take Action</span>
                        </div>

                    </div>

                </nav>)
            }
        </header>
    );
};

export default Header;
