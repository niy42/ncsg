import type { groupPhotos } from "@/app/(root)/layout";
import { Nunito, Dancing_Script } from "next/font/google";
import AosInitializer from "@/app/aos";
import Image from "next/image";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

// Call the font loader outside of the component
const nunito = Nunito({
    subsets: ["latin-ext"],
    weight: '300',
});

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: "400",
});

export default function Roller({ photos, donations }: groupPhotos) {
    return (
        <>
            <AosInitializer />
            <section className="py-8 px-4 overflow-hidden">
                <div className="w-full relative flex flex-col space-y-12 md:space-y-24 bg-zinc-700 p-6 md:px-8 rounded-lg shadow-lg">
                    { /*<!-- Quote Section with Adjusted Margin -->*/}
                    <div className="max-w-full md:max-w-3xl mx-auto relative text-center max-lg:mb-8 xl:mb-12">
                        <p className={`mt-6 text-base md:text-lg leading-relaxed ${nunito.className} text-white relative whitespace-pre-wrap`}>
                            <RiDoubleQuotesL className="absolute text-2xl md:text-3xl top-[-10%] md:top-[-15%] -left-4 md:-left-8 text-gray-400" />
                            <RiDoubleQuotesR className="absolute text-2xl md:text-3xl bottom-[-10%] md:bottom-[-15%] -right-4 md:-right-8 text-gray-400" />
                            <span>
                                We are one big family, and we believe that giving is at the heart of our shared journey.
                                By supporting each other, we strengthen our bonds and enrich our community.
                                Every act of generosity, big or small, helps us grow together and make a positive impact.
                                Together, we create a culture of kindness and shared success.
                            </span>
                            <span className={`absolute -bottom-12 md:-bottom-10 right-0 md:right-16 font-light text-xs md:text-sm ${dancingScript}`}>
                                Folashade Aremu &rarr; NCSG Team lead
                            </span>
                        </p>
                    </div>

                    {/* <!-- Special Thanks Section with Adjusted Margin -->*/}
                    <div data-aos="fade-up" className="flex flex-col items-center justify-center mt-8 md:mt-12">
                        <span className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                            A Special Thanks to FareShare for Their Generous Support
                        </span>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 text-left mt-6">
                            We are deeply grateful to <strong>FareShare</strong> for their generous sponsorship of our recent childcare event.
                            As a charity dedicated to tackling food poverty and reducing food waste, FareShare’s commitment to creating positive social change aligns perfectly with our mission...
                        </p>
                        <img className="mt-8 w-full h-full md:w-1/2 lg:w-1/2 rounded-lg shadow-lg" src="/assets/ncsg3.jpg" alt="FareShare logo" />
                    </div>


                    {/*<!-- Image Grid Section with Adjusted Spacing Between Items --> */}
                    <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <div className="flex flex-col gap-4">
                            <p className="text-white text-base sm:text-lg md:text-xl">Special Hangout - NCSG</p>
                            <div className="grid grid-cols-1 gap-6">
                                {photos.map(({ name }, index) => (
                                    <div key={index} className="border-4 border-gray-400 border-dashed relative w-full h-0 pb-[100%] overflow-hidden rounded-lg">
                                        <Image
                                            src={name}
                                            alt={`Photo ${index + 1}`}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            className="absolute inset-0"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="text-white text-base sm:text-lg md:text-xl">Donations from Fareshare</p>
                            <div className="grid grid-cols-1 gap-6">
                                {donations.map(({ name }, index) => (
                                    <div key={index} className="border-4 border-gray-400 border-dashed relative w-full h-0 pb-[100%] overflow-hidden rounded-lg">
                                        <Image
                                            src={name}
                                            alt={`Photo ${index + 1}`}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            className="absolute inset-0"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}
