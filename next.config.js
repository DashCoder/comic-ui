// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    images: {
        remotePatterns: [{
          protocol: 'https',
          hostname: 'ukfilestore1.blob.core.windows.net',
          port: '',
          pathname: '/demo/**'
        }]
      }
  }
   
module.exports = nextConfig