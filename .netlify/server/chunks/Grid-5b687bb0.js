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
  G: () => Grid,
  S: () => Spinner,
  a: () => Grade,
  s: () => social
});
var import_index_b0063b0f = require("./index-b0063b0f.js");
var import_Header_svelte_svelte_type_style_lang_ac9159bf = require("./Header.svelte_svelte_type_style_lang-ac9159bf.js");
var import_free_brands_svg_icons = require("@fortawesome/free-brands-svg-icons");
var import_free_regular_svg_icons = require("@fortawesome/free-regular-svg-icons");
var import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons");
var Grade_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".overall.svelte-vqdhsl.svelte-vqdhsl{height:145px;width:85px;padding:0px;text-align:center;position:relative}.arrow-down.svelte-vqdhsl.svelte-vqdhsl{width:0;height:0;border-left:40px solid transparent;border-right:40px solid transparent;z-index:var(--z-top);border-bottom:15px solid var(--white);position:absolute;bottom:0}.overall.svelte-vqdhsl div.svelte-vqdhsl{font-size:54.1px;padding-top:40px;font-family:var(--sans-bold)}.criteria.svelte-vqdhsl.svelte-vqdhsl{font-family:var(--sans-bold);font-size:32px;line-height:44px;font-weight:bold;color:rgb(13,13,13);border-radius:50%;text-align:center;width:50px;height:50px}.criteria.svelte-vqdhsl div.svelte-vqdhsl{padding-top:2px}.grid.svelte-vqdhsl.svelte-vqdhsl{font-family:var(--sans-bold);font-weight:900;font-size:24px;line-height:34px;color:rgb(13,13,13);border-radius:50%;text-align:center;margin:auto;width:38px;height:38px}.grid.svelte-vqdhsl div.svelte-vqdhsl{padding-top:2px}.grade-A.svelte-vqdhsl.svelte-vqdhsl{background:rgb(44,201,17)\n   }.grade-B.svelte-vqdhsl.svelte-vqdhsl{background:rgb(204,203,47)\n   }.grade-C.svelte-vqdhsl.svelte-vqdhsl{background:rgb(239,194,6)\n   }.grade-D.svelte-vqdhsl.svelte-vqdhsl{background:rgb(237,138,7)\n   }.grade-E.svelte-vqdhsl.svelte-vqdhsl{background:rgb(237,78,7)\n   }.grade-F.svelte-vqdhsl.svelte-vqdhsl{background:rgb(189,18,13);color:#fff}",
  map: null
};
const Grade = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let { grade } = $$props;
  let { gradeType } = $$props;
  let { gradeDetail } = $$props;
  if ($$props.grade === void 0 && $$bindings.grade && grade !== void 0)
    $$bindings.grade(grade);
  if ($$props.gradeType === void 0 && $$bindings.gradeType && gradeType !== void 0)
    $$bindings.gradeType(gradeType);
  if ($$props.gradeDetail === void 0 && $$bindings.gradeDetail && gradeDetail !== void 0)
    $$bindings.gradeDetail(gradeDetail);
  $$result.css.add(css$3);
  return `${gradeType == "overall" ? `<div class="${"grade-" + (0, import_index_b0063b0f.e)(grade) + " " + (0, import_index_b0063b0f.e)(gradeType) + " svelte-vqdhsl"}"><div class="${"svelte-vqdhsl"}">${(0, import_index_b0063b0f.e)(gradeDetail)}</div>
   <div class="${"arrow-down svelte-vqdhsl"}"></div></div>` : `${gradeType == "grid" ? `<div class="${"grade-" + (0, import_index_b0063b0f.e)(grade) + " " + (0, import_index_b0063b0f.e)(gradeType) + " svelte-vqdhsl"}"><div class="${"svelte-vqdhsl"}">${(0, import_index_b0063b0f.e)(gradeDetail)}</div></div>` : `<div class="${"grade-" + (0, import_index_b0063b0f.e)(grade) + " " + (0, import_index_b0063b0f.e)(gradeType) + " svelte-vqdhsl"}"><div class="${"svelte-vqdhsl"}">${(0, import_index_b0063b0f.e)(gradeDetail)}</div></div>`}`}`;
});
const InlineContainer = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const ModalBackdrop = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = (0, import_index_b0063b0f.b)($$props, ["class", "isOpen", "fade"]);
  let { class: className = "" } = $$props;
  let { isOpen = false } = $$props;
  let { fade = true } = $$props;
  let loaded = false;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.fade === void 0 && $$bindings.fade && fade !== void 0)
    $$bindings.fade(fade);
  classes = (0, import_Header_svelte_svelte_type_style_lang_ac9159bf.c)(className, "modal-backdrop");
  return `${isOpen && loaded ? `<div${(0, import_index_b0063b0f.d)([(0, import_index_b0063b0f.f)($$restProps), { class: (0, import_index_b0063b0f.g)(classes) }], { classes: fade ? "fade" : "" })}></div>` : ``}`;
});
const ModalBody = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = (0, import_index_b0063b0f.b)($$props, ["class"]);
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  classes = (0, import_Header_svelte_svelte_type_style_lang_ac9159bf.c)(className, "modal-body");
  return `<div${(0, import_index_b0063b0f.d)([(0, import_index_b0063b0f.f)($$restProps), { class: (0, import_index_b0063b0f.g)(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Portal = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_b0063b0f.b)($$props, []);
  let ref;
  let portal;
  (0, import_index_b0063b0f.o)(() => {
    if (typeof document !== "undefined") {
      document.body.removeChild(portal);
    }
  });
  return `<div${(0, import_index_b0063b0f.d)([(0, import_index_b0063b0f.f)($$restProps)], {})}${(0, import_index_b0063b0f.h)("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const css$2 = {
  code: ".modal-open{overflow:hidden;padding-right:0}",
  map: null
};
const dialogBaseClass = "modal-dialog";
const Modal = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let outer;
  (0, import_index_b0063b0f.b)($$props, [
    "class",
    "static",
    "isOpen",
    "autoFocus",
    "body",
    "centered",
    "container",
    "fullscreen",
    "header",
    "scrollable",
    "size",
    "toggle",
    "labelledBy",
    "backdrop",
    "wrapClassName",
    "modalClassName",
    "contentClassName",
    "fade",
    "unmountOnClose",
    "returnFocusAfterClose"
  ]);
  (0, import_index_b0063b0f.i)();
  let { class: className = "" } = $$props;
  let { static: staticModal = false } = $$props;
  let { isOpen = false } = $$props;
  let { autoFocus = true } = $$props;
  let { body = false } = $$props;
  let { centered = false } = $$props;
  let { container = void 0 } = $$props;
  let { fullscreen = false } = $$props;
  let { header = void 0 } = $$props;
  let { scrollable = false } = $$props;
  let { size = "" } = $$props;
  let { toggle = void 0 } = $$props;
  let { labelledBy = header ? `modal-${(0, import_Header_svelte_svelte_type_style_lang_ac9159bf.u)()}` : void 0 } = $$props;
  let { backdrop = true } = $$props;
  let { wrapClassName = "" } = $$props;
  let { modalClassName = "" } = $$props;
  let { contentClassName = "" } = $$props;
  let { fade = true } = $$props;
  let { unmountOnClose = true } = $$props;
  let { returnFocusAfterClose = true } = $$props;
  (0, import_index_b0063b0f.o)(() => {
  });
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.static === void 0 && $$bindings.static && staticModal !== void 0)
    $$bindings.static(staticModal);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.autoFocus === void 0 && $$bindings.autoFocus && autoFocus !== void 0)
    $$bindings.autoFocus(autoFocus);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  if ($$props.centered === void 0 && $$bindings.centered && centered !== void 0)
    $$bindings.centered(centered);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.fullscreen === void 0 && $$bindings.fullscreen && fullscreen !== void 0)
    $$bindings.fullscreen(fullscreen);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.scrollable === void 0 && $$bindings.scrollable && scrollable !== void 0)
    $$bindings.scrollable(scrollable);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.labelledBy === void 0 && $$bindings.labelledBy && labelledBy !== void 0)
    $$bindings.labelledBy(labelledBy);
  if ($$props.backdrop === void 0 && $$bindings.backdrop && backdrop !== void 0)
    $$bindings.backdrop(backdrop);
  if ($$props.wrapClassName === void 0 && $$bindings.wrapClassName && wrapClassName !== void 0)
    $$bindings.wrapClassName(wrapClassName);
  if ($$props.modalClassName === void 0 && $$bindings.modalClassName && modalClassName !== void 0)
    $$bindings.modalClassName(modalClassName);
  if ($$props.contentClassName === void 0 && $$bindings.contentClassName && contentClassName !== void 0)
    $$bindings.contentClassName(contentClassName);
  if ($$props.fade === void 0 && $$bindings.fade && fade !== void 0)
    $$bindings.fade(fade);
  if ($$props.unmountOnClose === void 0 && $$bindings.unmountOnClose && unmountOnClose !== void 0)
    $$bindings.unmountOnClose(unmountOnClose);
  if ($$props.returnFocusAfterClose === void 0 && $$bindings.returnFocusAfterClose && returnFocusAfterClose !== void 0)
    $$bindings.returnFocusAfterClose(returnFocusAfterClose);
  $$result.css.add(css$2);
  (0, import_Header_svelte_svelte_type_style_lang_ac9159bf.c)(dialogBaseClass, className, {
    [`modal-${size}`]: size,
    "modal-fullscreen": fullscreen === true,
    [`modal-fullscreen-${fullscreen}-down`]: fullscreen && typeof fullscreen === "string",
    [`${dialogBaseClass}-centered`]: centered,
    [`${dialogBaseClass}-scrollable`]: scrollable
  });
  outer = container === "inline" || staticModal ? InlineContainer : Portal;
  return `${``}
${backdrop && !staticModal ? `${(0, import_index_b0063b0f.v)(outer || import_index_b0063b0f.m, "svelte:component").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_b0063b0f.v)(ModalBackdrop, "ModalBackdrop").$$render($$result, { fade, isOpen }, {}, {})}`;
    }
  })}` : ``}`;
});
const Spinner = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = (0, import_index_b0063b0f.b)($$props, ["class", "type", "size", "color"]);
  let { class: className = "" } = $$props;
  let { type = "border" } = $$props;
  let { size = "" } = $$props;
  let { color = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  classes = (0, import_Header_svelte_svelte_type_style_lang_ac9159bf.c)(className, size ? `spinner-${type}-${size}` : false, `spinner-${type}`, color ? `text-${color}` : false);
  return `<div${(0, import_index_b0063b0f.d)([
    (0, import_index_b0063b0f.f)($$restProps),
    { role: "status" },
    { class: (0, import_index_b0063b0f.g)(classes) }
  ], {})}><span class="${"visually-hidden"}">${slots.default ? slots.default({}) : `Loading...`}</span></div>`;
});
var social = [
  {
    Brand: "Adidas",
    Twitter_Handle: "@adidas",
    L: "283",
    Tweet: ".@adidas says, #ImpossibleIsNothing, so it shouldn\u2019t have any problem transitioning its manufacturing onto renewables. See @standearth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. ",
    Facebook: "Adidas says, #ImpossibleIsNothing, so it should not have any problem getting its manufacturing off coal power and onto renewables. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more: ",
    Email: "Hey, friend.   Adidas says, #ImpossibleIsNothing, so it should not have any problem getting its manufacturing off coal power and onto renewables.   Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "ALDO",
    Twitter_Handle: "@ALDO_shoes",
    L: "281",
    Tweet: ".@ALDO_shoes is quite a few steps behind on reducing its climate emissions & coal pollution in communities. Check out @standearth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report.",
    Facebook: "Aldo is quite a few steps behind on reducing its climate emissions and coal pollution in communities. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more: ",
    Email: "Hey, friend. Aldo is quite a few steps behind on reducing its climate emissions and coal pollution in communities.Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more: ",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Allbirds",
    Twitter_Handle: "@allbirds",
    L: "241",
    Tweet: ".@allbirds may use \u201Cpremium natural materials\u201D but it\u2019s not yet walking the talk when it comes to ditching fossil fuels for renewables. Check out @standearth\u2019s new #FossilFreeFashionScorecard to read more.",
    Facebook: "Allbirds may use \u201Cpremium natural materials\u201D but it is not yet walking the talk when it comes to ditching fossil fuels for renewables. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more: ",
    Email: "Hey, friend. Allbirds may use \u201Cpremium natural materials\u201D but it is not yet walking the talk when it comes to ditching fossil fuels for renewables. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "American Eagle Outfitters",
    Twitter_Handle: "@aeo",
    L: "221",
    Tweet: ".@AEO, please show us that you care about the climate by kicking the coal-powered factories from your manufacturing. Check out @standearth\u2019s new #FossilFreeFashionScorecard to find out more.",
    Facebook: "Dear American Eagle Outfitters, please show us that you care about the climate by kicking the coal powered factories because your score in Stand.earth\u2019s new #FossilFreeFashionScorecard is not looking nearly as good as in the previous scorecard. Read more to find out how the brand scored compared to the other 46 brands in the report.",
    Email: "Hey, friend. American Eagle Outfitters isn\u2019t doing enough to move from coal power to renewables in its factories. Read more to find out how the brand scored compared to the other 46 brands in the report.",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Arc'teryx",
    Twitter_Handle: "@arcteryx",
    L: "254",
    Tweet: "It\u2019s hard to have absolute confidence in @arcteryx when it has done little to cut its emissions. Check out @standearth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands.",
    Facebook: "It\u2019s hard to have absolute confidence in Arc\u2019teryx, when it has not done enough to switch to renewable energy in its supply chain. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. It\u2019s hard to have absolute confidence in Arc\u2019teryx, when it\u2019s not done enough to switch to renewable energy in its supply chain. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Armani ",
    Twitter_Handle: "@armani",
    L: "233",
    Tweet: "Italian powerhouse brand, @armani needs to do a lot more to tackle its climate emissions, starting with ditching coal. Check out @standearth\u2019s new #FossilFreeFashionScorecard to read its full score. ",
    Facebook: "Italian powerhouse brand, Armani needs to do a lot more to tackle its climate emissions, starting with ditching coal. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more: ",
    Email: "Hey, friend. Italian powerhouse brand, Armani needs to do a lot more to tackle its climate emissions, starting with ditching coal. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Asics",
    Twitter_Handle: "@ASICSamerica",
    L: "222",
    Tweet: "@ASICSamerica is running ahead of the pack in @standearth\u2019s #FossilFreeFashionScorecard. But when will it go 100% renewable to power its manufacturing? Read the full breakdown here: ",
    Facebook: "ASICS is running ahead of the pack Stand.earth\u2019s #FossilFreeFashionScorecard. But when will it go 100% renewable to power its manufacturing? Read more here:",
    Email: "Hey, friend. ASICS\u2019s climate targets were graded in Stand.earth\u2019s new Fossil Free Fashion Scorecard. ASICS is running ahead of the pack. But when will it go 100% renewable to power its manufacturing? Read more here: ",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Boohoo",
    Twitter_Handle: "@boohoo",
    L: "241",
    Tweet: ".@boohoo is as bad as it gets when it comes to polluting the environment & creating fast fashion destined for landfills. Check out @standearth\u2019s new #FossilFreeFashionScorecard to find out how the brand did.",
    Facebook: "Facebook: Boohoo is as bad as it gets when it comes to polluting the environment & creating fast fashion destined for landfills. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more: ",
    Email: "Hey, friend. Boohoo is as bad as it gets when it comes to polluting the environment & creating fast fashion destined for landfills. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Burberry",
    Twitter_Handle: "@burberry",
    L: "278",
    Tweet: " You may be dying for a @burberry trench coat, but we\u2019re dying to see how the brand will clean up its climate pollution. Check out @standearth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands.",
    Facebook: "You may be dying for a Burberry trench coat, but we\u2019re dying to see how the brand will clean up its climate pollution. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. You may be dying for a Burberry trench coat, but we\u2019re dying to see how the brand will clean up its climate pollution. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "C&A",
    Twitter_Handle: "@ca_europe",
    L: "267",
    Tweet: ".@ca_europe is all about sustainability, but its climate commitments doesn\u2019t match its social media talk about #savetheplanet & #wearthechange. Check out @standearth\u2019s new #FossilFreeFashionScorecard to find out how the brand did.",
    Facebook: "C&A is all about sustainability, but its climate commitments doesn\u2019t match its social media talk about #savetheplanet & #wearthechange. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. C&A is all about sustainability, but its climate commitments doesn\u2019t match its social media talk about #savetheplanet & #wearthechange. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Capri Holdings",
    Twitter_Handle: "@MichaelKors, @versace, @jimmychoo",
    L: "249",
    Tweet: "What does @MichaelKors, @versace & @jimmychoo have in common? They all scored \u201CF\u201D on sustainability. Check out @standearth\u2019s new #FossilFreeFashionScorecard to find out how the brands did.",
    Facebook: "What does Michael Kors, Versace & Jimmy Choo have in common? They all scored \u201CF\u201D on sustainability. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. What does Michael Kors, Versace & Jimmy Choo have in common? They all scored \u201CF\u201D on sustainability. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Chanel",
    Twitter_Handle: "@chanel",
    L: "246",
    Tweet: ".@chanel may be timeless, but the brand is running out of time to cut its climate pollution. A \u201CD-\u201D does not pair with tweed. Check out @standearth\u2019s new #FossilFreeFashionScorecard to see the brand\u2019s full grade.",
    Facebook: "Chanel may be timeless, but the brand is running out of time to cut its climate pollution. A \u201CD-\u201D does not pair with tweed. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. Chanel may be timeless, but the brand is running out of time to cut its climate pollution. A \u201CD-\u201D does not pair with tweed. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Columbia",
    Twitter_Handle: "@Columbia1938 ",
    L: "232",
    Tweet: ".@Columbia1938 is a staple for outdoor adventures, but the brand is seriously lacking on climate action. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand did.",
    Facebook: "Columbia is a staple for outdoor adventures, but the brand is seriously lacking on climate action. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. Columbia is a staple for outdoor adventures, but the brand is seriously lacking on climate action. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more: ",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Eileen Fisher",
    Twitter_Handle: "@EILEENFISHERNY",
    L: "241",
    Tweet: ".@EILEENFISHERNY has some good sustainability initiatives, but the brand could do more to improve its \u201CD\u201D grade. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand did.",
    Facebook: "Eileen Fisher has some good sustainability initiatives, but the brand could do more to improve its \u201CD\u201D grade. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more: ",
    Email: "Hey, friend. Eileen Fisher has some good sustainability initiatives, but the brand could do more to improve its \u201CD\u201D grade. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more: ",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Esprit",
    Twitter_Handle: "@espritofficial",
    L: "252",
    Tweet: ".@espritofficial is moving towards a recycling economy, but what about the fossil fuels in its supply chain? Check out the brand\u2019s full climate policy breakdown in @Standearth\u2019s new #FossilFreeFashionScorecard.",
    Facebook: "Esprit is moving towards a recycling economy, but what about the fossil fuels in its supply chain? Check out the brand\u2019s full climate policy breakdown in Stand.earth\u2019s new #FossilFreeFashionScorecard. Find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. Esprit is moving towards a recycling economy, but what about the fossil fuels in its supply chain? Check out the brand\u2019s full climate policy breakdown in Stand.earth\u2019s new #FossilFreeFashionScorecard. Find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Everlane",
    Twitter_Handle: "@everlane",
    L: "214",
    Tweet: ".@everlane encourages its customers to \u201Calways ask why\u201D, so why isn\u2019t the company doing better in @standearth\u2019s new #FossilFreeFashionScorecard? Read the brand\u2019s full grade here:",
    Facebook: "Everlane encourages its customers to \u201Calways ask why\u201D, so why isn\u2019t the company doing better in Stand.earth\u2019s new #FossilFreeFashionScorecard? Check out the report to find out how the brand scored compared to the other 46 brands in the report. Read more",
    Email: "Hey, friend. Everlane encourages its customers to \u201Calways ask why\u201D, so why isn\u2019t the company doing better in Stand.earth\u2019s new #FossilFreeFashionScorecard? Check out the report to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Gant",
    Twitter_Handle: "@gant1949",
    L: "234",
    Tweet: "Pretty sure that European sophistication doesn\u2019t include deadly pollution from clothing factories @GANT1949. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored.",
    Facebook: "Pretty sure that European sophistication doesn\u2019t include deadly pollution from clothing factories GANT. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. Pretty sure that European sophistication doesn\u2019t include deadly pollution from clothing factories GANT. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Gap",
    Twitter_Handle: "@gap",
    L: "229",
    Tweet: ".@GapInc has been a staple in our closets for decades, but fossil fuels are a staple in its production line. Check out @standearth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored.",
    Facebook: "Gap Inc has been a staple in our closets for decades, but fossil fuels are a staple in its production line. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. Gap Inc has been a staple in our closets for decades, but fossil fuels are a staple in its production line. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Guess",
    Twitter_Handle: "@guess",
    L: "216",
    Tweet: "Can you guess what @guess scored in @standearth\u2019s new #FossilFreeFashionScorecard? Can\u2019t #LoveGuess when it's using fossil fuels to make its clothes. Read the brand\u2019s full grade here:",
    Facebook: "Can you guess what Guess scored in Stand.earth\u2019s new #FossilFreeFashionScorecard? Can\u2019t #LoveGuess when it's using fossil fuels to make its clothes. Check out Stand.earth\u2019s new report to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. Can you guess what Guess scored in Stand.earth\u2019s new #FossilFreeFashionScorecard? Can\u2019t #LoveGuess when it's using fossil fuels to make its clothes. Check out Stand.earth\u2019s new report to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "H&M",
    Twitter_Handle: "@hm",
    L: "216",
    Tweet: "Coal-powered fast fashion & sustainability don\u2019t really go hand-in-hand @hm. No wonder the brand got a \u201CC-\u201D in @standearth\u2019s new #FossilFreeFashionScorecard. Read the brand\u2019s full grade:",
    Facebook: "Coal-powered fast fashion & sustainability don\u2019t really go hand-in-hand H&M. No wonder the brand got a \u201CC-\u201D in Stand.earth\u2019s new #FossilFreeFashionScorecard. Check out Stand.earth\u2019s new report to find out how the brand scored compared to the other 46 brands in the report: ",
    Email: "Hey, friend. Coal-powered fast fashion & sustainability don\u2019t really go hand-in-hand H&M. No wonder the brand got a \u201CC-\u201D in Stand.earth\u2019s new #FossilFreeFashionScorecard. Check out Stand.earth\u2019s new report to find out how the brand scored compared to the other 46 brands in the report:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Hugo Boss",
    Twitter_Handle: "@hugoboss",
    L: "236",
    Tweet: ".@hugoboss got an \u201CF\u201D for its climate change efforts. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Facebook: "Hugo Boss got an \u201CF\u201D for its climate change efforts. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more: ",
    Email: "Hey, friend. Hugo Boss got an \u201CF\u201D for its climate change efforts. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Inditex",
    Twitter_Handle: "@InditexSpain",
    L: "237",
    Tweet: ".@InditexSpain - @zara's parent company - has a coal problem. Check out @standearth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report.",
    Facebook: "Inditex Spain - Zara's parent company has a coal problem. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. As the world's biggest fast fashion company Inditex \u2013 @Zara's parent company \u2013 should be the first to kick coal from its supply chain. But it is not. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more: ",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Kering",
    Twitter_Handle: "@keringgroup",
    L: "228",
    Tweet: ".@keringgroup\u2019s renowned maisons are contributing in a major way to climate pollution. Check out @standearth\u2019s new #FossilFreeFashionScorecard to find out how the French corporation scored.",
    Facebook: "Kering Group\u2019s renowned maisons are contributing in a major way to climate pollution. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the French corporation scored compared to the other brands in the report:",
    Email: "Hey, friend. Kering Group\u2019s renowned maisons are contributing in a major way to climate pollution. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the French corporation scored compared to the other brands in the report:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Levi's",
    Twitter_Handle: "@levis",
    L: "213",
    Tweet: ".@levis was an early climate leader, but how did the beloved jean brand do in  @standearth\u2019s new #FossilFreeFashionScorecard? Check out the report to find out how the brand scored.",
    Facebook: "Levi\u2019s was an early climate leader, but how did the beloved jean brand do in  Stand.earth\u2019s new #FossilFreeFashionScorecard? Check out the report to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. Levi\u2019s was an early climate leader, but how did the beloved jean brand do in  Stand.earth\u2019s new #FossilFreeFashionScorecard? Check out the report to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Lululemon",
    Twitter_Handle: "@lululemon",
    L: "255",
    Tweet: ".@lululemon is not elevating anything with its coal-powered yoga pants factories. Check out @standearth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. ",
    Facebook: "lululemon is not elevating anything with its coal-powered yoga pants factories. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. lululemon is not elevating anything with its coal-powered yoga pants factories. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "LVMH",
    Twitter_Handle: "@lvmh",
    L: "261",
    Tweet: "Luxury mega-brand @lvmh has as many climate pollution blindspots as it has subsidiary brands. Check out @standearth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report.",
    Facebook: "Luxury mega-brand LVMH has as many climate pollution blindspots as it has subsidiary brands. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. Luxury mega-brand LVMH has as many climate pollution blindspots as it has subsidiary brands. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more: ",
    "leaveblank\r": "\r"
  },
  {
    Brand: "M&S",
    Twitter_Handle: "@marksandspencer",
    L: "239",
    Tweet: ".@marksandspencer definitely needs to update its sustainability plans because the company scored an \u201CF\u201D. Check out @standearth\u2019s new #FossilFreeFashionScorecard to find out how the company scored.",
    Facebook: "Marks & Spencer (M&S) definitely needs to update its sustainability plans because the company scored an, \u201CF\u201D. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. Marks & Spencer (M&S) definitely needs to update its sustainability plans because the company scored an, \u201CF\u201D. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Mammut",
    Twitter_Handle: "@mammut",
    L: "232",
    Tweet: ".@mammut has climbed to the to the top to score the highest grade in @standearth\u2019s new #FossilFreeFashionScorecard. Check out the report to see what makes Mammut stand out from the other 46 brands. ",
    Facebook: "Mammut has climbed to the to the top  to score the highest grade in Stand.earth\u2019s new #FossilFreeFashionScorecard. Check out the report to see what makes Mammut stand out from the other 46 brands. Read more:",
    Email: "Hey, friend. Mammut has climbed to the top to score the highest grade in Stand.earth\u2019s new #FossilFreeFashionScorecard. Check out the report to see what makes Mammut stand out from the other 46 brands. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "MEC",
    Twitter_Handle: "@mec",
    L: "200",
    Tweet: ".@mec is not inspiring great outdoor adventures with its weak climate goals. Check out @standearth\u2019s new #FossilFreeFashionScorecard to find out how the company scored. ",
    Facebook: "MEC is not inspiring great outdoor adventures with its weak climate goals. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. MEC is not inspiring great outdoor adventures with its weak climate goals. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "New Balance",
    Twitter_Handle: "@newbalance",
    L: "215",
    Tweet: "Unlike its iconic sneakers, @newbalance\u2019s climate goals are nowhere near icon status. Check out @standearth\u2019s new #FossilFreeFashionScorecard to find out how the company scored.",
    Facebook: "Unlike its iconic sneakers, New Balance\u2019s climate goals are nowhere near icon status. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. Unlike its iconic sneakers, New Balance\u2019s climate goals are nowhere near icon status. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Nike",
    Twitter_Handle: "@nike",
    L: "234",
    Tweet: "While @nike got one of the best grades for climate efforts in @standearth\u2019s new #FossilFreeFashionScorecard, it needs to switch to renewables. #JustDoit Nike, match your emissions cuts to your ambition.",
    Facebook: "While Nike got one of the highest grades for its climate efforts in Stand.earth\u2019s new #FossilFreeFashionScorecard, it needs to do more to get off coal power factories and switch to renewables. #JustDoit Nike, match your emissions cuts to your ambition. Read more to find out how the brand scored compared to the other 46 brands in the report. ",
    Email: "Hey, friend. While Nike got one of the highest grades for its climate efforts in Stand.earth\u2019s new #FossilFreeFashionScorecard, it needs to do more to get off coal power factories and switch to renewables. #JustDoit Nike, match your emissions cuts to your ambition. Read more to find out how the brand scored compared to the other 46 brands in the report. ",
    "leaveblank\r": "\r"
  },
  {
    Brand: "On Running",
    Twitter_Handle: "@onrunning",
    L: "198",
    Tweet: "When will @onrunning get its supply chain off coal & onto renewables? Check out @standearth\u2019s new #FossilFreeFashionScorecard to find out how the company scored.",
    Facebook: "When will On Running get its supply chain off coal and onto renewables? Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the company scored for its sustainability policy compared to the other 46 brands in the report:",
    Email: "Hey, friend. When will On Running get its supply chain off coal and onto renewables? Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the company scored for its sustainability policy compared to the other 46 brands in the report:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Patagonia",
    Twitter_Handle: "@patagonia",
    L: "258",
    Tweet: "For a brand that is in the, \u201Cbusiness to save our home planet,\u201D @patagonia\u2019s sustainability policy needs to be much more ambitious. Check out @standearth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored.",
    Facebook: "For a brand that is in the, \u201Cbusiness to save our home planet,\u201D Patagonia\u2019s sustainability policy needs to be much more ambitious. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more: ",
    Email: "Hey, friend. For a brand that is in the, \u201Cbusiness to save our home planet,\u201D Patagonia\u2019s sustainability policy needs to be much more ambitious. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Pentland",
    Twitter_Handle: "@PentlandBrands",
    L: "245",
    Tweet: ".@PentlandBrands, the parent company of @speedo needs a more ambitious climate plan to keep with the other brands in @standearth\u2019s new #FossilFreeFashionScorecard. Read more to see how the brand scored. ",
    Facebook: "Pentland Brands, the parent company of Speedo needs a more ambitious climate plan to keep with the other brands in Stand.earth\u2019s new #FossilFreeFashionScorecard. Check out the report to see how the brand\u2019s sustainability policy did.",
    Email: "Hey, friend. Pentland Brands, parent company of Speedo needs a more ambitious climate plan to keep with the other brands in Stand.earth\u2019s new #FossilFreeFashionScorecard. Check out the report to see how the brand\u2019s sustainability policy did.",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Prada ",
    Twitter_Handle: "@prada",
    L: "226",
    Tweet: "The devil wears prada but @prada is also outfitting climate change with the emissions from its supply chain. Check out @standearth\u2019s new #FossilFreeFashionScorecard to see how the brand scored.",
    Facebook: "The devil wears prada but Prada is also outfitting climate change with the emissions from its supply chain. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. The devil wears prada but Prada is also outfitting climate change with the emissions from its supply chain. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Primark",
    Twitter_Handle: "@primark",
    L: "230",
    Tweet: ".@primark is as bad as it gets when it comes to polluting & creating fast fashion destined for landfills. Check out @standearth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored.",
    Facebook: "Primark is as bad as it gets when it comes to polluting the environment & creating fast fashion destined for landfills. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more: ",
    Email: "Hey, friend. Primark is as bad as it gets when it comes to polluting the environment & creating fast fashion destined for landfills. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "PUMA",
    Twitter_Handle: "@puma",
    L: "224",
    Tweet: ".@puma wants its customers to #OnlySeeGreat but that would be easier if the brand went 100% renewable. Check out @standearth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored.",
    Facebook: "PUMA wants its customers to #OnlySeeGreat but that would be easier if the brand went 100% renewable in its supply chain. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. PUMA wants its customers to #OnlySeeGreat but that would be easier if the brand went 100%  renewable in its supply chain. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more: ",
    "leaveblank\r": "\r"
  },
  {
    Brand: "PVH",
    Twitter_Handle: "@PVHCorp",
    L: "258",
    Tweet: ".@PVHCorp is the parent company to American staples like @tommyhilfiger & @calvinklein but their climate change policies are not a staple. Check out @standearth\u2019s new #FossilFreeFashionScorecard to see how the brand scored.",
    Facebook: "PVH Corp is the parent company to American staples like Tommy Hilfiger & Calvin Klein but their climate change policies are not a staple. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the company scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. PVH Corp is the parent company to American staples like Tommy Hilfiger & Calvin Klein but their climate change policies are not a staple. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the company scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Ralph Lauren",
    Twitter_Handle: "@ralphlauren",
    L: "258",
    Tweet: ".@ralphlauren has been defining timeless for decades with its styles, but its climate pollution is not timely with the current crisis. Check out @standearth\u2019s new #FossilFreeFashionScorecard to see how the brand scored.",
    Facebook: "Ralph Lauren has been defining timeless for decades with its styles, but its climate pollution is not timely with the current crisis. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. Ralph Lauren has been defining timeless for decades with its styles, but its climate pollution is not timely with the current crisis. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "REI",
    Twitter_Handle: "@rei",
    L: "218",
    Tweet: "We won\u2019t be able to #OptOutside if @rei doesn\u2019t stop relying on offsets to keep up with its emissions. Check out @standearth\u2019s new #FossilFreeFashionScorecard to see how the brand scored.",
    Facebook: "We won\u2019t be able to #OptOutside if we REI doesn\u2019t stop relying on offsets to keep up with its emissions. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more: ",
    Email: "Hey, friend. We won\u2019t be able to #OptOutside if we REI doesn\u2019t stop relying on offsets to keep up with its emissions. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Salomon",
    Twitter_Handle: "@SalomonSports",
    L: "237",
    Tweet: "There\u2019s no #TimeToPlay @SalomonSports when we\u2019re living in a climate crisis. How about you improve your sustainability policy? Check out @standearth\u2019s new #FossilFreeFashionScorecard to read more.",
    Facebook: "There\u2019s no #TimeToPlay Salomon Sports when we\u2019re living in a climate crisis. How about you improve your sustainability policy? Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. There\u2019s no #TimeToPlay Salomon Sports when we\u2019re living in a climate crisis. How about you improve your sustainability policy? Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Salvatore Ferragamo ",
    Twitter_Handle: "@Ferragamo",
    L: "277",
    Tweet: ".@Ferragamo your tailored fits would look much better in our closets if it weren\u2019t polluting the environment. A better sustainability policy would fix that. See @standearth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored.",
    Facebook: "Salvatore Ferragamo\u2019s tailored fits would look much better in our closets if it weren\u2019t polluting the environment. A better sustainability policy would fix that. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. Salvatore Ferragamo\u2019s tailored fits would look much better in our closets if it weren\u2019t polluting the environment. A better sustainability policy would fix that. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more: ",
    "leaveblank\r": "\r"
  },
  {
    Brand: "SKFK",
    Twitter_Handle: "@skfk_official",
    L: "230",
    Tweet: ".@skfk_official you can #JoinTheChange by committing to a more ambitious climate plan. See @standearth\u2019s new #FossilFreeFashionScorecard to see how the brand\u2019s sustainability policy scored.",
    Facebook: "SKFK you can #JoinTheChange by committing to a more ambitious climate plan. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. SKFK you can #JoinTheChange by committing to a more ambitious climate plan. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Under Armour",
    Twitter_Handle: "@underarmour",
    L: "242",
    Tweet: ".@underarmour\u2019s climate targets were graded in @standearth\u2019s new #FossilFreeFashionScorecard. Let\u2019s just say that its climate commitments are underwhelming. Get the full scoop on the brand\u2019s grade here: ",
    Facebook: "Under Armour\u2019s climate targets were graded in Stand.earth\u2019s new Fossil Free Fashion Scorecard. Let\u2019s just say that its climate commitments are underwhelming. Get the full scoop on the brand\u2019s grade here: ",
    Email: "Hey, friend. Under Armour\u2019s climate targets were graded in Stand.earth\u2019s new Fossil Free Fashion Scorecard. See how Under Armour did out of the 47 brands graded here: ",
    "leaveblank\r": "\r"
  },
  {
    Brand: "Uniqlo",
    Twitter_Handle: "@UniqloUSA",
    L: "251",
    Tweet: "The simplicity of @UniqloUSA makes the brand a staple in our closet, but its fossil fuel heavy supply chain is less than staple-worthy. See @standearth\u2019s new #FossilFreeFashionScorecard to see how the brand scored.",
    Facebook: "The simplicity of Uniqlo makes the brand a staple in our closet, unfortunately, its fossil fuel heavy supply chain is less than staple-worthy. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. The simplicity of Uniqlo makes the brand a staple in our closet, unfortunately, its fossil fuel heavy supply chain is less than staple-worthy. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "VAUDE Sports",
    Twitter_Handle: "@VAUDE_sport",
    L: "231",
    Tweet: ".@VAUDE_sport is a circularity innovator, but could set a stronger climate policy. See @standearth\u2019s new #FossilFreeFashionScorecard to see how the brand\u2019s sustainability policy could improve.",
    Facebook: "VAUDE Sports is a circularity innovator, but could set a stronger climate policy. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. VAUDE Sports is a circularity innovator, but could set a stronger climate policy.  Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": "\r"
  },
  {
    Brand: "VF Corp",
    Twitter_Handle: "@VFCorp",
    L: "255",
    Tweet: "The world\u2019s largest apparel, footwear & accessories company @VFCorp needs a lot more renewables in its supply chain to meet its climate goals. See @standearth\u2019s new #FossilFreeFashionScorecard to see how the brand scored.",
    Facebook: "The world\u2019s largest apparel, footwear & accessories company VF Corp needs a lot more renewables in its supply chain to meet its climate goals. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    Email: "Hey, friend. The world\u2019s largest apparel, footwear & accessories company VF Corp needs a lot more renewables in its supply chain to meet its climate goals. Check out Stand.earth\u2019s new #FossilFreeFashionScorecard to find out how the brand scored compared to the other 46 brands in the report. Read more:",
    "leaveblank\r": ""
  }
];
var Popup_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".summary-content.svelte-1p0bep4.svelte-1p0bep4{max-width:1200px;margin:auto;background:var(--white);border-radius:6px;min-height:300px;padding:30px}button.svelte-1p0bep4.svelte-1p0bep4{float:right;position:absolute;top:0px;right:10px;color:var(--heading-blue);font-size:30px}.rower.svelte-1p0bep4.svelte-1p0bep4{display:flex;width:100%;padding-left:30px;padding-right:30px}.grade.svelte-1p0bep4.svelte-1p0bep4{margin-top:-16px}.name.svelte-1p0bep4.svelte-1p0bep4{margin-top:20px;margin-left:20px;font-weight:bold}.name.svelte-1p0bep4 h1.svelte-1p0bep4{color:var(--primary-color);font-size:37px;padding-top:7px}.logo.svelte-1p0bep4.svelte-1p0bep4{max-width:150px;padding-left:10px;padding-right:10px;margin-top:25px}.summary.svelte-1p0bep4.svelte-1p0bep4{width:100%;max-width:830px;min-width:200px;display:inline;padding-top:40px;padding-bottom:40px;font-size:20px;font-family:var(-sans);color:rgb(47,94,128);font-weight:lighter}.actions.svelte-1p0bep4.svelte-1p0bep4{padding-left:30px;padding-bottom:30px}.actions.svelte-1p0bep4 a.svelte-1p0bep4{color:var(--dark-red);text-decoration:underline;padding-right:20px;font-size:18px;font-weight:lighter}.actions.svelte-1p0bep4 a.svelte-1p0bep4:first-child{padding-right:100px}",
  map: null
};
const Popup = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { name } = $$props;
  let { path } = $$props;
  let { grade } = $$props;
  let { summary } = $$props;
  let socialContent;
  function processSocialClick(channel) {
    social.forEach(function(d) {
      if (d.Brand == name) {
        socialContent = d;
      }
    });
    var twitterShare = {
      message: encodeURIComponent(socialContent.Tweet + " https://fashion.stand.earth/" + path)
    };
    var emailShare = {
      subject: encodeURI(name + " scored " + grade + " in our fossil-free fashion scorecard"),
      message: encodeURI(socialContent.Email) + "%0A%0A" + encodeURI("https://fashion.stand.earth/" + path)
    };
    var facebookShare = {
      url: encodeURIComponent("https://fashion.stand.earth/" + path) + "%26en_chan%3Dfb%26ea.tracking.id%3Dfb-share"
    };
    if (channel == "Facebook") {
      return facebookShare.url;
    } else if (channel == "Twitter") {
      return twitterShare.message;
    } else if (channel == "Email") {
      return emailShare;
    }
  }
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.grade === void 0 && $$bindings.grade && grade !== void 0)
    $$bindings.grade(grade);
  if ($$props.summary === void 0 && $$bindings.summary && summary !== void 0)
    $$bindings.summary(summary);
  $$result.css.add(css$1);
  return `<div class="${"overlay"}">${(0, import_index_b0063b0f.v)(Modal, "Modal").$$render($$result, { isOpen: open, size: "lg" }, {}, {
    default: () => {
      return `${(0, import_index_b0063b0f.v)(ModalBody, "ModalBody").$$render($$result, { header: true }, {}, {
        default: () => {
          return `<button class="${["svelte-1p0bep4", open ? "open" : ""].join(" ").trim()}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, { icon: import_free_solid_svg_icons.faTimes }, {}, {})}</button>
            ${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.C, "Container").$$render($$result, {}, {}, {
            default: () => {
              return `${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.R, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"rower svelte-1p0bep4"}"><div class="${"grade svelte-1p0bep4"}">${(0, import_index_b0063b0f.v)(Grade, "Grade").$$render($$result, {
                    gradeDetail: grade,
                    gradeType: "overall",
                    grade: grade.charAt(0)
                  }, {}, {})}</div>
                        <div class="${"logo svelte-1p0bep4"}"><img${(0, import_index_b0063b0f.h)("alt", name, 0)} src="${"/assets/images/logos/" + (0, import_index_b0063b0f.e)(path) + ".png"}"></div>
                        <div class="${"name svelte-1p0bep4"}"><h1 class="${"svelte-1p0bep4"}">${(0, import_index_b0063b0f.e)(name)}</h1></div></div>`;
                }
              })}
                ${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.R, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"summary-content svelte-1p0bep4"}"><div class="${"summary svelte-1p0bep4"}"><p><!-- HTML_TAG_START -->${summary}<!-- HTML_TAG_END --></p></div></div>
                    <div class="${"actions svelte-1p0bep4"}"><a href="${"/" + (0, import_index_b0063b0f.e)(path)}" class="${"svelte-1p0bep4"}">View full summary ${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, { icon: import_free_solid_svg_icons.faArrowRight, size: "1x" }, {}, {})}</a>
                        <a rel="${"external"}" target="${"_new"}" href="${"https://www.facebook.com/sharer.php?u=" + (0, import_index_b0063b0f.e)(processSocialClick("Facebook"))}" class="${"svelte-1p0bep4"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, {
                    icon: import_free_brands_svg_icons.faFacebook,
                    color: "#2C72F6",
                    size: "2x"
                  }, {}, {})}</a>
                        <a rel="${"external"}" target="${"_new"}" href="${"https://twitter.com/intent/tweet?text=" + (0, import_index_b0063b0f.e)(processSocialClick("Twitter"))}" class="${"svelte-1p0bep4"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, {
                    icon: import_free_brands_svg_icons.faTwitter,
                    color: "#1DA1F2",
                    size: "2x"
                  }, {}, {})}</a>
                        <a rel="${"external"}" target="${"_new"}" href="${"mailto:?subject=" + (0, import_index_b0063b0f.e)(processSocialClick("Email").subject) + "&body=" + (0, import_index_b0063b0f.e)(processSocialClick("Email").message)}" class="${"svelte-1p0bep4"}">${(0, import_index_b0063b0f.v)(import_Header_svelte_svelte_type_style_lang_ac9159bf.F, "Fa").$$render($$result, {
                    icon: import_free_regular_svg_icons.faEnvelope,
                    color: "#2F5E80",
                    size: "2x"
                  }, {}, {})}</a></div>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}
