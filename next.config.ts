import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.pinimg.com',
        "cdn-icons-png.flaticon.com",
        "upload.wikimedia.org",
      "cdn-icons-png.freepik.com",
    "encrypted-tbn0.gstatic.com",
  "img.icons8.com"], // Add the allowed external domains here
  },
};

export default nextConfig;
