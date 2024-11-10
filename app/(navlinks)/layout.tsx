import SmoothScroll from "@/components/shared/SmoothScroll";
import Design from "../design";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "Nigeria Carers Support Group",
    description: "Providing support to carers in the UK",
};
export default function NutritionLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <SmoothScroll>
                    {children}
                    <Design rotate={'circles'} />
                </SmoothScroll>

            </body>
        </html>
    )
}