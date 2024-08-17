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
    classname: string
}

const data: Data[] = [
    { imgUrl: fola, date: "Apr 08, 2024", title: "Your Child’s After-School Haven: Expert Supervision, Engaging Activities, and Delicious Meals", classname: `${dancingScript.className} text-sm` },
    { imgUrl: folas, date: "Feb 12, 2024", title: "Leading the Way in Dementia Care: NCSG’s Vision for Compassionate and Innovative Support", classname: `${dancingScript.className} text-sm` },
];

const Blog = () => {
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const url = "https://youtu.be/0c2rpE4I27Y";

    useEffect(() => {
        // Setting video URL directly as it is a static value
        setVideoUrl(url);
    }, []);

    return (
        <>
            <AosInitializer />
            <section className="relative rounded-2xl bg-gray-800 mx-auto h-full mb-4 mt-12 px-4 sm:px-6 lg:px-8 max-w-7xl lg:w-full" data-aos="fade-up">
                <div className="flex justify-center items-center gap-4 p-8">
                    <h2 className="text-xl font-semibold text-white">Our Activities</h2>
                    <FiActivity className="text-2xl" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center justify-center">
                    <div className="relative flex flex-col space-y-4">
                        <div className="flex flex-col mb-8">
                            <h3 className="font-extralight" data-aos="fade-up">
                                <span className={`${dancingScript.className} text-5xl`}>P</span>utting a broad smile on each person's face is the fundamental goal of our work. The following are our focal areas, including but not limited to:
                            </h3>
                            <ul className="list-disc list-inside ml-4 mt-4 text__color">
                                <li>Community support</li>
                                <li>Child minding</li>
                                <li>Social care</li>
                                <li>Training</li>
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 h-[520px] gap-4 mb-5">
                            {data.map(({ title, imgUrl, date, classname }, index) => (
                                <Article key={index} imgUrl={imgUrl} date={date} title={title} classname={`${classname} min-w-full`} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blog;
