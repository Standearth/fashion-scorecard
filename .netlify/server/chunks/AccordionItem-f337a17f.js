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
  A: () => Accordion,
  a: () => AccordionItem
});
module.exports = __toCommonJS(stdin_exports);
var import_index_b0063b0f = require("./index-b0063b0f.js");
var import_Header_svelte_svelte_type_style_lang_ac9159bf = require("./Header.svelte_svelte_type_style_lang-ac9159bf.js");
var import_index_8a8c332b = require("./index-8a8c332b.js");
const Accordion = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = (0, import_index_b0063b0f.b)($$props, ["flush", "stayOpen", "class"]);
  let $open, $$unsubscribe_open;
  const dispatch = (0, import_index_b0063b0f.i)();
  let { flush = false } = $$props;
  let { stayOpen = false } = $$props;
  let { class: className = "" } = $$props;
  const open = (0, import_index_8a8c332b.w)();
  $$unsubscribe_open = (0, import_index_b0063b0f.k)(open, (value) => $open = value);
  (0, import_index_b0063b0f.s)("accordion", {
    open,
    stayOpen,
    toggle: (id) => {
      if ($open === id)
        open.set();
      else
        open.set(id);
      dispatch("toggle", { [id]: $open === id });
    }
  });
  if ($$props.flush === void 0 && $$bindings.flush && flush !== void 0)
    $$bindings.flush(flush);
  if ($$props.stayOpen === void 0 && $$bindings.stayOpen && stayOpen !== void 0)
    $$bindings.stayOpen(stayOpen);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  classes = (0, import_Header_svelte_svelte_type_style_lang_ac9159bf.c)(className, "accordion", { "accordion-flush": flush });
  $$unsubscribe_open();
  return `<div${(0, import_index_b0063b0f.d)([{ class: (0, import_index_b0063b0f.g)(classes) }, (0, import_index_b0063b0f.f)($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const AccordionHeader = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = (0, import_index_b0063b0f.b)($$props, ["class"]);
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  classes = (0, import_Header_svelte_svelte_type_style_lang_ac9159bf.c)(className, "accordion-button");
  return `<h2${(0, import_index_b0063b0f.d)([{ class: "accordion-header" }, (0, import_index_b0063b0f.f)($$restProps)], {})}><button type="${"button"}"${(0, import_index_b0063b0f.h)("class", classes, 0)}>${slots.default ? slots.default({}) : ``}</button></h2>`;
});
const Collapse = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = (0, import_index_b0063b0f.b)($$props, [
    "isOpen",
    "class",
    "horizontal",
    "navbar",
    "onEntering",
    "onEntered",
    "onExiting",
    "onExited",
    "expand",
    "toggler"
  ]);
  const dispatch = (0, import_index_b0063b0f.i)();
  let { isOpen = false } = $$props;
  let { class: className = "" } = $$props;
  let { horizontal = false } = $$props;
  let { navbar = false } = $$props;
  let { onEntering = () => dispatch("opening") } = $$props;
  let { onEntered = () => dispatch("open") } = $$props;
  let { onExiting = () => dispatch("closing") } = $$props;
  let { onExited = () => dispatch("close") } = $$props;
  let { expand = false } = $$props;
  let { toggler = null } = $$props;
  let windowWidth = 0;
  let _wasMaximized = false;
  const minWidth = {};
  minWidth["xs"] = 0;
  minWidth["sm"] = 576;
  minWidth["md"] = 768;
  minWidth["lg"] = 992;
  minWidth["xl"] = 1200;
  function notify() {
    dispatch("update", isOpen);
  }
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.navbar === void 0 && $$bindings.navbar && navbar !== void 0)
    $$bindings.navbar(navbar);
  if ($$props.onEntering === void 0 && $$bindings.onEntering && onEntering !== void 0)
    $$bindings.onEntering(onEntering);
  if ($$props.onEntered === void 0 && $$bindings.onEntered && onEntered !== void 0)
    $$bindings.onEntered(onEntered);
  if ($$props.onExiting === void 0 && $$bindings.onExiting && onExiting !== void 0)
    $$bindings.onExiting(onExiting);
  if ($$props.onExited === void 0 && $$bindings.onExited && onExited !== void 0)
    $$bindings.onExited(onExited);
  if ($$props.expand === void 0 && $$bindings.expand && expand !== void 0)
    $$bindings.expand(expand);
  if ($$props.toggler === void 0 && $$bindings.toggler && toggler !== void 0)
    $$bindings.toggler(toggler);
  classes = (0, import_Header_svelte_svelte_type_style_lang_ac9159bf.c)(className, {
    "collapse-horizontal": horizontal,
    "navbar-collapse": navbar
  });
  {
    if (navbar && expand) {
      if (windowWidth >= minWidth[expand] && !isOpen) {
        isOpen = true;
        _wasMaximized = true;
        notify();
      } else if (windowWidth < minWidth[expand] && _wasMaximized) {
        isOpen = false;
        _wasMaximized = false;
        notify();
      }
    }
  }
  return `

${isOpen ? `<div${(0, import_index_b0063b0f.d)([
    {
      style: (0, import_index_b0063b0f.g)(navbar ? void 0 : "overflow: hidden;")
    },
    (0, import_index_b0063b0f.f)($$restProps),
    { class: (0, import_index_b0063b0f.g)(classes) }
  ], {})}>${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const AccordionItem = (0, import_index_b0063b0f.c)(($$result, $$props, $$bindings, slots) => {
  let classes;
  let accordionOpen;
  let $open, $$unsubscribe_open;
  let { class: className = "" } = $$props;
  let { header = "" } = $$props;
  let { active = false } = $$props;
  let accordionId;
  (0, import_index_b0063b0f.i)();
  const { stayOpen, toggle, open } = (0, import_index_b0063b0f.l)("accordion");
  $$unsubscribe_open = (0, import_index_b0063b0f.k)(open, (value) => $open = value);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  classes = (0, import_Header_svelte_svelte_type_style_lang_ac9159bf.c)(className, "accordion-item");
  accordionOpen = stayOpen ? active : $open === accordionId;
  $$unsubscribe_open();
  return `<div${(0, import_index_b0063b0f.h)("class", classes, 0)}${(0, import_index_b0063b0f.h)("this", accordionId, 0)}>${(0, import_index_b0063b0f.v)(AccordionHeader, "AccordionHeader").$$render($$result, { class: !accordionOpen && "collapsed" }, {}, {
    default: () => {
      return `${slots.header ? slots.header({}) : ``}
    ${(0, import_index_b0063b0f.e)(header)}`;
    }
  })}
  ${(0, import_index_b0063b0f.v)(Collapse, "Collapse").$$render($$result, {
    isOpen: accordionOpen,
    class: "accordion-collapse"
  }, {}, {
    default: () => {
      return `<div class="${"accordion-body"}">${slots.default ? slots.default({}) : ``}</div>`;
    }
  })}</div>`;
});
