"use client"
import dynamic from 'next/dynamic';
import 'aos/dist/aos.css';
import AosInitializer from "@/app/aos";
import Article from "../utils/Article";
import { Dancing_Script } from "next/font/google";
import { fola, aged } from "@/public/assets/index";
import { FiActivity } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';
import { useMedia } from 'use-media';

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "600"]
});

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface Data {
    imgUrl?: any,
    date: string,
    title: string,
    classname: string,
    href: string,
}

const data: Data[] = [
    { imgUrl: fola, date: "Apr 08, 2024", title: "Your Child’s After-School Haven: Expert Supervision, Engaging Activities, and Delicious Meals", classname: `${dancingScript.className} text-sm`, href: "/deliciouscare" },
    { imgUrl: aged, date: "Feb 12, 2024", title: "Leading the Way in Dementia Care: NCSG’s Vision for Compassionate and Innovative Support", classname: `${dancingScript.className} text-sm`, href: "/healthcare" },
];

const Blog = () => {
    const [videoUrl, setVideoUrl] = useState<string>("https://youtu.be/0c2rpE4I27Y");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showSwipeHint, setShowSwipeHint] = useState(false); // Initial state for showing the hint
    const showDuration = 50000; // 50 seconds - duration to show the hint
    const hideDuration = 5000; // 5 seconds - duration to hide the hint
    const mobileView = useMedia({ maxWidth: 550 });

    useEffect(() => {
        // This interval shows the swipe hint, then hides it for a while, and repeats the cycle
        const cycleInterval = setInterval(() => {
            setShowSwipeHint(true); // Show the swipe hint

            // Hide it after 'showDuration' time
            setTimeout(() => {
                setShowSwipeHint(false); // Hide the swipe hint after the specified duration
            }, showDuration);

        }, showDuration + hideDuration); // Cycle interval (time for showing + hiding)

        return () => clearInterval(cycleInterval); // Clean up the interval when the component is unmounted
    }, []); // Empty dependency array to ensure this effect runs only once on mount/*

    const handleSwipe = (direction: 'left' | 'right') => {
        setCurrentIndex((prevIndex) =>
            direction === 'left'
                ? (prevIndex === 0 ? data.length - 1 : prevIndex - 1)
                : (prevIndex + 1) % data.length
        );
    };

    // Use react-swipeable for handling swipe gestures
    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('right'),  // Swipe left to show next
        onSwipedRight: () => handleSwipe('left'), // Swipe right to show previous
        trackMouse: true, // Track mouse for swipe on desktop
    });

    return (
        <>
            <AosInitializer />
            <section className="overflow-hidden relative rounded-2xl bg-gray-800 mx-auto h-full mt-12 p-4 sm:p-6 lg:p-8 max-w-7xl lg:w-full" data-aos="fade-up">
                <div className='border rounded-2xl border-gray-600 border-dashed p-8 '>
                    <div className="flex justify-center items-center gap-4 p-8">
                        <h2 className="text-xl font-semibold text-white">Our Activities</h2>
                        <FiActivity className="text-2xl" />
                    </div>

                    <div className="rounded-2xl grid grid-cols-1 xl:grid-cols-2 gap-8 w-full items-center justify-center">
                        <div className="relative flex flex-col space-y-4">
                            <div className="flex flex-col mb-8">
                                <h3 className="font-extralight" data-aos="fade-up">
                                    <span className={`${dancingScript.className} text-5xl`}>P</span>utting a broad smile on each person's face is the fundamental goal of our work. The following are our focal areas, including but not limited to:
                                </h3>
                                <ul className="relative list-disc space-y-2 flex flex-col list-inside ml-4 mt-5 text-gray-300 text-xs font-light">
                                    <li><span className="px-1 bg-gray-600 font-semibold rounded-lg text-base text-gray-300">Community Support</span> - Connect with others who understand your journey.</li>
                                    <li><span className="px-1 bg-gray-600 font-semibold rounded-lg text-base text-gray-300">Child Minding</span> - Professional care for your little ones while you focus on your role.</li>
                                    <li><span className="px-1 bg-gray-600 font-semibold rounded-lg text-base text-gray-300">Social Care Services</span> - Access to specialized care and assistance.</li>
                                    <li><span className="px-1 bg-gray-600 font-semibold rounded-lg text-base text-gray-300">Training & Workshops</span> - Enhance your skills with our expert-led training sessions.</li>
                                </ul>
                            </div>
                            <div data-aos="fade-left" className="mt-auto bottom-4 lg:col-span-1 h-[360px] md:h-[320px] border cursor-pointer relative border-gray-500 dark:border-zinc-600/100 rounded-xl p-2 group overflow-hidden">
                                <div className="absolute cursor-pointer inset-0 group-hover:bg-gray-800 group-hover:opacity-40 transition-all duration-1000 ease-in z-10 pointer-events-none"></div>
                                <div className="w-full h-full cursor-pointer">
                                    <ReactPlayer height="100%" width="100%" controls url={videoUrl ?? ""} className="relative group-hover:opacity-90 transition-opacity duration-1000 ease-in cursor-pointer" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-full" data-aos='fade-right'>
                            {showSwipeHint && mobileView && (
                                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-transparent text-white py-2 px-4 rounded-lg shadow-lg z-10 flex flex-col items-center">
                                    {/*<p className="text-center mb-2">Swipe left or right to navigate</p>*/}

                                    {/* SVG Swipe Hint Animation */}
                                    <div className="animate-pulse mt-20">
                                        <img src="/assets/transhand.gif" alt="swipelogo" />
                                    </div>
                                </div>
                            )}

                            {/*Large Screens*/}
                            <div className="grid max-md:hidden sm:grid-cols-2 h-[520px] gap-4 mb-5">
                                {data.map(({ title, imgUrl, date, classname, href }, index) => (
                                    <Article
                                        key={index}
                                        imgUrl={imgUrl}
                                        date={date}
                                        title={title}
                                        classname={`${classname} min-w-full`}
                                        href={href}
                                    />
                                ))}
                            </div>

                            {/*Small Screens (Swipeable Articles)*/}
                            <div
                                {...handlers}  // Attach swipe handlers here
                                className="grid grid-cols-1 md:hidden sm:grid-cols-2 h-[520px] gap-4 mb-5"
                            >
                                <Article
                                    key={data[currentIndex].title}
                                    imgUrl={data[currentIndex].imgUrl}
                                    date={data[currentIndex].date}
                                    title={data[currentIndex].title}
                                    classname={`${data[currentIndex].classname} min-w-full`}
                                    href={data[currentIndex].href}
                                />

                                {/*Swipe Navigation Arrows*/}
                                <div className="flex justify-between items-center mt-4">
                                    <button
                                        onClick={() => handleSwipe('left')}
                                        className="p-4 text-white bg-gray-700 hover:bg-gray-800 rounded-full"
                                    >
                                        <FaChevronLeft size={24} />
                                    </button>

                                    <button
                                        onClick={() => handleSwipe('right')}
                                        className="p-4 text-white bg-gray-700 hover:bg-gray-800 rounded-full"
                                    >
                                        <FaChevronRight size={24} />
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blog;
