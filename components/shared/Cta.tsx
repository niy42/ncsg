import AosInitializer from "@/app/aos";

export default function Cta() {
    return (
        <>
            <AosInitializer />
            <section className="relative px-4 py-6 mx-4 bg-zinc-700/30 rounded-2xl sm:px-8 sm:py-10 sm:mx-8 md:h-[400px] md:px-8 md:py-6">
                <div className="w-full h-full space-y-6 p-4 border border-dashed flex-col border-zinc-500/80 dark:border-zinc-600 rounded-lg flex items-center justify-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">
                        Do You Need Support in Your Care Journey?
                    </h2>
                    <p className="text-base sm:text-lg md:text-lg mb-6 text-center">
                        We’re here to help you with comprehensive services tailored for carers like you. Explore how we can make a difference:
                    </p>
                    <a
                        href="#contact"
                        className="mt-4 px-4 py-2 sm:px-6 sm:py-3 bg-yellow-500 text-blue-800 font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition duration-300"
                    >
                        Get in Touch
                    </a>
                </div>
            </section>
        </>
    );
}
