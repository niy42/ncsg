"use client";

//import { styles } from '@/styles/styles';
import { IoIosChatboxes } from 'react-icons/io';
import { useEffect, useState } from 'react';

const chatWords: Array<string> = ["Hey! Got inquiries?", "We've got you", "Let's chat"];
export const styles = {
    chatWithMeButton: {
        cursor: 'pointer',
        boxShadow: '0 0 16 6 rgba(0, 0, 0, 0.33)',
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
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(`
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
        `, styleSheet.cssRules.length);

        // Set up interval for changing chat words
        const interval = setInterval(changeChatWords, 2000); // Change words every 2 seconds

        // Handle scroll event to show/hide component
        const handleScroll = () => {
            setIsVisible(window.scrollY > 1600);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval); // Clear the interval on component unmount
        };
    }, []);

    return (
        <>
            {isVisible && (
                <div
                    className={`fixed flex flex-col space-y-2 items-center transition-opacity duration-500 ease-in-out justify-center bottom-12 right-16 ${isVisible ? 'opacity-100' : ''}`}
                    style={isVisible ? styles.visible : styles.hidden}
                >
                    <div className='absolute w-full whitespace-nowrap -top-[20px] right-14'>
                        {chatWords[currentIndex]}
                    </div>
                    <div className='bg-transparent' style={styles.chatWithMeButton}>
                        <IoIosChatboxes style={styles.icon} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Avatar;
