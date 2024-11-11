import { withNextVideo } from "next-video/process";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',  // Tells Next.js to prepare the app for static export
    trailingSlash: true,  // Optional: Adds trailing slashes to URLs (e.g., /about/ instead of /about)
};

export default withNextVideo(nextConfig, { folder: ' ' });
