import { Manrope } from "next/font/google"
import Image from "next/image"

const manrope = Manrope({
    subsets: ['latin'],
    weight: ["600", "700"]
});

const Article = ({ imgUrl, date, title, classname }: any) => {
    return (
        <div className='relative space-y-6 border p-8 rounded-xl border-gray-700 bg-zinc-900 flex flex-col justify-start items-center h-full'>
            <div className='absolute h-[290px] top-0 w-full'>
                <Image src={imgUrl} alt="image" layout="fill" objectFit="cover" className="rounded-tr-xl rounded-tl-xl h-full w-full" /> {/* Image fills the container */}
            </div>
            <div className="-left-2 absolute top-[252px] flex flex-col justify-between w-full h-1/2 p-4"> {/* The text content takes the remaining half */}
                <p className={`${classname} mb-2 mt-4`}>{date}</p> {/* Date positioned just below the image */}
                <h3 className={`${manrope.className} text-3xl mb-2`}>{title}</h3> {/* Title below the date */}
                <p className="mt-auto relative bottom-6 text-sm text-gray-300">Read full article</p> {/* "Continue reading..." positioned at the bottom */}
            </div>
        </div>
    )
}

export default Article
