var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  css: () => css,
  entry: () => entry,
  js: () => js,
  module: () => module2
});
module.exports = __toCommonJS(stdin_exports);
var module2 = __toESM(require("../entries/pages/index.svelte.js"));
const entry = "pages/index.svelte-26952f79.js";
const js = ["pages/index.svelte-26952f79.js", "chunks/vendor-7facb561.js", "chunks/Grid-dcfa71ce.js", "chunks/paths-396f020f.js", "chunks/homepage-c7913821.js", "chunks/Header-6be20110.js", "chunks/footnote-531a5d50.js"];
const css = ["assets/pages/index.svelte-44cefb9c.css", "assets/font-b0872ede.css", "assets/vendor-8771059f.css", "assets/Grid-6710df3e.css", "assets/Header-e1b85124.css"];