</div>`;
});
var Grid_svelte_svelte_type_style_lang = "";
const css = {
  code: ".brand-scores.svelte-17kkl1k.svelte-17kkl1k{display:flex;flex-flow:row wrap;justify-content:center;text-align:center}.score-box.svelte-17kkl1k.svelte-17kkl1k{min-width:133px;min-height:133px;text-align:center;border:1px solid #cccccc;border-radius:6px;margin-right:20px;margin-bottom:20px}.score-box.svelte-17kkl1k.svelte-17kkl1k:hover{border:1px solid #2F5E80}.score-box.svelte-17kkl1k p.svelte-17kkl1k{min-height:35%}.brand-scores.svelte-17kkl1k a.svelte-17kkl1k{text-decoration:none;cursor:pointer}.score-box.svelte-17kkl1k img.svelte-17kkl1k{max-height:50px;height:auto}.control.svelte-17kkl1k select.svelte-17kkl1k,.control.svelte-17kkl1k input.svelte-17kkl1k{width:100%;margin-bottom:30px}#spinner.svelte-17kkl1k.svelte-17kkl1k{width:100%;height:200px;margin-top:10%;text-align:center}",
  map: null
};
const Grid = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let open = false;
  let content = {
    name: "Adidas",
    path: "adidas",
    grade: "A-",
    summary: "This is the summary"
  };
  let { filter = "all" } = $$props;
  let { sort = "abc" } = $$props;
  let { mode = "full" } = $$props;
  console.log(filter);
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0)
    $$bindings.filter(filter);
  if ($$props.sort === void 0 && $$bindings.sort && sort !== void 0)
    $$bindings.sort(sort);
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${(0, import_index_b0063b0f.v)(Popup, "Popup").$$render($$result, Object.assign(content, { open }), {
      open: ($$value) => {
        open = $$value;
        $$settled = false;
      }
    }, {})}

${`<div id="${"spinner"}" class="${"svelte-17kkl1k"}">${(0, import_index_b0063b0f.v)(Spinner, "Spinner").$$render($$result, { color: "primary" }, {}, {})}</div>`}`;
  } while (!$$settled);
  return $$rendered;
});
module.exports = __toCommonJS(stdin_exports);
