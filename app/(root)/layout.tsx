import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/shared/Header";
import SmoothScroll from "@/components/shared/SmoothScroll";
import Brand from "@/components/shared/Brand";
import Blog from "@/components/shared/Blog";
import Carousel from "@/components/shared/Carousel";
import hand from '@/public/assets/helptrans.png';


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

const Design = function ({ rotate }: { rotate: string }) {
  return (
    <div className={`${rotate}`}>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
    </div>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={`${inter.className} flex flex-col 2xl:max-w-[1470px] relative`}>
          <Header />
          <SmoothScroll>
            <main className="overflow-x-clip h-screen items-center top-[15rem] 2xl:pb-0 mb-[10rem] relative">
              {children}
            </main>
            <Brand />
            <Blog />
            <Carousel images={imageObjects} />
            <Design rotate={'circles'} />
          </SmoothScroll>
        </body>
      </html>
    </>
  );
}