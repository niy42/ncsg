"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Healthcare() {
    const router = useRouter();
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
                    Leading the Way in Dementia Care: NCSG’s Vision for Compassionate and Innovative Support
                </h1>
                <p className="mt-2 text-xl text-gray-400">
                    Providing specialized healthcare to enhance the lives of individuals with dementia and their families.
                </p>
            </header>

            {/* Section 1: Introduction */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-300">Our Dementia Care Services</h2>
                <p className="mt-4 text-lg text-gray-400">
                    At NCSG, we are dedicated to offering expert care and support to individuals living with dementia. We believe in fostering an environment where individuals feel valued, respected, and supported, providing tailored healthcare services to improve quality of life.
                    <br /><br />
                    <strong>What We Offer:</strong>
                </p>
                <div className="mt-2 text-gray-400">
                    <ul className="mt-2 list-disc pl-6">
                        <li>Personalized dementia care plans based on individual needs and preferences.</li>
                        <li>Compassionate staff trained to manage all stages of dementia with empathy and professionalism.</li>
                        <li>Support for families through counseling, education, and resources to cope with dementia-related challenges.</li>
                    </ul>
                </div>
                <img className="mt-6 w-full h-full md:w-1/2 md:h-1/4 rounded-lg shadow-lg" src="/assets/folas.jpg" alt="Dementia Caregiving" />
            </section>

            {/* Section 2: What We Do */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-300">What We Do</h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-300">Specialized Dementia Care</h3>
                        <p className="mt-2 text-gray-400">We offer tailored care programs to meet the unique needs of each individual with dementia, ensuring their comfort, safety, and dignity at every stage of their journey.</p>
                        <img className="mt-4 w-full h-48 object-cover rounded-lg" src="/assets/specialcare.jpeg" alt="Dementia Care" />
                    </div>
                    {/* Service 2 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-300">Family Support & Education</h3>
                        <p className="mt-2 text-gray-400">We offer comprehensive support for families, providing education, emotional support, and resources to help them navigate the challenges of dementia care.</p>
                        <img className="mt-4 w-full h-48 object-cover rounded-lg" src="/assets/demcare.jpeg" alt="Family Support" />
                    </div>
                </div>
            </section>

            {/* Section 3: Our Vision for Dementia Care */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-300">Our Vision for Dementia Care</h2>
                <p className="mt-4 text-lg text-gray-400">At NCSG, we strive to be at the forefront of dementia care by offering innovative, compassionate services that improve the quality of life for both individuals with dementia and their families.</p>
                <ul className="mt-4 space-y-4 list-disc pl-6 text-gray-300">
                    <li><strong className="font-semibold">Personalized Care Plans</strong> tailored to meet the unique needs of each individual with dementia.</li>
                    <li><strong className="font-semibold">A Safe and Nurturing Environment</strong> where individuals feel respected, valued, and secure.</li>
                    <li><strong className="font-semibold">Family Support Programs</strong> offering counseling, resources, and education to help families navigate dementia care challenges.</li>
                    <li><strong className="font-semibold">Ongoing Research and Innovation</strong> to ensure we provide the most effective, evidence-based dementia care practices.</li>
                </ul>
            </section>

            {/* Join Us Section */}
            <section className="text-center mb-12">
                <h2 className="text-3xl font-semibold text-gray-300">Join Our Mission to Improve Dementia Care</h2>
                <p className="relative mt-4 text-lg text-gray-400 sm:text-left sm:w-1/2 mx-auto">
                    If you are passionate about making a difference in the lives of individuals living with dementia, we invite you to join our community. Together, we can create a brighter future for those affected by dementia.
                </p>
                <div className="flex justify-center mt-6">
                    <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        Get Involved
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
