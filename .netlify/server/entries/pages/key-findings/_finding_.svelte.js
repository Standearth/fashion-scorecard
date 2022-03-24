var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => U5Bfindingu5D,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_b0063b0f = require("../../../chunks/index-b0063b0f.js");
var import_paths_396f020f = require("../../../chunks/paths-396f020f.js");
var import_AccordionItem_f337a17f = require("../../../chunks/AccordionItem-f337a17f.js");
var import_Header_svelte_svelte_type_style_lang_ac9159bf = require("../../../chunks/Header.svelte_svelte_type_style_lang-ac9159bf.js");
var import_index_8a8c332b = require("../../../chunks/index-8a8c332b.js");
var import_Grid_5b687bb0 = require("../../../chunks/Grid-5b687bb0.js");
var import_Header_61b7b783 = require("../../../chunks/Header-61b7b783.js");
var import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons");
var import_free_brands_svg_icons = require("@fortawesome/free-brands-svg-icons");
var import_free_regular_svg_icons = require("@fortawesome/free-regular-svg-icons");
function getVerticalClass(vertical) {
  if (vertical === false) {
    return false;
  } else if (vertical === true || vertical === "xs") {
    return "flex-column";
  }
  return `flex-${vertical}-column`;
}
const Nav = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = (0, import_index_b0063b0f.b)($$props, [
    "class",
    "tabs",
    "pills",
    "vertical",
    "horizontal",
    "justified",
    "fill",
    "navbar",
    "card"
  ]);
  let { class: className = "" } = $$props;
  let { tabs = false } = $$props;
  let { pills = false } = $$props;
  let { vertical = false } = $$props;
  let { horizontal = "" } = $$props;
  let { justified = false } = $$props;
  let { fill = false } = $$props;
  let { navbar = false } = $$props;
  let { card = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0)
    $$bindings.tabs(tabs);
  if ($$props.pills === void 0 && $$bindings.pills && pills !== void 0)
    $$bindings.pills(pills);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.justified === void 0 && $$bindings.justified && justified !== void 0)
    $$bindings.justified(justified);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.navbar === void 0 && $$bindings.navbar && navbar !== void 0)
    $$bindings.navbar(navbar);
  if ($$props.card === void 0 && $$bindings.card && card !== void 0)
    $$bindings.card(card);
  classes = (0, import_Header_svelte_svelte_type_style_lang_ac9159bf.c)(className, navbar ? "navbar-nav" : "nav", horizontal ? `justify-content-${horizontal}` : false, getVerticalClass(vertical), {
    "nav-tabs": tabs,
    "card-header-tabs": card && tabs,
    "nav-pills": pills,
    "card-header-pills": card && pills,
    "nav-justified": justified,
    "nav-fill": fill
  });
  return `<ul${(0, import_index_b0063b0f.d)([(0, import_index_b0063b0f.f)($$restProps), { class: (0, import_index_b0063b0f.g)(classes) }], {})}>${slots.default ? slots.default({}) : ``}</ul>`;
});
const NavItem = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = (0, import_index_b0063b0f.b)($$props, ["class", "active"]);
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  classes = (0, import_Header_svelte_svelte_type_style_lang_ac9159bf.c)(className, "nav-item", active ? "active" : false);
  return `<li${(0, import_index_b0063b0f.d)([(0, import_index_b0063b0f.f)($$restProps), { class: (0, import_index_b0063b0f.g)(classes) }], {})}>${slots.default ? slots.default({}) : ``}</li>`;
});
const NavLink = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = (0, import_index_b0063b0f.b)($$props, ["class", "disabled", "active", "href"]);
  let { class: className = "" } = $$props;
  let { disabled = false } = $$props;
  let { active = false } = $$props;
  let { href = "#" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  classes = (0, import_Header_svelte_svelte_type_style_lang_ac9159bf.c)(className, "nav-link", { disabled, active });
  return `<a${(0, import_index_b0063b0f.d)([
    (0, import_index_b0063b0f.f)($$restProps),
    { href: (0, import_index_b0063b0f.g)(href) },
    { class: (0, import_index_b0063b0f.g)(classes) }
  ], {})}>${slots.default ? slots.default({}) : ``}</a>`;
});
const TabHeader = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_b0063b0f.b)($$props, []);
  (0, import_index_b0063b0f.s)("tabs", true);
  return `${(0, import_index_b0063b0f.v)(Nav, "Nav").$$render($$result, Object.assign($$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const TabContent = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = (0, import_index_b0063b0f.b)($$props, ["class", "pills", "vertical"]);
  const dispatch = (0, import_index_b0063b0f.i)();
  let { class: className = "" } = $$props;
  let { pills = false } = $$props;
  let { vertical = false } = $$props;
  const activeTabId = (0, import_index_8a8c332b.w)();
  (0, import_index_b0063b0f.s)("tabContent", {
    activeTabId,
    setActiveTab: (tabId) => {
      activeTabId.set(tabId);
      dispatch("tab", tabId);
    }
  });
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.pills === void 0 && $$bindings.pills && pills !== void 0)
    $$bindings.pills(pills);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  classes = (0, import_Header_svelte_svelte_type_style_lang_ac9159bf.c)("tab-content", className, { "d-flex align-items-start": vertical });
  return `<div${(0, import_index_b0063b0f.d)([(0, import_index_b0063b0f.f)($$restProps), { class: (0, import_index_b0063b0f.g)(classes) }], {})}>${(0, import_index_b0063b0f.v)(TabHeader, "TabHeader").$$render($$result, {
    class: (0, import_Header_svelte_svelte_type_style_lang_ac9159bf.c)({ "me-3": vertical }),
    pills,
    tabs: !pills,
    vertical
  }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}
  ${slots.default ? slots.default({}) : ``}</div>`;
});
const TabPane = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = (0, import_index_b0063b0f.b)($$props, ["class", "active", "disabled", "tab", "tabId"]);
  let $activeTabId, $$unsubscribe_activeTabId;
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  let { disabled = false } = $$props;
  let { tab = void 0 } = $$props;
  let { tabId = void 0 } = $$props;
  const tabs = (0, import_index_b0063b0f.l)("tabs");
  const { activeTabId, setActiveTab } = (0, import_index_b0063b0f.l)("tabContent");
  $$unsubscribe_activeTabId = (0, import_index_b0063b0f.k)(activeTabId, (value) => $activeTabId = value);
  let tabOpen = active;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.tab === void 0 && $$bindings.tab && tab !== void 0)
    $$bindings.tab(tab);
  if ($$props.tabId === void 0 && $$bindings.tabId && tabId !== void 0)
    $$bindings.tabId(tabId);
  {
    if ($activeTabId !== void 0)
      tabOpen = $activeTabId === tabId;
  }
  classes = (0, import_Header_svelte_svelte_type_style_lang_ac9159bf.c)("tab-pane", className, { active: tabOpen, show: tabOpen });
  $$unsubscribe_activeTabId();
  return `${tabs ? `${(0, import_index_b0063b0f.v)(NavItem, "NavItem").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_b0063b0f.v)(NavLink, "NavLink").$$render($$result, { active: tabOpen, disabled }, {}, {
        default: () => {
          return `${tab ? `${(0, import_index_b0063b0f.e)(tab)}` : ``}
      ${slots.tab ? slots.tab({}) : ``}`;
        }
      })}`;
    }
  })}` : `<div${(0, import_index_b0063b0f.d)([(0, import_index_b0063b0f.f)($$restProps), { class: (0, import_index_b0063b0f.g)(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`}`;
});
var table = [
  {
    c: "Arc\u2019teryx",
    i: "65%",
    d: "Per unit",
    a: "30%<span class=footnote><sup>2</sup></span>",
    "leave empty\r": "\r"
  },
  {
    c: "H&M",
    i: "59%",
    d: "Per piece",
    a: "41%",
    "leave empty\r": "\r"
  },
  {
    c: "Kering",
    i: "46.50%",
    d: "Per unit",
    a: "13.2%<span class=footnote><sup>3</sup></span>",
    "leave empty\r": "\r"
  },
  {
    c: "Lululemon",
    i: "60%",
    d: "Per unit of added value",
    a: "20%",
    "leave empty\r": "\r"
  },
  {
    c: "PUMA",
    i: "60%",
    d: "Per million Euros in sales",
    a: "27%",
    "leave empty\r": ""
  }
];
var _finding__svelte_svelte_type_style_lang = "";
const css = {
  code: ".banner.svelte-1lyc321.svelte-1lyc321{font-family:'Amsi Pro Ultra';display:flex;flex:1 1 100%;justify-content:center;background:var(--secondary-color);text-transform:capitalize}tbody.svelte-1lyc321.svelte-1lyc321{font-family:var(--sans)}.banner.svelte-1lyc321 span.svelte-1lyc321{color:var(--primary-color);letter-spacing:2px;font-size:2.4rem;padding-top:15px;padding-left:15px;padding-bottom:10px}.cover.svelte-1lyc321.svelte-1lyc321{background-image:url('/assets/images/SE-ScorecardCover-210729-D3-Desktop-Footer-1366x500.png');background-position:bottom;min-height:210px;position:relative;z-index:-1}.cover.svelte-1lyc321 h1.svelte-1lyc321{margin-top:130px}@media(max-width:600px){.cover.svelte-1lyc321 h1.svelte-1lyc321{margin-top:60px}.banner.svelte-1lyc321 span.svelte-1lyc321{font-size:1.5rem}}.overlay.svelte-1lyc321.svelte-1lyc321{background:rgba(255,255,255,0.8);width:100%;height:100%;position:absolute;top:0;left:0}.content.svelte-1lyc321.svelte-1lyc321{display:block}.content.svelte-1lyc321 img.svelte-1lyc321{padding-top:20px;padding-bottom:20px}#grid-mix.svelte-1lyc321.svelte-1lyc321{text-align:center;padding-top:10px;padding-bottom:30px}.bottomNav.svelte-1lyc321.svelte-1lyc321{margin-top:50px;margin-bottom:50px;display:table}.bottomNav.svelte-1lyc321 a.svelte-1lyc321{color:var(--primary-color)}.bottomNavItem.svelte-1lyc321.svelte-1lyc321{padding:20px;background:#DEEBF0;min-width:270px;height:60px;display:table-cell;vertical-align:middle}#chevron-left.svelte-1lyc321.svelte-1lyc321{width:20px;height:100%;text-align:center;float:left}#chevron-right.svelte-1lyc321.svelte-1lyc321{width:20px;text-align:center;height:100%;float:right}#ambition-graphic.svelte-1lyc321.svelte-1lyc321{padding:10px;margin-bottom:20px;text-align:center}#ambition-graphic.svelte-1lyc321 h4.svelte-1lyc321{padding-bottom:20px;text-align:left}#ambition-graphic.svelte-1lyc321 p.svelte-1lyc321{padding-top:10px;color:var(--heading-blue)}",
  map: null
};
async function load({ params, fetch }) {
  const slug = params.finding;
  const body = await fetch(`${import_paths_396f020f.b}/key-findings/${slug}.json`).then((r) => r.json());
  const content = body.content;
  return { props: { content, slug } };
}
const U5Bfindingu5D = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  let { slug } = $$props;
  let countries = ["Bangladesh", "Cambodia", "China", "Indonesia", "Taiwan", "Turkey", "Vietnam"];
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  $$result.css.add(css);
  return `${$$result.head += `${slug == "fashions-fossil-fuel-problem" ? `${$$result.title = `<title>${(0, import_index_b0063b0f.e)(content.kf1_title)} | Fossil-free Fashion Scorecard | Stand.earth</title>`, ""}
			<meta name="${"title"}" content="${(0, import_index_b0063b0f.e)(content.kf1_title) + " | Fossil-free Fashion Scorecard | Stand.earth"}" data-svelte="svelte-1jvtzlh">
			<meta property="${"og:title"}" content="${(0, import_index_b0063b0f.e)(content.kf1_title) + " | Fossil-free Fashion Scorecard"}" data-svelte="svelte-1jvtzlh">` : `${slug == "climate-commitments-energy-transparency" ? `${$$result.title = `<title>${(0, import_index_b0063b0f.e)(content.kf2_title)} | Fossil-free Fashion Scorecard | Stand.earth</title>`, ""}
			<meta name="${"title"}" content="${(0, import_index_b0063b0f.e)(content.kf2_title) + " | Fossil-free Fashion Scorecard | Stand.earth"}" data-svelte="svelte-1jvtzlh">
			<meta property="${"og:title"}" content="${(0, import_index_b0063b0f.e)(content.kf2_title) + " | Fossil-free Fashion Scorecard"}" data-svelte="svelte-1jvtzlh">` : `${slug == "renewable-energy-efficient-manufacturing" ? `${$$result.title = `<title>${(0, import_index_b0063b0f.e)(content.kf3_title)} | Fossil-free Fashion Scorecard | Stand.earth</title>`, ""}
			<meta name="${"title"}" content="${(0, import_index_b0063b0f.e)(content.kf3_title) + " | Fossil-free Fashion Scorecard | Stand.earth"}" data-svelte="svelte-1jvtzlh">
			<meta property="${"og:title"}" content="${(0, import_index_b0063b0f.e)(content.kf3_title) + " | Fossil-free Fashion Scorecard"}" data-svelte="svelte-1jvtzlh">` : `${slug == "renewable-energy-advocacy" ? `${$$result.title = `<title>${(0, import_index_b0063b0f.e)(content.kf4_title)} | Fossil-free Fashion Scorecard | Stand.earth</title>`, ""}
			<meta name="${"title"}" content="${(0, import_index_b0063b0f.e)(content.kf4_title) + " | Fossil-free Fashion Scorecard | Stand.earth"}" data-svelte="svelte-1jvtzlh">
			<meta property="${"og:title"}" content="${(0, import_index_b0063b0f.e)(content.kf4_title) + " | Fossil-free Fashion Scorecard"}" data-svelte="svelte-1jvtzlh">` : `${slug == "low-carbon-longer-lasting-materials" ? `${$$result.title = `<title>${(0, import_index_b0063b0f.e)(content.kf5_title)} | Fossil-free Fashion Scorecard | Stand.earth</title>`, ""}
			<meta name="${"title"}" content="${(0, import_index_b0063b0f.e)(content.kf5_title) + " | Fossil-free Fashion Scorecard | Stand.earth"}" data-svelte="svelte-1jvtzlh">
			<meta property="${"og:title"}" content="${(0, import_index_b0063b0f.e)(content.kf5_title) + " | Fossil-free Fashion Scorecard"}" data-svelte="svelte-1jvtzlh">` : `${slug == "greener-shipping" ? `${$$result.title = `<title>${(0, import_index_b0063b0f.e)(content.kf6_title)} | Fossil-free Fashion Scorecard | Stand.earth</title>`, ""}
			<meta name="${"title"}" content="${(0, import_index_b0063b0f.e)(content.kf6_title) + " | Fossil-free Fashion Scorecard | Stand.earth"}" data-svelte="svelte-1jvtzlh">
			<meta property="${"og:title"}" content="${(0, import_index_b0063b0f.e)(content.kf6_title) + " | Fossil-free Fashion Scorecard"}" data-svelte="svelte-1jvtzlh">` : `${$$result.title = `<title>404 Page not found</title>`, ""}`}`}`}`}`}`}<meta property="${"og:url"}" content="${"https://fashion.stand.earth/key-findings/" + (0, import_index_b0063b0f.e)(slug)}" data-svelte="svelte-1jvtzlh"><meta property="${"og:description"}" content="${"As one of the biggest drivers of climate pollution, fashion companies must move decisively to break their dependence on fossil fuels, spurring the rapid transition to renewable energy and fossil free fabrics we need to safeguard a livable future."}" data-svelte="svelte-1jvtzlh"><meta name="${"description"}" content="${"As one of the biggest drivers of climate pollution, fashion companies must move decisively to break their dependence on fossil fuels, spurring the rapid transition to renewable energy and fossil free fabrics we need to safeguard a livable future."}" data-svelte="svelte-1jvtzlh">`, ""}



${(0, import_index_b0063b0f.v)(import_Header_61b7b783.H, "Header").$$render($$result, { headerColor: "blue" }, {}, {})}

<div class="${"banner svelte-1lyc321"}"><span class="${"svelte-1lyc321"}">Fossil-free Fashion Scorecard</span></div>

<div class="${"cover svelte-1lyc321"}"><div class="${"overlay svelte-1lyc321"}">${slug == "fashions-fossil-fuel-problem" ? `<h1 class="${"svelte-1lyc321"}">${(0, import_index_b0063b0f.e)(content.kf1_title)}</h1>` : `${slug == "climate-commitments-energy-transparency" ? `<h1 class="${"svelte-1lyc321"}">${(0, import_index_b0063b0f.e)(content.kf2_title)}</h1>` : `${slug == "renewable-energy-efficient-manufacturing" ? `<h1 class="${"svelte-1lyc321"}">${(0, import_index_b0063b0f.e)(content.kf3_title)}</h1>` : `${slug == "renewable-energy-advocacy" ? `<h1 class="${"svelte-1lyc321"}">${(0, import_index_b0063b0f.e)(content.kf4_title)}</h1>` : `${slug == "low-carbon-longer-lasting-materials" ? `<h1 class="${"svelte-1lyc321"}">${(0, import_index_b0063b0f.e)(content.kf5_title)}</h1>` : `${slug == "greener-shipping" ? `<h1 class="${"svelte-1lyc321"}">${(0, import_index_b0063b0f.e)(content.kf6_title)}</h1>` : `<h1 class="${"svelte-1lyc321"}">404 Page not found</h1>`}`}`}`}`}`}</div></div>

<div class="${"content svelte-1lyc321"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.C, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.R, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.a, "Col").$$render($$result, { sm: "12", lg: { size: 8, offset: 2 } }, {}, {
            default: () => {
              return `${slug == "fashions-fossil-fuel-problem" ? `<!-- HTML_TAG_START -->${content.kf1_intro}<!-- HTML_TAG_END -->
					<h3 style="${"text-align:center;"}">Fashion&#39;s fossil fuel problem</h3>
					<img alt="${"iceberg"}" src="${"/assets/images/iceberg-graphic@2x.png"}" class="${"svelte-1lyc321"}">
					<!-- HTML_TAG_START -->${content.kf1_body_1}<!-- HTML_TAG_END -->
					<div id="${"grid-mix"}" class="${"svelte-1lyc321"}"><h3>Grid mix by country</h3>
						${(0, import_index_b0063b0f.v)(TabContent, "TabContent").$$render($$result, {}, {}, {
                default: () => {
                  return `${(0, import_index_b0063b0f.p)(countries, (country) => {
                    return `${country == "China" ? `${(0, import_index_b0063b0f.v)(TabPane, "TabPane").$$render($$result, {
                      tabId: country,
                      tab: country,
                      active: true
                    }, {}, {
                      default: () => {
                        return `<img alt="${"grid mix in " + (0, import_index_b0063b0f.e)(country)}" src="${"/assets/images/charts/" + (0, import_index_b0063b0f.e)(country) + ".png"}" class="${"svelte-1lyc321"}">
									`;
                      }
                    })}` : `${(0, import_index_b0063b0f.v)(TabPane, "TabPane").$$render($$result, { tabId: country, tab: country }, {}, {
                      default: () => {
                        return `<img alt="${"grid mix in " + (0, import_index_b0063b0f.e)(country)}" src="${"/assets/images/charts/" + (0, import_index_b0063b0f.e)(country) + ".png"}" class="${"svelte-1lyc321"}">
									`;
                      }
                    })}`}`;
                  })}`;
                }
              })}</div>
					<!-- HTML_TAG_START -->${content.kf1_body_2}<!-- HTML_TAG_END -->
					<h3 style="${"text-align:center;"}">Fracked fashion&#39;s supply chain</h3>
					<img alt="${"fracking"}" src="${"/assets/images/fracking.png"}" class="${"svelte-1lyc321"}">
					<!-- HTML_TAG_START -->${content.kf1_body_3}<!-- HTML_TAG_END -->
					<div class="${"notes"}">${(0, import_index_b0063b0f.v)(import_AccordionItem_f337a17f.A, "Accordion").$$render($$result, { flush: true }, {}, {
                default: () => {
                  return `${(0, import_index_b0063b0f.v)(import_AccordionItem_f337a17f.a, "AccordionItem").$$render($$result, {}, {}, {
                    header: () => {
                      return `<div class="${"notes-header"}" slot="${"header"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.R, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.a, "Col").$$render($$result, { sm: "12", lg: "12" }, {}, {
                            default: () => {
                              return `<h4>Notes</h4>`;
                            }
                          })}`;
                        }
                      })}</div>`;
                    },
                    default: () => {
                      return `<div class="${"notes-body"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.R, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.a, "Col").$$render($$result, { sm: "12" }, {}, {
                            default: () => {
                              return `<!-- HTML_TAG_START -->${content.kf1_notes}<!-- HTML_TAG_END -->`;
                            }
                          })}`;
                        }
                      })}</div>`;
                    }
                  })}`;
                }
              })}</div>` : `${slug == "climate-commitments-energy-transparency" ? `<!-- HTML_TAG_START -->${content.kf2_body_1}<!-- HTML_TAG_END -->
					
					<table><thead><tr><th>Company</th>
								<th>Intensity-Based Commitment</th>
								<th>Description</th>
								<th>Absolute Reduction Equivalence</th></tr></thead>
						<tbody class="${"svelte-1lyc321"}">${(0, import_index_b0063b0f.p)(table, ({ c, i, d, a }) => {
                return `<tr><td>${(0, import_index_b0063b0f.e)(c)}</td>
									<td>${(0, import_index_b0063b0f.e)(i)}</td>
									<td>${(0, import_index_b0063b0f.e)(d)}</td>
									<td><!-- HTML_TAG_START -->${a}<!-- HTML_TAG_END --></td>
								</tr>`;
              })}</tbody></table>
					<!-- HTML_TAG_START -->${content.kf2_body_2}<!-- HTML_TAG_END -->
					<div id="${"ambition-graphic"}" class="${"svelte-1lyc321"}"><h4 class="${"svelte-1lyc321"}">Climate ambition of companies</h4>
						<p class="${"svelte-1lyc321"}">Associated global warming pathway</p>
						<img src="${"/assets/images/climate-ambition.png"}" alt="${"climate ambition of fashion companies"}" class="${"svelte-1lyc321"}">
						<p class="${"svelte-1lyc321"}">2030 absolute scope 3 GHG emissions reduction target</p></div>
					<!-- HTML_TAG_START -->${content.kf2_body_3}<!-- HTML_TAG_END -->
					<div class="${"notes"}">${(0, import_index_b0063b0f.v)(import_AccordionItem_f337a17f.A, "Accordion").$$render($$result, { flush: true }, {}, {
                default: () => {
                  return `${(0, import_index_b0063b0f.v)(import_AccordionItem_f337a17f.a, "AccordionItem").$$render($$result, {}, {}, {
                    header: () => {
                      return `<div class="${"notes-header"}" slot="${"header"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.R, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.a, "Col").$$render($$result, { sm: "12", lg: "12" }, {}, {
                            default: () => {
                              return `<h4>Notes</h4>`;
                            }
                          })}`;
                        }
                      })}</div>`;
                    },
                    default: () => {
                      return `<div class="${"notes-body"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.R, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.a, "Col").$$render($$result, { sm: "12" }, {}, {
                            default: () => {
                              return `<!-- HTML_TAG_START -->${content.kf2_notes}<!-- HTML_TAG_END -->`;
                            }
                          })}`;
                        }
                      })}</div>`;
                    }
                  })}`;
                }
              })}</div>` : `${slug == "renewable-energy-efficient-manufacturing" ? `<!-- HTML_TAG_START -->${content.kf3_body_1}<!-- HTML_TAG_END -->
					<div class="${"notes"}">${(0, import_index_b0063b0f.v)(import_AccordionItem_f337a17f.A, "Accordion").$$render($$result, { flush: true }, {}, {
                default: () => {
                  return `${(0, import_index_b0063b0f.v)(import_AccordionItem_f337a17f.a, "AccordionItem").$$render($$result, {}, {}, {
                    header: () => {
                      return `<div class="${"notes-header"}" slot="${"header"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.R, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.a, "Col").$$render($$result, { sm: "12", lg: "12" }, {}, {
                            default: () => {
                              return `<h4>Notes</h4>`;
                            }
                          })}`;
                        }
                      })}</div>`;
                    },
                    default: () => {
                      return `<div class="${"notes-body"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.R, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.a, "Col").$$render($$result, { sm: "12" }, {}, {
                            default: () => {
                              return `<!-- HTML_TAG_START -->${content.kf3_notes}<!-- HTML_TAG_END -->`;
                            }
                          })}`;
                        }
                      })}</div>`;
                    }
                  })}`;
                }
              })}</div>` : `${slug == "renewable-energy-advocacy" ? `<!-- HTML_TAG_START -->${content.kf4_body_1}<!-- HTML_TAG_END -->
					<div class="${"notes"}">${(0, import_index_b0063b0f.v)(import_AccordionItem_f337a17f.A, "Accordion").$$render($$result, { flush: true }, {}, {
                default: () => {
                  return `${(0, import_index_b0063b0f.v)(import_AccordionItem_f337a17f.a, "AccordionItem").$$render($$result, {}, {}, {
                    header: () => {
                      return `<div class="${"notes-header"}" slot="${"header"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.R, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.a, "Col").$$render($$result, { sm: "12", lg: "12" }, {}, {
                            default: () => {
                              return `<h4>Notes</h4>`;
                            }
                          })}`;
                        }
                      })}</div>`;
                    },
                    default: () => {
                      return `<div class="${"notes-body"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.R, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.a, "Col").$$render($$result, { sm: "12" }, {}, {
                            default: () => {
                              return `<!-- HTML_TAG_START -->${content.kf4_notes}<!-- HTML_TAG_END -->`;
                            }
                          })}`;
                        }
                      })}</div>`;
                    }
                  })}`;
                }
              })}</div>` : `${slug == "low-carbon-longer-lasting-materials" ? `<!-- HTML_TAG_START -->${content.kf5_body_1}<!-- HTML_TAG_END -->
						<div class="${"notes"}">${(0, import_index_b0063b0f.v)(import_AccordionItem_f337a17f.A, "Accordion").$$render($$result, { flush: true }, {}, {
                default: () => {
                  return `${(0, import_index_b0063b0f.v)(import_AccordionItem_f337a17f.a, "AccordionItem").$$render($$result, {}, {}, {
                    header: () => {
                      return `<div class="${"notes-header"}" slot="${"header"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.R, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.a, "Col").$$render($$result, { sm: "12", lg: "12" }, {}, {
                            default: () => {
                              return `<h4>Notes</h4>`;
                            }
                          })}`;
                        }
                      })}</div>`;
                    },
                    default: () => {
                      return `<div class="${"notes-body"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.R, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.a, "Col").$$render($$result, { sm: "12" }, {}, {
                            default: () => {
                              return `<!-- HTML_TAG_START -->${content.kf5_notes}<!-- HTML_TAG_END -->`;
                            }
                          })}`;
                        }
                      })}</div>`;
                    }
                  })}`;
                }
              })}</div>` : `${slug == "greener-shipping" ? `<!-- HTML_TAG_START -->${content.kf6_body_1}<!-- HTML_TAG_END -->` : ``}`}`}`}`}`}
				<div class="${"bottomNav svelte-1lyc321"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.C, "Container").$$render($$result, {}, {}, {
                default: () => {
                  return `${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.R, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.a, "Col").$$render($$result, { sm: "12", lg: "6" }, {}, {
                        default: () => {
                          return `<div class="${"bottomNavItem svelte-1lyc321"}"><div id="${"chevron-left"}" class="${"svelte-1lyc321"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, { icon: import_free_solid_svg_icons.faArrowLeft, size: "1x" }, {}, {})}</div>
									${slug == "fashions-fossil-fuel-problem" ? `<a target="${"_self"}" href="${"/executive-summary"}" class="${"svelte-1lyc321"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, { icon: import_free_solid_svg_icons.faClipboardList, size: "1x" }, {}, {})} Previous section: <strong>Executive Summary</strong></a>` : `${slug == "climate-commitments-energy-transparency" ? `<a target="${"_self"}" href="${"/key-findings/fashions-fossil-fuel-problem"}" class="${"svelte-1lyc321"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, { icon: import_free_solid_svg_icons.faClipboardList, size: "1x" }, {}, {})} Previous section: <strong>${(0, import_index_b0063b0f.e)(content.kf1_title)}</strong></a>` : `${slug == "renewable-energy-efficient-manufacturing" ? `<a target="${"_self"}" href="${"/key-findings/climate-commitments-energy-transparency"}" class="${"svelte-1lyc321"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, { icon: import_free_solid_svg_icons.faClipboardList, size: "1x" }, {}, {})} Previous section: <strong>${(0, import_index_b0063b0f.e)(content.kf2_title)}</strong></a>` : `${slug == "renewable-energy-advocacy" ? `<a target="${"_self"}" href="${"/key-findings/renewable-energy-efficient-manufacturing"}" class="${"svelte-1lyc321"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, { icon: import_free_solid_svg_icons.faClipboardList, size: "1x" }, {}, {})} Previous section: <strong>${(0, import_index_b0063b0f.e)(content.kf3_title)}</strong></a>` : `${slug == "low-carbon-longer-lasting-materials" ? `<a target="${"_self"}" href="${"/key-findings/renewable-energy-advocacy"}" class="${"svelte-1lyc321"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, { icon: import_free_solid_svg_icons.faClipboardList, size: "1x" }, {}, {})} Previous section: <strong>${(0, import_index_b0063b0f.e)(content.kf4_title)}</strong></a>` : `${slug == "greener-shipping" ? `<a target="${"_self"}" href="${"/key-findings/low-carbon-longer-lasting-materials"}" class="${"svelte-1lyc321"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, { icon: import_free_solid_svg_icons.faClipboardList, size: "1x" }, {}, {})} Previous section: <strong>${(0, import_index_b0063b0f.e)(content.kf5_title)}</strong></a>` : ``}`}`}`}`}`}</div>`;
                        }
                      })}
							${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.a, "Col").$$render($$result, { sm: "12", lg: "6" }, {}, {
                        default: () => {
                          return `<div class="${"bottomNavItem svelte-1lyc321"}"><div id="${"chevron-right"}" class="${"svelte-1lyc321"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, { icon: import_free_solid_svg_icons.faArrowRight, size: "1x" }, {}, {})}</div>
									${slug == "fashions-fossil-fuel-problem" ? `<a target="${"_self"}" href="${"/key-findings/climate-commitments-energy-transparency"}" class="${"svelte-1lyc321"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, { icon: import_free_solid_svg_icons.faClipboardList, size: "1x" }, {}, {})} Next section: <strong>${(0, import_index_b0063b0f.e)(content.kf2_title)}</strong></a>` : `${slug == "climate-commitments-energy-transparency" ? `<a target="${"_self"}" href="${"/key-findings/renewable-energy-efficient-manufacturing"}" class="${"svelte-1lyc321"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, { icon: import_free_solid_svg_icons.faClipboardList, size: "1x" }, {}, {})} Next section: <strong>${(0, import_index_b0063b0f.e)(content.kf3_title)}</strong></a>` : `${slug == "renewable-energy-efficient-manufacturing" ? `<a target="${"_self"}" href="${"/key-findings/renewable-energy-advocacy"}" class="${"svelte-1lyc321"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, { icon: import_free_solid_svg_icons.faClipboardList, size: "1x" }, {}, {})} Next section: <strong>${(0, import_index_b0063b0f.e)(content.kf4_title)}</strong></a>` : `${slug == "renewable-energy-advocacy" ? `<a target="${"_self"}" href="${"/key-findings/low-carbon-longer-lasting-materials"}" class="${"svelte-1lyc321"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, { icon: import_free_solid_svg_icons.faClipboardList, size: "1x" }, {}, {})} Next section: <strong>${(0, import_index_b0063b0f.e)(content.kf5_title)}</strong></a>` : `${slug == "low-carbon-longer-lasting-materials" ? `<a target="${"_self"}" href="${"/key-findings/greener-shipping"}" class="${"svelte-1lyc321"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, { icon: import_free_solid_svg_icons.faClipboardList, size: "1x" }, {}, {})} Next section: <strong>${(0, import_index_b0063b0f.e)(content.kf6_title)}</strong></a>` : `${slug == "greener-shipping" ? `<a href="${"/methodology"}" class="${"svelte-1lyc321"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, { icon: import_free_solid_svg_icons.faClipboardList, size: "1x" }, {}, {})} Next section: <strong>${(0, import_index_b0063b0f.e)(content.methodology_title)}</strong></a>` : ``}`}`}`}`}`}</div>`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>

