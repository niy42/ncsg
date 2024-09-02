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
                <div className="w-full relative flex flex-col space-y-8 md:space-y-16 bg-zinc-700 p-6 md:px-8 rounded-lg shadow-lg">
                    <div className="max-w-full md:max-w-3xl mx-auto relative text-center max-lg:mb-4">
                        <p className={`mt-4 text-base md:text-lg leading-relaxed ${nunito.className} text-white relative whitespace-pre-wrap`}>
                            <RiDoubleQuotesL className="absolute text-2xl md:text-3xl top-[-10%] md:top-[-15%] -left-4 md:-left-8 text-gray-400" />
                            <RiDoubleQuotesR className="absolute text-2xl md:text-3xl bottom-[-10%] md:bottom-[-15%] -right-4 md:-right-8 text-gray-400" />
                            <span>
                                We are one big family, and we believe that giving is at the heart of our shared journey.
                                By supporting each other, we strengthen our bonds and enrich our community.
                                Every act of generosity, big or small, helps us grow together and make a positive impact.
                                Together, we create a culture of kindness and shared success.
                            </span>
                            <span className={`absolute -bottom-10 md:-bottom-8 right-0 md:right-16 font-light text-xs md:text-sm ${dancingScript}`}>
                                Folashade Aremu &rarr; NCSG Team lead
                            </span>
                        </p>
                    </div>

                    <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div className="flex flex-col gap-2">
                            <p className="text-white text-base sm:text-lg md:text-xl">Special Hangout - NCSG</p>
                            <div className="grid grid-cols-1 gap-4">
                                {photos.map(({ name }, index) => (
                                    <div key={index} className="border-4 border-gray-400 border-dashed relative w-full h-0 pb-[100%] overflow-hidden rounded-lg">
                                        <Image
                                            src={name}
                                            alt={`Photo ${index + 1}`} // Improved alt text for accessibility
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            className="absolute inset-0"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-white text-base sm:text-lg md:text-xl">Donations from Fareshare</p>
                            <div className="grid grid-cols-1 gap-4">
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
