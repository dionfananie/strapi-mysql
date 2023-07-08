const strapiApp = require("@strapi/strapi");
const app = strapiApp({ distDir: "./dist" });
app.start();
