import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "javiiccode",
    short_name: "Javier Castano",
    description: "javiiccode's Blog powered by Next.js <3",
    start_url: "/",
    display: "standalone",
    background_color: "#E2E5F3",
    theme_color: "#E2E5F3",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
