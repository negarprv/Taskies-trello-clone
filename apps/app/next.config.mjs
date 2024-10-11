import "./src/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // You can remove the transpilePackages if you're not using Supabase anymore
  experimental: {
    // Assuming you still need the instrumentation hook
    instrumentationHook: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;