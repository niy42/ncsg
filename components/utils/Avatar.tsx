"use client";

import { IoIosChatboxes } from 'react-icons/io';
import { useEffect, useState } from 'react';

const chatWords: Array<string> = ["Hey! Got inquiries?", "We've got you!", "Let's chat"];

export const styles = {
    chatWithMeButton: {
        cursor: 'pointer',
        boxShadow: '0 0 16px rgba(0, 0, 0, 0.33)',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'scale(1)',
        transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
    },
    icon: {
        fontSize: '36px', // Adjust size as needed
    },
    visible: {
        opacity: 1,
        transform: 'scale(1)',
        animation: 'fadeInBounce 1s ease-in-out',
    },
    hidden: {
        opacity: 0,
        transform: 'scale(0.6)',
    },
};

const Avatar = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // Function to change chat words
    const changeChatWords = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % chatWords.length);
    };

    useEffect(() => {
        // Inject keyframes for animation
        const styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';
        styleSheet.innerHTML = `
            @keyframes fadeInBounce {
                0% {
                    opacity: 0;
                    transform: scale(0.5);
                }
                50% {
                    opacity: 1;
                    transform: scale(1.1);
                }
                100% {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        `;
        document.head.appendChild(styleSheet);

        // Set up interval for changing chat words
        const interval = setInterval(changeChatWords, 2000); // Change words every 2 seconds

        // Handle scroll event to show/hide component
        const handleScroll = () => {
            setIsVisible(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval); // Clear the interval on component unmount
            document.head.removeChild(styleSheet); // Clean up injected style
        };
    }, []);

    return (
        <>
            {isVisible && (
                <div
                    className={`fixed z-20 group flex flex-col items-center transition-opacity duration-500 ease-in-out justify-center bottom-28 right-12 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={isVisible ? styles.visible : styles.hidden}
                >
                    <div className="group group-hover:scale-100 transition-all duration-300 ease-in group-hover:bg-gray-600 group-hover:rounded-full relative">
                        <div className='absolute w-full whitespace-nowrap opacity-0 group-hover:opacity-100 -top-[30px] right-14'>
                            {chatWords[currentIndex]}
                        </div>
                        <div className='bg-gray-900 border border-zinc-600' style={styles.chatWithMeButton}>
                            <IoIosChatboxes style={styles.icon} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Avatar;
