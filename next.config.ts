import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the floating "N" dev indicator so the portfolio looks the same
  // in local dev as on production when the client is reviewing.
  devIndicators: false,
};

export default nextConfig;
