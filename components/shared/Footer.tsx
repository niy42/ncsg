import AosInitializer from '@/app/aos';
import Image from 'next/image';
import React, { FC } from 'react';

const Footer: FC = () => {
    return (
        <>
            <AosInitializer />
            <footer className="mt-10 w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white py-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                    <Image
                        src="/ncsg.png"
                        alt="logo"
                        style={{ objectFit: 'cover' }}
                        width={120}
                        height={120}
                        className="mb-4 md:mb-0"
                    />
                    <div className="text-center md:text-left">
                        <p className="text-lg font-semibold">Support and Community for Carers</p>
                        <p className="mt-2">Providing comprehensive services to help you thrive.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
