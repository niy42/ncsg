import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/shared/Header";
import SmoothScroll from "@/components/shared/SmoothScroll";
import Brand from "@/components/shared/Brand";
import Blog from "@/components/shared/Blog";
import Carousel from "@/components/shared/Carousel";
import hand from '@/public/assets/helptrans.png';
import ScrollToTop from '@/components/shared/ScrollToTop';
import Statement from "@/components/shared/Statement";
import Design from "../design";
import Footer from "@/components/shared/Footer";
import Avatar from "@/components/utils/Avatar";
import Cta from "@/components/shared/Cta";
import { group1, group, onions, food1 } from "@/public/assets";
import Roller from "@/components/shared/Roller";
import { StaticImageData } from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nigeria Carers Support Group",
  description: "Providing support to carers in the UK",
};

export type Props = {
  image: string,
  title: any
}

export type imagesProps = {
  images: Props[]
}

const imageObjects: Props[] = [
  { image: `Caring for others ${"\n"} is the greatest gift you can give`, title: hand },
  { image: "Together, we uplift those who care", title: hand },
  { image: "Empathy and support build stronger communities", title: hand },
  { image: `Every caregiver ${"\n"} deserves a caring community`, title: hand },
  { image: "Your strength inspires us all", title: hand }
];

export type Photos = {
  name: StaticImageData,
};

export type groupPhotos = {
  photos: Array<Photos>
}

const pics: Photos[] = [
  { name: group },
  { name: group1 },
  { name: onions },
  { name: food1 }
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={`${inter.className} min-h-screen flex flex-col w-full max-w-[100%] xl:max-w-[1470px] 2xl:max-w-[1600px] relative`}>
          <Header />
          <SmoothScroll>
            <main className="overflow-x-clip items-center top-[10rem] sm:top-[10rem] lg:top-[15rem] mb-[4rem] lg:mb-[10rem] relative">
              {children}
            </main>
            <Brand />
            <Statement />
            <Blog />
            <Roller photos={pics} />
            <Carousel images={imageObjects} />
            <ScrollToTop />
            <Cta />
            <Footer />
            <Avatar />
            <Design rotate={'circles'} />
          </SmoothScroll>
        </body>
      </html>
    </>
  );
}
