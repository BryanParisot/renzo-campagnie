// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

module.exports = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "fr",
    localeDetection: true,
  },
  images: {
    domains: ["s3.us-west-2.amazonaws.com"],
    unoptimized: true,
    loader: "custom",
    loaderFile: "./public/Gear.gif",
  },
};

//module.exports = nextConfig
