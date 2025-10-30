import React from 'react';

type MarqueeProps = {
    texts: string[];
    changeIntervalMs?: number;
    crossTimeMs?: number;
    random?: boolean;
    as?: keyof JSX.IntrinsicElements;
    color?: string;
    style?: React.CSSProperties;
    className?: string;
};
type LegacyProps = Partial<{
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
type CombinedProps = MarqueeProps & LegacyProps;
declare const Marquee: React.FC<CombinedProps>;

export { Marquee, type MarqueeProps };
