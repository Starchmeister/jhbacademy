import type { MetadataRoute } from "next";

const baseUrl = "https://www.jhbchristianacademy.co.za";

const routes = [
  "",
  "/about",
  "/academics",
  "/academics/pre-primary",
  "/academics/primary",
  "/academics/high-school",
  "/admissions",
  "/admissions/fees",
  "/admissions/uniform",
  "/admissions/payments",
  "/apply",
  "/gallery",
  "/success-stories",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
