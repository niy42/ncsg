"use client"; // This is a client-side component

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AosInitializer() {
    useEffect(() => {
        Aos.init({
            duration: 3000,
            once: false,
            easing: 'ease'
        });
    }, []);

    return null; // This component doesn't render anything visible
}
