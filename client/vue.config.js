module.exports = {
  pwa: {
    name: "3D Room Interior",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxOptions: {
      skipWaiting: true,
      exclude: [/\.map$/, /_redirects/],
    },
    manifestOptions: {
      icons: [
        {
          src: "./logo.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "./logo.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "./logo.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "./logo.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
      iconPaths: {
        favicon32: "./logo.png",
        favicon16: "./logo.png",
        appleTouchIcon: "./logo.png",
        maskIcon: "./logo.png",
        msTileImage: "./logo.png",
      },
    },
    icons: [
      {
        src: "./logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "./logo.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "./logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "./logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    iconPaths: {
      favicon32: "./logo.png",
      favicon16: "./logo.png",
      appleTouchIcon: "./logo.png",
      maskIcon: "./logo.png",
      msTileImage: "./logo.png",
    },
  },
  devServer: {
    watchOptions: {
      poll: true,
    },
  },
};
