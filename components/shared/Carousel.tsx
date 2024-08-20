'use client'

import React, { useState, useEffect } from 'react';
import type { imagesProps } from '@/app/(root)/layout';
import { Oswald } from 'next/font/google';
import { SlArrowLeft, SlArrowLeftCircle, SlArrowRight, SlArrowRightCircle } from 'react-icons/sl';
import Image from 'next/image';

const oswald = Oswald({
    subsets: ["latin"],
    weight: "400",
})
const Carousel = ({ images }: imagesProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const slideLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const slideRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(slideRight, 3000); // Automatically slide to the right every 3 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [images.length]);


    return (
        <div className="overflow-hidden relative flex w-full mx-auto max-w-[800px] h-[400px] mb-20 bg-opacity-100">
            <div className="relative w-full h-full">

                {images.map(({ image, title }: { image?: string, title?: any }, index) => {
                    return (
                        <div
                            key={index}
                            className={`${index === currentIndex ? 'carousel_card carousel_card-active' : 'carousel_card'} border border-zinc-800 bg-slate-700 min-w-full min-h-full relative`}
                        >
                            <p className={`flex px-4 sm:px-6 absolute inset-0 text-center font-extralight text-4xl items-center justify-center break-words whitespace-pre-wrap leading-relaxed ${oswald.className}`}>{image}</p>

                            <div className="bottom-[-2] sm:left-2 sm:bottom-0 flex absolute w-full h-full bg-black bg-opacity-10 items-end p-10 px-8 text-xl font-bold">
                                { /*<h2 className='text-[30px] text-gray-300 font-bold'>{title}</h2>*/}
                                <Image src={title} alt="image" className='bottom-[-2] w-12 h-12 md:w-20 md:h-20 bg-gray-600 rounded-full' />
                            </div>
                        </div>
                    )
                })}

                <div
                    className="absolute active:bg-gray-600 top-1/2 hover:bg-gray-500 left-4 transform text-gray-400 opacity-90 font-light -translate-y-1/2 text-3xl bg-gray-600 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer"
                    onClick={slideLeft}
                >
                    <SlArrowLeftCircle />
                </div>
                <div
                    className="absolute active:bg-gray-600 hover:bg-gray-500 font-light text-gray-400 opacity-90 top-1/2 right-4 transform -translate-y-1/2 text-3xl bg-gray-600 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer"
                    onClick={slideRight}
                >
                    <SlArrowRightCircle />
                </div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 rounded-full mx-1 cursor-pointer transition-transform ease-linear duration-300 ${index === currentIndex ? 'bg-blue-800' : 'bg-gray-200 hover:bg-gray-500 '}`}
                            onClick={() => setCurrentIndex(index)}
                        />

                    ))}
                </div>
            </div>
        </div >


    );
};

export default Carousel;
{/*<div
        className="flex flex-1 absolute w-full h-full rounded-[20px] shadow-lg opacity-100 pointer-events-none scale-95"
    >
    </div>*/}