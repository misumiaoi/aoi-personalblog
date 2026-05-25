const required = ["NOTION_API_KEY", "NOTION_DATABASE_ID"];
const missing = required.filter((name) => !process.env[name]);

if (missing.length > 0) {
  console.log(
    `Notion sync is not configured. Missing: ${missing.join(", ")}`
  );
  process.exit(0);
}

console.log("Notion sync placeholder is configured, but not implemented yet.");
console.log("Next step: map Notion database fields to Astro content files.");

