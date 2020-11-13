const { createWriteStream } = require("fs");
const { SitemapStream } = require("sitemap");
const routes = require("./routes.js");

// Creates a sitemap object given the input configuration with URLs
const sitemap = new SitemapStream({
  hostname: "https://www.panamfamrest.com",
});

// tells the sitemap where in the file structure to write the xml file
const writeStream = createWriteStream("./public/sitemap.xml");

// begins to write to the xml file
sitemap.pipe(writeStream);

// maps over each object in the sitemap-routes file and creates a corresponding <url> tag and child <loc>, <changefreq>, <lastmod>, and <priority> tags
routes.map((x) => {
  x.lastmod = new Date();
  sitemap.write(x);
});

// signals to stop writing to the xml file
sitemap.end();
