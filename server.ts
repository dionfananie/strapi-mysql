const strapiApp = require("@strapi/strapi");
const app = strapiApp({ distDir: "<path_to_your_out_dir>" });
app.start();
