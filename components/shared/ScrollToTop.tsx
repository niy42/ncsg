"use client";

import { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 950) { // Adjust the scroll position threshold as needed
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        visible && (
            <button
                className="scroll-to-top"
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                &#8679; {/* Unicode for upward arrow */}
            </button>
        )
    );
};

export default ScrollToTop;