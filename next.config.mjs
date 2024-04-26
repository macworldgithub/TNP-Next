/** @type {import('next').NextConfig} */
const nextConfig = {
     async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
//                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
//                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
//                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'media.springernature.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.freecodecamp.org',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.gettyimages.ca',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'assets.bwbx.io',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'ichef.bbci.co.uk',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'static.vecteezy.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
