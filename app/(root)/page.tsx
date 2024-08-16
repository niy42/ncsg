import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
    subsets: ['latin'],
    weight: ['400', '700'],
});

function Home() {
    return (
        <section className="mx-8 rounded-xl bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 gap-8 lg:gap-12 flex flex-col lg:flex-row items-center lg:items-start justify-between">
                    <div className="flex flex-col items-center lg:items-start justify-center lg:justify-center text-center lg:text-left w-full">
                        <p className="text-lg lg:text-[36px] font-semibold leading-relaxed gradient__text w-full">
                            Nigeria Carers Support Group <br />
                            <span className={`pl-0 lg:pl-4 lg:text-[42px] ${dancingScript.className}`}>We Care</span> <br />
                            <span className={`pl-0 lg:pl-8 lg:text-[42px] ${dancingScript.className}`}>We Share</span> <br />
                        </p>
                        <span className="text-sm p-8 border rounded-xl dark:border-zinc-600 font-sans mt-8 lg:text-base font-extralight text-gray-300 overflow-hidden overflow-ellipsis whitespace-pre-wrap w-full leading-6">
                            <span className="pl-8">In today's fast-paced</span> and digitally connected world, people often find themselves feeling isolated despite being surrounded by technology and social networks. This paradox of loneliness can stem from a disconnection with our inner selves. At the core of our philosophy is the belief that by reconnecting with our true selves—our thoughts, emotions, and inner desires—we can foster a deeper sense of belonging and purpose. This self-connection empowers individuals to navigate the complexities of life with greater resilience, compassion, and understanding, ultimately alleviating the feelings of isolation that many experience.
                        </span>
                    </div>

                    <div className="flex flex-col border rounded-xl dark:border-gray-700 border-dashed items-center justify-center lg:justify-end lg:relative">
                        <Image
                            src="/assets/doc.svg"
                            alt="Description"
                            width={36}
                            height={36}
                            className="w-full h-auto max-w-sm lg:max-w-full object-cover border-collapse z-0 rounded-lg shadow-lg"
                        />
                        <p className="lg:absolute left-3 text-gray-500 text-[10px] font-thin font-mono">Image attributed to freepik.com</p>
                    </div>

                </div>
            </div>
        </section>

    );
}

export default Home;
