const projects = require("../src/data/projectsData.js").default;
const fs = require("fs").promises;
const path = require("path");

async function validateImageUrls() {
  const logFile = path.join(__dirname, "image-validation-log.txt");
  const logMessages = [];
  const cloudinaryBase = "https://res.cloudinary.com/dr7pljkee";

  for (const project of projects) {
    const urls = [
      project.src,
      project.link,
      ...(project.details?.gallery?.map((item) => item.image) || []),
    ].filter(Boolean);

    for (const url of urls) {
      // Security check: Ensure URL is from Cloudinary with correct Cloud Name, allowing versioned paths
      if (!url.startsWith(cloudinaryBase) || !url.includes("/image/upload/")) {
        const message = `Security Warning: Invalid Cloudinary URL: ${url} in project ${project.title}`;
        console.warn(message);
        logMessages.push(message);
        continue;
      }

      try {
        const response = await fetch(url, {
          method: "HEAD",
          headers: {
            "User-Agent": "Image-Validator/1.0",
          },
        });
        if (!response.ok) {
          const message = `Invalid URL: ${url} for project ${project.title} (Status: ${response.status})`;
          console.warn(message);
          logMessages.push(message);
        } else {
          logMessages.push(`Valid URL: ${url} for project ${project.title}`);
        }
      } catch (error) {
        const message = `Error checking URL: ${url} for project ${project.title} - ${error.message}`;
        console.error(message);
        logMessages.push(message);
      }
    }
  }

  // Write logs to file
  await fs.writeFile(logFile, logMessages.join("\n"));
  console.log(`Validation complete. Results logged to ${logFile}`);
}

validateImageUrls().catch((error) => {
  console.error("Validation failed:", error);
  process.exit(1);
});