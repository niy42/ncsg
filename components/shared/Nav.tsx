import Link from 'next/link';
import { FaSortUp, FaSortDown } from 'react-icons/fa';

type Navlinks = {
    name: string,
    url: string,
    classname: string
}

const navlinksfirst: Array<Navlinks> = [
    { name: "Our Story", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "Meet the Team", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "Volunteer", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" }
];

const navlinkssecond: Array<Navlinks> = [
    { name: "Health & Wellness", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "Outreach", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "Upskilling & Courses", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" }
];

const navlinksthird: Array<Navlinks> = [
    { name: "News", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "Support groups", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" },
    { name: "Support NCSG", url: "/test", classname: "px-[1rem] py-[0.7rem] hover:bg-[#171719] duration-200 whitespace-nowrap" }
];

function Nav({ fixedBg }: { fixedBg: boolean }) {
    return (
        <nav className={`lg:w-full max-md:w-[20rem] flex items-center gap-[2rem] justify-between ${fixedBg ? "w-full dark:border-neutral-700 " : "bg-transparent"} duration-200 `}> {/*${bgColor ? 'bg-gray-700 flex-1 rounded-full px-[3rem] py-[0.6rem] transition-colors duration-300' : 'bg-transparent'}*/}
            <Link href={""} className='whitespace-nowrap text-white hover:text-gray-300 transition-colors duration-300'>
                Home
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
                <Link href={""} className="flex w-full justify-between items-center gap-[0.9rem] text-white hover:text-gray-300 transition-colors duration-300 whitespace-nowrap">
                    About
                    <span className="">
                        <FaSortDown className="hidden group-hover:block" />
                        <FaSortUp className="group-hover:hidden" />
                    </span>
                </Link>
                <div className='absolute -left-4 top-[1.5rem] opacity-0 invisible group-hover:visible group-hover:opacity-100 flex flex-col-reverse bg-[#303030] rounded-[5px] shadow-lg transition-all translate-y-[1.5rem] group-hover:translate-y-[2.5rem] transform duration-300 ease-out'>
                    {navlinksfirst.map(({ name, url, classname }: Navlinks, index) => (
                        <Link
                            href={url}
                            key={index + name}
                            className={`${classname} text-white hover:text-gray-300 transition-colors duration-300`}>
                            {name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
                <Link href={""} className="flex items-center gap-[0.9rem] text-white hover:text-gray-300 transition-colors duration-300 whitespace-nowrap">
                    Services
                    <span className="">
                        <FaSortDown className="hidden group-hover:block" />
                        <FaSortUp className="group-hover:hidden" />
                    </span>
                </Link>
                <div className='absolute -left-4 top-[1.5rem] opacity-0 invisible group-hover:visible group-hover:opacity-100 flex flex-col bg-[#303030] rounded-[5px] shadow-lg transition-all translate-y-[1.5rem] group-hover:translate-y-[2.5rem] transform duration-300 ease-out'>
                    {navlinkssecond.map(({ name, url, classname }: Navlinks, index) => (
                        <Link
                            href={url}
                            key={index + name}
                            className={`${classname} text-white hover:text-gray-300 transition-colors duration-300`}>
                            {name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Offerings Dropdown */}
            <div className="relative group">
                <Link href={""} className="flex items-center gap-[0.9rem] text-white hover:text-gray-300 transition-colors duration-300 whitespace-nowrap">
                    Offerings
                    <span className="">
                        <FaSortDown className="hidden group-hover:block" />
                        <FaSortUp className="group-hover:hidden" />
                    </span>
                </Link>
                <div className='absolute -left-4 top-[1.5rem] opacity-0 invisible group-hover:visible group-hover:opacity-100 flex flex-col bg-[#303030] rounded-[5px] shadow-lg transition-all translate-y-[1.5rem] group-hover:translate-y-[2.5rem] transform duration-300 ease-out'>
                    {navlinksthird.map(({ name, url, classname }: Navlinks, index) => (
                        <Link
                            href={url}
                            key={index + name}
                            className={`${classname} text-white hover:text-gray-300 transition-colors duration-300`}>
                            {name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Nav;
