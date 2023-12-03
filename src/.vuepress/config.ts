import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/free-area/",

  lang: "zh-CN",
  title: "丁善伟",
  description: "vuepress-theme-hope 的博客演示",

  theme,


  // Enable it with pwa
  // shouldPrefetch: false,
});
