var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Methodology
});
var import_index_b0063b0f = require("../../chunks/index-b0063b0f.js");
var import_Header_svelte_svelte_type_style_lang_ac9159bf = require("../../chunks/Header.svelte_svelte_type_style_lang-ac9159bf.js");
var import_Header_55e1a853 = require("../../chunks/Header-55e1a853.js");
var import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons");
var import_content_25798381 = require("../../chunks/content-25798381.js");
var import_paths_396f020f = require("../../chunks/paths-396f020f.js");
var methodology_svelte_svelte_type_style_lang = "";
const css = {
  code: ".banner.svelte-1nv3py4.svelte-1nv3py4{font-family:'Amsi Pro Ultra';display:flex;flex:1 1 100%;justify-content:center;background:var(--secondary-color);text-transform:capitalize}.banner.svelte-1nv3py4 span.svelte-1nv3py4{color:var(--primary-color);letter-spacing:2px;font-size:2.4rem;padding-top:15px;padding-left:15px;padding-bottom:10px}.cover.svelte-1nv3py4.svelte-1nv3py4{background-image:url('/assets/images/SE-ScorecardCover-210729-D3-Desktop-Footer-1366x500.png');background-position:bottom;min-height:210px;position:relative;z-index:-1}.cover.svelte-1nv3py4 h1.svelte-1nv3py4{margin-top:130px}@media(max-width:600px){.cover.svelte-1nv3py4 h1.svelte-1nv3py4{margin-top:60px}.banner.svelte-1nv3py4 span.svelte-1nv3py4{font-size:1.5rem}}.overlay.svelte-1nv3py4.svelte-1nv3py4{background:rgba(255,255,255,0.8);width:100%;height:100%;position:absolute;top:0;left:0}.content.svelte-1nv3py4.svelte-1nv3py4{display:block}",
  map: null
};
const Methodology = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<meta name="${"title"}" content="${"Methodology | Fossil-free Fashion Scorecard | Stand.earth"}" data-svelte="svelte-bh1oxh"><meta property="${"og:title"}" content="${"Fossil-free Fashion Scorecard | Stand.earth"}" data-svelte="svelte-bh1oxh"><meta property="${"og:description"}" content="${"As one of the biggest drivers of climate pollution, fashion companies must move decisively to break their dependence on fossil fuels, spurring the rapid transition to renewable energy and fossil free fabrics we need to safeguard a livable future."}" data-svelte="svelte-bh1oxh"><meta name="${"description"}" content="${"As one of the biggest drivers of climate pollution, fashion companies must move decisively to break their dependence on fossil fuels, spurring the rapid transition to renewable energy and fossil free fabrics we need to safeguard a livable future."}" data-svelte="svelte-bh1oxh">`, ""}

${(0, import_index_b0063b0f.v)(import_Header_55e1a853.H, "Header").$$render($$result, { headerColor: "blue" }, {}, {})}

<div class="${"banner svelte-1nv3py4"}"><span class="${"svelte-1nv3py4"}">Fossil-free Fashion Scorecard</span></div>

<div class="${"cover svelte-1nv3py4"}"><div class="${"overlay svelte-1nv3py4"}"><h1 class="${"svelte-1nv3py4"}">${(0, import_index_b0063b0f.e)(import_content_25798381.c.methodology_title)}</h1></div></div>

<div class="${"content svelte-1nv3py4"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.C, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.R, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.a, "Col").$$render($$result, { sm: "12", lg: { size: 8, offset: 2 } }, {}, {
            default: () => {
              return `<!-- HTML_TAG_START -->${import_content_25798381.c.methodology_body_1}<!-- HTML_TAG_END -->`;
            }
          })}`;
        }
      })}`;
    }
  })}
</div>`;
});
module.exports = __toCommonJS(stdin_exports);
