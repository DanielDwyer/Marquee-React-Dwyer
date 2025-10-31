import React, { useEffect, useMemo, useRef, useState } from 'react';

export type MarqueeProps = {
  texts: string[];
  changeIntervalMs?: number;
  crossTimeMs?: number;
  random?: boolean;
  as?: keyof JSX.IntrinsicElements;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
};

// Back-compat props (deprecated): Index0..Index10, NumberOfOptions, TimeToChange, TimeToCross, Size, IsRandom, Color
export type LegacyProps = Partial<{
  NumberOfOptions: string | number;
  TimeToChange: string | number;
  TimeToCross: string | number;
  Size: keyof JSX.IntrinsicElements;
  IsRandom: string | boolean;
  Color: string;
  Index0: string;
  Index1: string;
  Index2: string;
  Index3: string;
  Index4: string;
  Index5: string;
  Index6: string;
  Index7: string;
  Index8: string;
  Index9: string;
  Index10: string;
}>;

function coerceNumber(value: unknown, fallback: number): number {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string') {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return fallback;
}

function coerceBooleanString(value: unknown, fallback: boolean): boolean {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') return value.toLowerCase() === 'true';
  return fallback;
}

function collectLegacyTexts(legacy: LegacyProps): string[] {
  const candidates: Array<[keyof LegacyProps, string | undefined]> = [
    ['Index0', legacy.Index0],
    ['Index1', legacy.Index1],
    ['Index2', legacy.Index2],
    ['Index3', legacy.Index3],
    ['Index4', legacy.Index4],
    ['Index5', legacy.Index5],
    ['Index6', legacy.Index6],
    ['Index7', legacy.Index7],
    ['Index8', legacy.Index8],
    ['Index9', legacy.Index9],
    ['Index10', legacy.Index10]
  ];
  return candidates
    .map(([, v]) => (typeof v === 'string' ? v : undefined))
    .filter((v): v is string => Boolean(v));
}

export type CombinedProps = MarqueeProps & LegacyProps;

export const Marquee: React.FC<CombinedProps> = (props) => {
  const legacyTexts = useMemo(() => collectLegacyTexts(props), [props]);
  const texts = props.texts && props.texts.length > 0 ? props.texts : legacyTexts;

  const changeIntervalMs = props.changeIntervalMs ?? coerceNumber(props.TimeToChange, 2000);
  const crossTimeMs = props.crossTimeMs ?? coerceNumber(props.TimeToCross, 8000);
  const random = props.random ?? coerceBooleanString(props.IsRandom, false);
  const as = props.as ?? props.Size ?? 'h3';
  const color = props.color ?? props.Color;

  const [currentIndex, setCurrentIndex] = useState(0);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  // Change text only after a full animation iteration so the user always
  // sees the string complete one full pass before switching.
  useEffect(() => {
    const el = spanRef.current;
    if (!el || !Array.isArray(texts) || texts.length === 0) return;

    const handleIteration = () => {
      if (texts.length <= 1) return;
      if (random) {
        const next = Math.floor(Math.random() * texts.length);
        setCurrentIndex(next);
      } else {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    };

    el.addEventListener('animationiteration', handleIteration);
    return () => {
      el.removeEventListener('animationiteration', handleIteration);
    };
  }, [texts, random]);

  const Tag = as as unknown as React.ElementType;
  const text = texts[currentIndex] ?? '';

  const containerStyle: React.CSSProperties = {
    margin: '0 auto',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    ...(props.style || {})
  };

  // Use the change interval as the animation duration if provided so the
  // animation iteration and text change are perfectly in sync.
  const effectiveDurationMs = Number(
    changeIntervalMs ?? crossTimeMs
  );

  const spanStyle: React.CSSProperties = {
    display: 'inline-block',
    paddingLeft: '100%',
    animation: `marquee ${effectiveDurationMs}ms linear infinite`,
    color: color,
    willChange: 'transform',
    transform: 'translate3d(0, 0, 0)',
    backfaceVisibility: 'hidden'
  };

  // Ensure keyframes exist at runtime if consumer hasn't defined them
  useEffect(() => {
    const styleId = '__marquee-react-dwyer-keyframes__';
    if (typeof document === 'undefined') return;
    if (document.getElementById(styleId)) return;
    const el = document.createElement('style');
    el.id = styleId;
    el.textContent = `@keyframes marquee { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-100%, 0, 0); } }`;
    document.head.appendChild(el);
  }, []);

  if (!Array.isArray(texts) || texts.length === 0) {
    return null;
  }

  return (
    <section id="marquee">
      <Tag style={containerStyle} className={props.className}>
        <span ref={spanRef} style={spanStyle}>{text}</span>
      </Tag>
    </section>
  );
};

export default Marquee;


