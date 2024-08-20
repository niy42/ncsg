import AosInitializer from "@/app/aos";
import { FaPaperPlane } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi";

const Statement = function () {
    return (
        <>
            <AosInitializer />
            <section className="bg-gray-800 py-8 mx-4 sm:mx-6 lg:mx-8 rounded-xl overflow-hidden" data-aos="fade-up">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 sm:gap-6 md:grid-cols-2">
                        <div className="border border-gray-600 dark:border-gray-600 border-dashed rounded-xl p-4 sm:p-6" data-aos="fade-right">
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 p-4 sm:p-6">
                                <h2 className="text-lg sm:text-xl font-semibold text-white text-center sm:text-left">Our Mission</h2>
                                <FaPaperPlane className="text-xl sm:text-2xl" />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                                <p className="text-gray-300 font-light mt-2 text-sm sm:text-base">
                                    {/* Add mission description here */}
                                    Our mission is to provide a comprehensive support network for Nigerian carers in the UK by offering resources, fostering connections, and advocating for their unique needs. We are dedicated to enhancing the quality of life for Nigerian carers through mentorship, education, and collaboration with relevant stakeholders, ultimately enriching the care sector and society as a whole.
                                </p>
                            </div>
                        </div>
                        <div className="border border-gray-600 dark:border-gray-600 border-dashed rounded-xl p-4 sm:p-6" data-aos="fade-left">
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 p-4 sm:p-6">
                                <h2 className="text-lg sm:text-xl font-semibold text-white text-center sm:text-left">Our Vision</h2>
                                <HiLightBulb className="text-xl sm:text-2xl" />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                                <p className="text-gray-300 mt-2 font-light text-sm sm:text-base">
                                    {/* Add vision description here */}
                                    Our vision is to establish a vibrant, inclusive, and supportive community that empowers Nigerian carers in the UK, promoting their well-being, social integration, and professional growth while fostering a sense of belonging and unity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Statement;
