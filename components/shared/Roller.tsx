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
})

export default function Roller({ photos }: groupPhotos) {
    return (
        <>
            <AosInitializer />
            <section className="py-8 px-4 overflow-hidden">
                <div className="w-full relative flex flex-col space-y-16 bg-zinc-700 p-6 rounded-lg shadow-lg">
                    <div className="max-w-64 md:max-w-2xl mx-auto relative text-center">
                        <p className={`mt-4 text-lg leading-relaxed ${nunito.className} text-white relative whitespace-pre-wrap`}>
                            <RiDoubleQuotesL className="absolute text-3xl sm:text-4xl top-[-8%] md:top-[-20%] -left-6 sm:-left-10 md:-left-2 lg:left-[-10px] text-gray-400" />
                            <RiDoubleQuotesR className="absolute text-3xl sm:text-4xl bottom-[-6%] md:bottom-[-20%] -right-6 sm:right-12 md:right-0 lg:right-[-10px] text-gray-400" />
                            <span>
                                We are one big family, and we believe that giving is at the heart of our shared journey.
                                By supporting each other, we strengthen our bonds and enrich our community.
                                Every act of generosity, big or small, helps us grow together and make a positive impact.
                                Together, we create a culture of kindness and shared success.
                            </span>
                            <span className={`absolute -bottom-12 sm:-bottom-8 right-0 md:right-32 font-light text-xs ${dancingScript}`}>
                                Folashade Aremu &rarr; NCSG Team lead
                            </span>
                        </p>
                    </div>

                    <div data-aos="fade-right" className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
                        {photos.map(({ name }, index) => (
                            <div key={index} className="border-4 border-gray-400 border-dashed relative w-full h-0 pb-[100%] overflow-hidden rounded-lg">
                                <Image
                                    src={name}
                                    alt={`Photo ${index + 1}`} // Improved alt text for accessibility
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute inset-0"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
}
