"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function About() {
    const router = useRouter(); // Access the Next.js router
    const [isClient, setIsClient] = useState(false);

    // Ensure the component is mounted on the client side
    useEffect(() => {
        setIsClient(true);
    }, []);

    const goBack = () => {
        if (isClient) {
            // Check if the user is coming from a previous page in history
            if (document.referrer && document.referrer !== window.location.href) {
                // If there's a previous page, go back
                router.back();
            } else {
                // If there's no history (direct page load), redirect to home
                router.push('/');
            }
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Back Home Button */}
            <div className="mb-8">
                <button
                    onClick={goBack}
                    className="text-blue-600 hover:text-blue-800 text-lg font-medium flex items-center"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H7l5-5M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Back to Previous Page
                </button>
            </div>
            {/* Header Section */}
            <header className="text-center mb-12">
                <h1 className="text-4xl font-semibold text-gray-300">Our Journey: Impacting Careers and Empowering Growth</h1>
                <p className="mt-2 text-xl text-gray-400">A glimpse into our group's mission, efforts, and future initiatives</p>
            </header>

            {/* Section 1: Introduction */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-300">About Our Group</h2>
                <p className="mt-4 text-lg text-gray-400">
                    Our career group was founded with a vision to support individuals in their professional journeys,
                    helping them unlock their potential and thrive in their chosen fields. Through collaborative efforts
                    and a shared passion for growth, we have made a significant impact on numerous careers.
                </p>
                <img className="mt-6 w-full rounded-lg shadow-lg" src="/path/to/intro-image.jpg" alt="Career Group Members" />
            </section>

            {/* Section 2: Accomplishments */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-300">What We've Achieved</h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Accomplishment 1 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-300">Professional Development Workshops</h3>
                        <p className="mt-2 text-gray-400">We’ve hosted over 50 workshops, connecting professionals with industry experts and practical skills.</p>
                        <img className="mt-4 w-full h-48 object-cover rounded-lg" src="/path/to/workshop-image.jpg" alt="Workshop in Action" />
                    </div>

                    {/* Accomplishment 2 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-300">Career Mentoring Program</h3>
                        <p className="mt-2 text-gray-400">Our mentorship program has successfully matched hundreds of mentors with mentees, fostering growth and knowledge exchange.</p>
                        <img className="mt-4 w-full h-48 object-cover rounded-lg" src="/path/to/mentoring-image.jpg" alt="Mentorship Session" />
                    </div>

                    {/* Accomplishment 3 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-300">Networking Events</h3>
                        <p className="mt-2 text-gray-400">We’ve organized regular networking events, providing career professionals with opportunities to connect, collaborate, and grow.</p>
                        <img className="mt-4 w-full h-48 object-cover rounded-lg" src="/path/to/networking-image.jpg" alt="Networking Event" />
                    </div>
                </div>
            </section>

            {/* Section 3: What We Plan to Implement */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-300">Looking Ahead: Our Future Initiatives</h2>
                <p className="mt-4 text-lg text-gray-400">
                    We are excited about what’s to come! In the next phase of our journey, we aim to implement even more
                    impactful programs, including:
                </p>
                <ul className="mt-4 space-y-4 list-disc pl-6 text-gray-300">
                    <li><strong className="font-semibold">Advanced Skill Development Courses:</strong> Providing in-depth training to professionals seeking to enhance specialized skills.</li>
                    <li><strong className="font-semibold">International Career Exchange:</strong> Facilitating global connections and career opportunities for our members.</li>
                    <li><strong className="font-semibold">Online Mentorship Platform:</strong> Creating a digital platform for easier access to career mentors worldwide.</li>
                </ul>
            </section>

            {/* Section 4: Join Us */}
            <section className="text-center mb-12 relative">
                <h2 className="text-3xl font-semibold text-gray-300">Join Us on Our Mission!</h2>
                <p className="relative mt-4 text-lg text-gray-400 text-center left-1/4 w-1/2">If you're passionate about professional development and want to be part of an empowering community,
                    we invite you to join us and make an impact in the world of careers!
                </p>
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Get Involved
                </button>
            </section>

            {/* Footer */}
            <footer className="text-center text-gray-400 py-4">
                <p>&copy; 2024 Nigerian Career Support Group. All rights reserved.</p>
            </footer>
        </div>
    );
}
