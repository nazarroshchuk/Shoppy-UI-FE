import type { NextConfig } from 'next';
import { hostname } from 'node:os';

const nextConfig: NextConfig = {
    /* config options here */
    experimental: {
      serverActions: {
        bodySizeLimit: '5mb'
      }
    },
    images: {
      remotePatterns: [{
        hostname:
          'localhost'
      }]
    }
  }
;

export default nextConfig;
