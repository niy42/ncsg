"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Deliciouscare() {
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
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 xl:px-12">
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
                <h1 className="text-3xl sm:text-4xl font-semibold text-gray-300">
                    Your Child’s After-School Care: Fun, Safety, and Nutritious Meals
                </h1>
                <p className="mt-2 text-xl text-gray-400">
                    Providing your child with a safe, engaging, and nurturing after-school environment.
                </p>
            </header>

            {/* Section 1: Introduction */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-300">Our Child Care Program</h2>
                <p className="mt-4 text-lg text-gray-400">
                    At our After-School Program, we prioritize both fun and safety. Our experienced staff ensure that your child receives the attention and care they need while participating in enriching activities.
                    <br /><br />
                    <strong>What We Offer:</strong>
                </p>
                <div className="mt-2 text-gray-400">
                    <ul className="mt-2 list-disc pl-6">
                        <li>Engaging after-school activities including arts & crafts, games, and educational programs.</li>
                        <li>Nutritious meals to support your child's health and energy.</li>
                        <li>Convenient pick-up from school or after-school activities for a seamless experience.</li>
                    </ul>
                </div>


                <img className="mt-6 w-1/2 h-1/2 rounded-lg shadow-lg" src="/assets/ncsg4.jpg" alt="Children Engaged in Activities" />
            </section>

            {/* Section 2: What We Do */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-300">What We Do</h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Child Care Activity 1 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-300">Engaging After-School Activities</h3>
                        <p className="mt-2 text-gray-400">We offer a wide range of activities such as arts and crafts, games, and creative play to help children learn, develop social skills, and have fun after school.</p>
                        <img className="mt-4 w-full h-48 object-cover rounded-lg" src="/assets/ncsg1.jpg" alt="Children's Activities" />
                    </div>
                    {/* Child Care Activity 2 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-300">Healthy Meals & Snacks</h3>
                        <p className="mt-2 text-gray-400">We provide nutritious meals to keep your child energized. After-school snacks and a balanced dinner are served daily to support their well-being.</p>
                        <img className="mt-4 w-full h-48 object-cover rounded-lg" src="/assets/strawb.jpg" alt="Nutritious Meals" />
                    </div>
                </div>
            </section>

            {/* Section 3: Future Plans */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-300">Exciting Future Plans</h2>
                <p className="mt-4 text-lg text-gray-400">We’re always working to enhance our programs and bring more exciting opportunities to our after-school care. Here’s what’s coming soon:</p>
                <ul className="mt-4 space-y-4 list-disc pl-6 text-gray-300">
                    <li><strong className="font-semibold">New Learning Modules for Creative Development</strong></li>
                    <li><strong className="font-semibold">Outdoor Play Area Expansion</strong></li>
                    <li><strong className="font-semibold">Extended Evening Hours for Working Parents</strong></li>
                </ul>
            </section>

            {/* Join Us Section */}
            <section className="text-center mb-12">
                <h2 className="text-3xl font-semibold text-gray-300">Join Our After-School Care Program!</h2>
                <p className="relative mt-4 text-lg text-gray-400 sm:text-left sm:w-1/2 mx-auto">
                    If you’re looking for a safe, fun, and nurturing environment for your child after school, we’re here to help. Sign up today!
                </p>
                <div className="flex justify-center mt-6">
                    <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        Get Started
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center text-gray-400 py-4">
                <p>&copy; 2024 NCSG. All rights reserved.</p>
            </footer>
        </div>
    );
}
