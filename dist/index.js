// src/Marquee.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
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
  const legacyTexts = useMemo(() => collectLegacyTexts(props), [props]);
  const texts = props.texts && props.texts.length > 0 ? props.texts : legacyTexts;
  const changeIntervalMs = props.changeIntervalMs ?? coerceNumber(props.TimeToChange, 2e3);
  const crossTimeMs = props.crossTimeMs ?? coerceNumber(props.TimeToCross, 8e3);
  const random = props.random ?? coerceBooleanString(props.IsRandom, false);
  const as = props.as ?? props.Size ?? "h3";
  const color = props.color ?? props.Color;
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
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
  useEffect(() => {
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
  return /* @__PURE__ */ jsx("section", { id: "marquee", children: /* @__PURE__ */ jsx(Tag, { style: containerStyle, className: props.className, children: /* @__PURE__ */ jsx("span", { style: spanStyle, children: text }) }) });
};
export {
  Marquee
};
