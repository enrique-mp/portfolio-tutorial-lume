import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import { format } from "https://deno.land/std/datetime/format.ts";
import imagick from "lume/plugins/imagick.ts";
import svgo from "lume/plugins/svgo.ts";

const site = lume({
  src: "./src",
  dest: "./public",
});

site.copy("images");
site.copy("favicons", ".");
site.copy("css");

site.use(date());
site.use(imagick());
site.use(svgo());

site.helper("siteUpdateYear", () => format(new Date(), "yyyy"), {
  type: "tag",
});

export default site;
