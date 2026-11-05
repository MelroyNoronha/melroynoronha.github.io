import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";

// open external blog links in a new tab without leaking window.opener
const externalLinks = {
  name: "external-links",
  element: {
    filter: ["a"],
    visit(node, ctx) {
      if (!/^https?:\/\//.test(node.properties.href ?? "")) return;
      ctx.setProperty(node, "target", "_blank");
      ctx.setProperty(node, "rel", "noopener noreferrer nofollow");
    },
  },
};

export default defineConfig({
  site: "https://melroynoronha.github.io",
  markdown: {
    processor: satteri({ hastPlugins: [externalLinks] }),
  },
});
