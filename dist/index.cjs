"use strict";
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

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Marquee: () => Marquee
});
module.exports = __toCommonJS(index_exports);

// src/Marquee.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function coerceNumber(value, fallback) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return fallback;
}
function coerceBooleanString(value, fallback) {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") return value.toLowerCase() === "true";
  return fallback;
}
function collectLegacyTexts(legacy) {
  const candidates = [
    ["Index0", legacy.Index0],
    ["Index1", legacy.Index1],
    ["Index2", legacy.Index2],
    ["Index3", legacy.Index3],
    ["Index4", legacy.Index4],
    ["Index5", legacy.Index5],
    ["Index6", legacy.Index6],
    ["Index7", legacy.Index7],
    ["Index8", legacy.Index8],
    ["Index9", legacy.Index9],
    ["Index10", legacy.Index10]
  ];
  return candidates.map(([, v]) => typeof v === "string" ? v : void 0).filter((v) => Boolean(v));
}
var Marquee = (props) => {
  const legacyTexts = (0, import_react.useMemo)(() => collectLegacyTexts(props), [props]);
  const texts = props.texts && props.texts.length > 0 ? props.texts : legacyTexts;
  const changeIntervalMs = props.changeIntervalMs ?? coerceNumber(props.TimeToChange, 2e3);
  const crossTimeMs = props.crossTimeMs ?? coerceNumber(props.TimeToCross, 8e3);
  const random = props.random ?? coerceBooleanString(props.IsRandom, false);
  const as = props.as ?? props.Size ?? "h3";
  const color = props.color ?? props.Color;
  const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
  const intervalRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (!Array.isArray(texts) || texts.length === 0) return;
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (random) {
      intervalRef.current = window.setInterval(() => {
        const next = Math.floor(Math.random() * texts.length);
        setCurrentIndex(next);
      }, changeIntervalMs);
    } else {
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, changeIntervalMs);
    }
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [texts, changeIntervalMs, random]);
  const Tag = as;
  const text = texts[currentIndex] ?? "";
  const containerStyle = {
    margin: "0 auto",
    whiteSpace: "nowrap",
    overflow: "hidden",
    ...props.style || {}
  };
  const spanStyle = {
    display: "inline-block",
    paddingLeft: "100%",
    animation: `marquee ${Number(crossTimeMs)}ms linear infinite`,
    color
  };
  (0, import_react.useEffect)(() => {
    const styleId = "__marquee-react-dwyer-keyframes__";
    if (typeof document === "undefined") return;
    if (document.getElementById(styleId)) return;
    const el = document.createElement("style");
    el.id = styleId;
    el.textContent = `@keyframes marquee { 0% { transform: translate(0, 0); animation-timing-function: ease-in; } 100% { transform: translate(-100%, 0); animation-timing-function: ease-out; } }`;
    document.head.appendChild(el);
  }, []);
  if (!Array.isArray(texts) || texts.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { id: "marquee", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { style: containerStyle, className: props.className, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: spanStyle, children: text }) }) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Marquee
});
