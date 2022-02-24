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
  default: () => _layout
});
var import_index_b0063b0f = require("../../chunks/index-b0063b0f.js");
var import_index_8a8c332b = require("../../chunks/index-8a8c332b.js");
function loader(urls, test2, callback) {
  let remaining = urls.length;
  function maybeCallback() {
    remaining = --remaining;
    if (remaining < 1) {
      callback();
    }
  }
  if (!test2()) {
    urls.forEach(({ type, url, options = { async: true, defer: true } }) => {
      const isScript = type === "script";
      const tag = document.createElement(isScript ? "script" : "link");
      if (isScript) {
        tag.src = url;
        tag.async = options.async;
        tag.defer = options.defer;
      } else {
        tag.rel = "stylesheet";
        tag.href = url;
      }
      tag.onload = maybeCallback;
      document.body.appendChild(tag);
    });
  } else {
    callback();
  }
}
const gaStore = (0, import_index_8a8c332b.w)([]);
function test() {
  return Boolean(window.dataLayer).valueOf() && Array.isArray(window.dataLayer);
}
function gtag() {
  window.dataLayer.push(arguments);
}
const GoogleAnalytics = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let { properties } = $$props;
  let { configurations = {} } = $$props;
  let { enabled = true } = $$props;
  function init() {
    const mainProperty = properties[0];
    loader([
      {
        type: "script",
        url: `//www.googletagmanager.com/gtag/js?id=${mainProperty}`
      }
    ], test, callback);
  }
  function callback() {
    window.dataLayer = window.dataLayer || [];
    gtag("js", new Date());
    properties.forEach((p) => {
      gtag("config", p, configurations[p] || {});
    });
    return gaStore.subscribe((queue) => {
      let next = queue.length && queue.shift();
      while (next) {
        const { event, data } = next;
        gtag("event", event, data);
        next = queue.shift();
      }
    });
  }
  if ($$props.properties === void 0 && $$bindings.properties && properties !== void 0)
    $$bindings.properties(properties);
  if ($$props.configurations === void 0 && $$bindings.configurations && configurations !== void 0)
    $$bindings.configurations(configurations);
  if ($$props.enabled === void 0 && $$bindings.enabled && enabled !== void 0)
    $$bindings.enabled(enabled);
  if ($$props.init === void 0 && $$bindings.init && init !== void 0)
    $$bindings.init(init);
  return ``;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1spfkze.svelte-1spfkze{flex:1;display:flex;flex-direction:column;width:100%;margin:0 auto;box-sizing:border-box}#form-wrap.svelte-1spfkze.svelte-1spfkze{float:none;width:100%;clear:both;position:relative;min-height:365px;overflow:hidden;display:block}#form-wrap.svelte-1spfkze .inner_wrapper.svelte-1spfkze{position:absolute;top:0;left:0;width:100%;height:100%}@media(max-width: 641px){#form-wrap.svelte-1spfkze.svelte-1spfkze{min-height:550px !important;clear:both}}@media screen and (min-width:642px) and (max-width: 992px){#form-wrap.svelte-1spfkze.svelte-1spfkze{min-height:408px !important;clear:both}}footer.svelte-1spfkze.svelte-1spfkze{display:flex;background:var(--primary-color);flex-direction:column;justify-content:center;align-items:center;padding-left:20px;padding-right:20px}footer.svelte-1spfkze p.svelte-1spfkze{color:var(--white)}footer.svelte-1spfkze a.svelte-1spfkze{text-decoration:underline;color:var(--white)}footer.svelte-1spfkze a.svelte-1spfkze:hover{text-decoration:underline;color:var(--secondary-color)}",
  map: null
};
const _layout = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<meta property="${"og:image"}" content="${"https://fashion.stand.earth/assets/images/SE-ScorecardCover-210729-D3-Desktop-Header-1366x675.png"}" data-svelte="svelte-inauxo"><link rel="${"canonical"}" href="${"https://fashion.stand.earth"}" data-svelte="svelte-inauxo"><link rel="${"image_src"}" href="${"https://fashion.stand.earth/assets/images/SE-ScorecardCover-210729-D3-Desktop-Header-1366x675.png"}" data-svelte="svelte-inauxo"><link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"}" data-svelte="svelte-inauxo"><link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"}" data-svelte="svelte-inauxo">`, ""}



${(0, import_index_b0063b0f.v)(GoogleAnalytics, "GoogleAnalytics").$$render($$result, { properties: ["G-8C7YDS4311"] }, {}, {})}

<main class="${"svelte-1spfkze"}">${slots.default ? slots.default({}) : ``}</main>

<div id="${"form-wrap"}" class="${"svelte-1spfkze"}"><iframe title="${"action_form"}" src="${"https://act.stand.earth/page/32295/data/1"}" frameborder="${"0"}" class="${"inner_wrapper svelte-1spfkze"}"></iframe></div>
<footer class="${"svelte-1spfkze"}"><p class="${"svelte-1spfkze"}">\xA9 Stand.earth  |  Media inquiries: <a href="${"mailto:media@stand.earth"}" class="${"svelte-1spfkze"}">media@stand.earth</a> |  Design: Erika Rathje / Illustration: Cheryl Loh</p>
</footer>`;
});
module.exports = __toCommonJS(stdin_exports);
