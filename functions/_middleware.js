const MAINLAND_CHINA_COUNTRY_CODE = "CN";

const PUBLIC_ASSET_PREFIXES = [
  "/_astro/",
  "/images/",
  "/favicon",
  "/robots.txt",
];

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const country = context.request.cf?.country;
  const isPublicAsset = PUBLIC_ASSET_PREFIXES.some((prefix) =>
    url.pathname.startsWith(prefix),
  );

  if (
    country === MAINLAND_CHINA_COUNTRY_CODE &&
    url.pathname !== "/unavailable" &&
    !isPublicAsset
  ) {
    url.pathname = "/unavailable";
    url.search = "";
    return Response.redirect(url.toString(), 302);
  }

  return context.next();
}
