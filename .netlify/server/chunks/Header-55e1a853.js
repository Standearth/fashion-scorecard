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
  H: () => Header
});
var import_index_b0063b0f = require("./index-b0063b0f.js");
var import_paths_396f020f = require("./paths-396f020f.js");
var import_Header_svelte_svelte_type_style_lang_ac9159bf = require("./Header.svelte_svelte_type_style_lang-ac9159bf.js");
var import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons");
const getStores = () => {
  const stores = (0, import_index_b0063b0f.l)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var logo = "/_app/assets/logo_white-b7f58cd6.svg";
const css$2 = {
  code: 'aside.svelte-1v6ziij.svelte-1v6ziij{right:-100%;display:none;position:absolute;background:#fff;color:var(--primary-color);width:100%;max-width:500px;min-width:200px;padding:40px;box-shadow:0px 0px 10px #333;transition:right 0.3s ease-in;z-index:18;overflow:hidden}aside.svelte-1v6ziij a.svelte-1v6ziij{color:var(--primary-color)}.open.svelte-1v6ziij.svelte-1v6ziij{top:0;right:0;display:block}a.svelte-1v6ziij.svelte-1v6ziij:hover{text-decoration:underline;color:var(--primary-color)}button.svelte-1v6ziij.svelte-1v6ziij{background:#305E80;color:var(--white);padding-left:20px;padding-right:20px}button.svelte-1v6ziij.svelte-1v6ziij:hover{background:var(--primary-color)}ul.svelte-1v6ziij.svelte-1v6ziij{list-style:none}ul.svelte-1v6ziij li.svelte-1v6ziij:before{content:"";border-color:transparent var(--primary-color);border-style:solid;border-width:0.35em 0 0.35em 0.45em;display:block;height:0;width:0;left:-1em;top:1em;position:relative}',
  map: null
};
const Sidebar = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$2);
  return `<aside class="${["absolute w-full h-full border-r-2 svelte-1v6ziij", open ? "open" : ""].join(" ").trim()}"><nav id="${"full-nav"}"><div id="${"menu-wrap"}"><p><a target="${"_self"}" sveltekit:prefetch href="${(0, import_index_b0063b0f.e)(import_paths_396f020f.b) + "/"}" class="${"svelte-1v6ziij"}">Home</a></p>
            <p><a target="${"_self"}" sveltekit:prefetch href="${(0, import_index_b0063b0f.e)(import_paths_396f020f.b) + "/executive-summary"}" class="${"svelte-1v6ziij"}">Executive Summary</a></p>
            <p><a target="${"_self"}" sveltekit:prefetch href="${(0, import_index_b0063b0f.e)(import_paths_396f020f.b) + "/key-findings/fashions-fossil-fuel-problem"}" class="${"svelte-1v6ziij"}">Fashion&#39;s Fossil Fuel Problem</a></p>
            <p><a target="${"_self"}" sveltekit:prefetch href="${(0, import_index_b0063b0f.e)(import_paths_396f020f.b) + "/brand-scores"}" class="${"svelte-1v6ziij"}">Brand Scores</a></p>
            <p><a target="${"_self"}" sveltekit:prefetch href="${(0, import_index_b0063b0f.e)(import_paths_396f020f.b) + "/key-findings/climate-commitments-energy-transparency"}" class="${"svelte-1v6ziij"}">Key Findings</a></p>
                <ul class="${"svelte-1v6ziij"}"><li class="${"svelte-1v6ziij"}"><a target="${"_self"}" sveltekit:prefetch href="${(0, import_index_b0063b0f.e)(import_paths_396f020f.b) + "/key-findings/climate-commitments-energy-transparency"}" class="${"svelte-1v6ziij"}">Climate Commitments and Energy Transparency</a></li>
                    <li class="${"svelte-1v6ziij"}"><a target="${"_self"}" sveltekit:prefetch href="${(0, import_index_b0063b0f.e)(import_paths_396f020f.b) + "/key-findings/renewable-energy-efficient-manufacturing"}" class="${"svelte-1v6ziij"}">Renewable &amp; Energy Efficient Manufacturing</a></li>
                    <li class="${"svelte-1v6ziij"}"><a target="${"_self"}" sveltekit:prefetch href="${(0, import_index_b0063b0f.e)(import_paths_396f020f.b) + "/key-findings/renewable-energy-advocacy"}" class="${"svelte-1v6ziij"}">Renewable Energy Advocacy</a></li>
                    <li class="${"svelte-1v6ziij"}"><a target="${"_self"}" sveltekit:prefetch href="${(0, import_index_b0063b0f.e)(import_paths_396f020f.b) + "/key-findings/low-carbon-longer-lasting-materials"}" class="${"svelte-1v6ziij"}">Low Carbon and Longer Lasting Materials</a></li>
                    <li class="${"svelte-1v6ziij"}"><a target="${"_self"}" sveltekit:prefetch href="${(0, import_index_b0063b0f.e)(import_paths_396f020f.b) + "/key-findings/greener-shipping"}" class="${"svelte-1v6ziij"}">Greener Shipping</a></li></ul>
            <p><a sveltekit:prefetch href="${(0, import_index_b0063b0f.e)(import_paths_396f020f.b) + "/methodology"}" class="${"svelte-1v6ziij"}">Methodology</a></p>
            <p><a rel="${"external"}" target="${"_new"}" href="${"https://www.stand.earth/sites/stand/files/stand-fossil-free-fashion-scorecard.pdf"}" class="${"svelte-1v6ziij"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, { icon: import_free_solid_svg_icons.faFileDownload }, {}, {})} Download PDF</a></p>
            <p><a rel="${"external"}" target="${"_new"}" href="${"https://www.stand.earth/latest/markets-vs-climate/fossil-free-fashion/new-standearth-analysis-shows-major-fashion-brands"}" class="${"svelte-1v6ziij"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, { icon: import_free_solid_svg_icons.faRss }, {}, {})} Read Press Release</a></p>
            <p><a rel="${"external"}" target="${"_new"}" href="${"https://www.stand.earth/markets-vs-climate/fossil-free-fashion"}" class="${"svelte-1v6ziij"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, { icon: import_free_solid_svg_icons.faGraduationCap }, {}, {})} Learn More</a></p>
            <p><a rel="${"external"}" target="${"_new"}" href="${"https://act.stand.earth/page/26072/petition/1?ea.tracking.id=referrals"}" class="${"svelte-1v6ziij"}"><button class="${"svelte-1v6ziij"}">Take Action</button></a></p></div></nav>
</aside>`;
});
const css$1 = {
  code: 'svg.svelte-wh37nt.svelte-wh37nt{min-height:24px;transition:transform 0.3s ease-in-out}svg.svelte-wh37nt line.svelte-wh37nt{stroke:currentColor;stroke-width:3;transition:transform 0.3s ease-in-out\n	}button.svelte-wh37nt.svelte-wh37nt{z-index:25;height:100%;margin-left:20px;position:relative;border:none;text-align:center}button.svelte-wh37nt.svelte-wh37nt:focus{box-shadow:none}.open.svelte-wh37nt svg.svelte-wh37nt{color:var(--heading-blue)}.open.svelte-wh37nt svg.svelte-wh37nt{transform:scale(0.9)\n	}.open.svelte-wh37nt #top.svelte-wh37nt{transform:translate(5px, 0px) rotate(45deg)\n	}.open.svelte-wh37nt.svelte-wh37nt:before{content:"CLOSE";position:relative;left:-10px;top:-2px;color:var(--heading-blue);font-family:var(--sans)\n    }.open.svelte-wh37nt #middle.svelte-wh37nt{opacity:0}.open.svelte-wh37nt #bottom.svelte-wh37nt{transform:translate(-12px, 8px) rotate(-45deg)\n        }',
  map: null
};
const Hamburger = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$1);
  return `<button class="${["svelte-wh37nt", open ? "open" : ""].join(" ").trim()}"><svg width="${"40"}" height="${"32"}" class="${"svelte-wh37nt"}"><line id="${"top"}" x1="${"0"}" y1="${"2"}" x2="${"32"}" y2="${"2"}" class="${"svelte-wh37nt"}"></line><line id="${"middle"}" x1="${"0"}" y1="${"12"}" x2="${"32"}" y2="${"12"}" class="${"svelte-wh37nt"}"></line><line id="${"bottom"}" x1="${"0"}" y1="${"22"}" x2="${"32"}" y2="${"22"}" class="${"svelte-wh37nt"}"></line></svg>
</button>`;
});
const css = {
  code: "header.svelte-oq9fni.svelte-oq9fni{background:var(--primary-color);color:var(--white);position:-webkit-sticky;position:sticky;top:0;width:100%;z-index:99}#yellow.svelte-oq9fni.svelte-oq9fni{background-color:#FCD455}#blue.svelte-oq9fni.svelte-oq9fni{background-color:var(--secondary-color)}.wrapper.svelte-oq9fni.svelte-oq9fni{display:flex;justify-content:space-between}.corner.svelte-oq9fni.svelte-oq9fni{width:10em}.corner.svelte-oq9fni a.svelte-oq9fni{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.svelte-oq9fni img.svelte-oq9fni{max-width:200px;float:left;padding-left:30px}nav#main-nav.svelte-oq9fni.svelte-oq9fni{display:flex;padding-right:20px;justify-content:right}nav#main-nav.svelte-oq9fni ul.svelte-oq9fni{position:relative;padding:0;margin:0;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}nav#main-nav.svelte-oq9fni li.svelte-oq9fni{height:100%}nav#main-nav.svelte-oq9fni li:nth-child(2) a.svelte-oq9fni{color:var(--primary-color);font-family:var(--sans-bold)}@media screen and (max-width:700px){nav#main-nav.svelte-oq9fni li.svelte-oq9fni:first-child{display:none}nav#main-nav.svelte-oq9fni li.svelte-oq9fni:nth-child(2){display:none}}nav#main-nav.svelte-oq9fni a.svelte-oq9fni{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--white);font-size:1rem;letter-spacing:10%;text-decoration:none;transition:color 0.2s linear;cursor:pointer}nav#main-nav.svelte-oq9fni a.svelte-oq9fni:hover{color:var(--white)}a.svelte-oq9fni.svelte-oq9fni{font-family:var(--sans-bold)}",
  map: null
};
const Header = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_b0063b0f.k)(page, (value) => $page = value);
  let open = false;
  let { headerColor = "blue" } = $$props;
  if ($$props.headerColor === void 0 && $$bindings.headerColor && headerColor !== void 0)
    $$bindings.headerColor(headerColor);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<header class="${"svelte-oq9fni"}">${(0, import_index_b0063b0f.v)(Sidebar, "Sidebar").$$render($$result, { open }, {
      open: ($$value) => {
        open = $$value;
        $$settled = false;
      }
    }, {})}
	<div class="${"wrapper svelte-oq9fni"}"><div class="${"corner svelte-oq9fni"}"><a target="${"_self"}" href="${"https://fashion.stand.earth"}" class="${"svelte-oq9fni"}"><img${(0, import_index_b0063b0f.h)("src", logo, 0)} alt="${"Stand.earth"}" class="${"svelte-oq9fni"}"></a></div>

		<nav id="${"main-nav"}" class="${"svelte-oq9fni"}"><ul class="${"svelte-oq9fni"}"><li class="${[
      "svelte-oq9fni",
      $page.url.pathname === "{base}/brand-scores" ? "active" : ""
    ].join(" ").trim()}"><a target="${"_self"}" sveltekit:prefetch href="${(0, import_index_b0063b0f.e)(import_paths_396f020f.b) + "/brand-scores"}" class="${"svelte-oq9fni"}">Brand scores</a></li>
				<li${(0, import_index_b0063b0f.h)("id", headerColor, 0)} class="${"svelte-oq9fni"}"><a rel="${"external"}" target="${"_new"}" href="${"https://act.stand.earth/page/26072/petition/1?ea.tracking.id=referrals"}" class="${"svelte-oq9fni"}">Take action</a></li>
				<li class="${["svelte-oq9fni", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}">${(0, import_index_b0063b0f.v)(Hamburger, "Hamburger").$$render($$result, { open }, {
      open: ($$value) => {
        open = $$value;
        $$settled = false;
      }
    }, {})}</li></ul></nav></div>
</header>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
module.exports = __toCommonJS(stdin_exports);