${slug == "climate-commitments-energy-transparency" ? `<div class="${"section section-4"}">
		${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.C, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div id="${"grid"}">${(0, import_index_b0063b0f.v)(import_Grid_5b687bb0.G, "Grid").$$render($$result, { sort: "bic1", mode: "related" }, {}, {})}</div>`;
    }
  })}</div>` : `${slug == "renewable-energy-efficient-manufacturing" ? `<div class="${"section section-4"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.C, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div id="${"grid"}">${(0, import_index_b0063b0f.v)(import_Grid_5b687bb0.G, "Grid").$$render($$result, { sort: "bic2", mode: "related" }, {}, {})}</div>`;
    }
  })}</div>` : `${slug == "renewable-energy-advocacy" ? `<div class="${"section section-4"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.C, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div id="${"grid"}">${(0, import_index_b0063b0f.v)(import_Grid_5b687bb0.G, "Grid").$$render($$result, { sort: "bic5", mode: "related" }, {}, {})}</div>`;
    }
  })}</div>` : `${slug == "low-carbon-longer-lasting-materials" ? `<div class="${"section section-4"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.C, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div id="${"grid"}">${(0, import_index_b0063b0f.v)(import_Grid_5b687bb0.G, "Grid").$$render($$result, { sort: "bic3", mode: "related" }, {}, {})}</div>`;
    }
  })}</div>` : `${slug == "greener-shipping" ? `<div class="${"section section-4"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.C, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div id="${"grid"}">${(0, import_index_b0063b0f.v)(import_Grid_5b687bb0.G, "Grid").$$render($$result, { sort: "bic4", mode: "related" }, {}, {})}</div>`;
    }
  })}</div>` : ``}`}`}`}`}`;
});
