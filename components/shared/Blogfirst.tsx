"use client";
import dynamic from 'next/dynamic';
import 'aos/dist/aos.css';
import AosInitializer from "@/app/aos";
import Article from "../utils/Article";
import { Dancing_Script } from "next/font/google";
import folas from '@/public/assets/folas.jpg';
import fola from '@/public/assets/fola.jpg';
import { FiActivity } from "react-icons/fi";
import { useEffect, useState } from 'react';

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
    { imgUrl: folas, date: "Feb 12, 2024", title: "Leading the Way in Dementia Care: NCSG’s Vision for Compassionate and Innovative Support", classname: `${dancingScript.className} text-sm`, href: "/healthcare" },
];

const Blogfirst = () => {
    const [videoUrl, setVideoUrl] = useState<string>("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showSwipeHint, setShowSwipeHint] = useState(true); // Flag for swipe hint
    const [startTouchX, setStartTouchX] = useState(0); // Start position of touch
    const [endTouchX, setEndTouchX] = useState(0); // End position of touch
    const url = "https://youtu.be/0c2rpE4I27Y";

    useEffect(() => {
        const timer = setTimeout(() => setShowSwipeHint(false), 5000); // Hide after 5 seconds
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setVideoUrl(url);

        // Change article every 10 seconds
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
        }, 10000); // 10000ms = 10 seconds

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    // Detect swipe direction
    const handleTouchStart = (e: React.TouchEvent) => {
        setStartTouchX(e.touches[0].clientX); // Store the starting touch position
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setEndTouchX(e.touches[0].clientX); // Track the touch move position
    };

    const handleTouchEnd = () => {
        if (startTouchX - endTouchX > 50) {
            // Swiped left, go to next article
            nextSlide();
        } else if (endTouchX - startTouchX > 50) {
            // Swiped right, go to previous article
            prevSlide();
        }
    };

    // Slide to the next article
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    // Slide to the previous article
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

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
                            {/*Large Screens*/}
                            <div className="grid max-grid-cols-1 max-md:hidden sm:grid-cols-2 h-[520px] max-lg:gap-2 gap-4 mb-5">
                                {data.map(({ title, imgUrl, date, classname, href }, index) => (
                                    <Article key={index} imgUrl={imgUrl} date={date} title={title} classname={`${classname} min-w-full`} href={href} />
                                ))}
                            </div>

                            {/*Small Screens*/}
                            <div
                                className="relative"
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                <div className="grid grid-cols-1 md:hidden sm:grid-cols-2 h-[520px] gap-4 mb-5">
                                    <Article
                                        key={data[currentIndex].title}
                                        imgUrl={data[currentIndex].imgUrl}
                                        date={data[currentIndex].date}
                                        title={data[currentIndex].title}
                                        classname={`${data[currentIndex].classname} min-w-full`}
                                        href={data[currentIndex].href}
                                    />
                                </div>
                                {/* Left & Right Navigation Buttons */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                                >
                                    &#8249;
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                                >
                                    &#8250;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blogfirst;
