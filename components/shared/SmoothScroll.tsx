"use client"

import { ReactLenis } from 'lenis/react';

function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis options={{ lerp: 0.12 }} root>
            {children}
        </ReactLenis>
    )
}

export default SmoothScroll;