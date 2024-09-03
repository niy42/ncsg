import { Manrope } from "next/font/google"
import Image from "next/image"
import Link from "next/link";

const manrope = Manrope({
    subsets: ['latin'],
    weight: ["600", "700"]
});

const Article = ({ imgUrl, date, title, classname, href }: any) => {
    return (
        <div className='absolute w-full md:relative border p-8 rounded-xl border-gray-700 bg-zinc-900 flex flex-col justify-start items-center h-full'>
            <div className='absolute h-[290px] top-0 w-full'>
                <Image src={imgUrl} alt="image" fill style={{ objectFit: "cover" }} className="rounded-tr-xl rounded-tl-xl h-full w-full" /> {/* Image fills the container */}
            </div>
            <div className="absolute top-[268px] flex flex-col justify-between w-full h-1/2 p-4">
                {/* Date positioned just below the image */}
                <p className={`${classname} mb-2 mt-4`}>{date}</p>
                {/* Title below the date */}
                <h3 className={`${manrope.className} text-lg mb-2`}>{title}</h3>
                {/* Read Full Article Link */}
                <a
                    href={href}
                    className="relative flex items-center justify-between group rounded-lg px-4 py-3 md:px-5 md:py-4 transition-colors hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className="text-xs md:text-sm text-gray-300 cursor-pointer">Read full article</p>
                    <span className="text-xl md:text-2xl font-semibold transition-transform group-hover:translate-x-1 md:group-hover:translate-x-2 motion-reduce:transform-none">
                        &rarr;
                    </span>
                </a>


            </div>

        </div>
    )
}

export default Article
