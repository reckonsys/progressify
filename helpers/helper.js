#! /usr/bin/env node

const ngsw_config = {
  index: "/index.html",
  assetGroups: [
    {
      name: "",
      installMode: "prefetch",
      resources: {
        files: [
          "/favicon.ico",
          "/index.html",
          "/*.css",
          "/*.js"
        ]
      }
    }, {
      name: "",
      installMode: "lazy",
      updateMode: "prefetch",
      resources: {
        "files": [
          "/assets/**"
        ]
      }
    }
  ],
  dataGroups: [
        {
            name: "",
            urls: [],
            cacheConfig: {
                maxSize: 20,
                maxAge: "1h",
                timeout: "5s",
                strategy: "freshness"
            }
        }
    ]
}

const manifest = {
  name: "",
  short_name: "",
  theme_color: "",
  background_color: "",
  display: "",
  scope: "/",
  start_url: "/",
  icons: [{
      src: "assets/icons/icon-72x72.png",
      sizes: "72x72",
      type: "image/png"
    },
    {
      src: "assets/icons/icon-96x96.png",
      sizes: "96x96",
      type: "image/png"
    },
    {
      src: "assets/icons/icon-128x128.png",
      sizes: "128x128",
      type: "image/png"
    },
    {
      src: "assets/icons/icon-144x144.png",
      sizes: "144x144",
      type: "image/png"
    },
    {
      src: "assets/icons/icon-152x152.png",
      sizes: "152x152",
      type: "image/png"
    },
    {
      src: "assets/icons/icon-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "assets/icons/icon-384x384.png",
      sizes: "384x384",
      type: "image/png"
    },
    {
      src: "assets/icons/icon-512x512.png",
      sizes: "512x512",
      type: "image/png"
    }
  ]
}


module.exports = {
  'service_worker_config': ngsw_config,
  'manifest': manifest
}
