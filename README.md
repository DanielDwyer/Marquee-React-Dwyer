# marquee-react-dwyer

[![npm version](https://img.shields.io/npm/v/marquee-react-dwyer.svg)](https://www.npmjs.com/package/marquee-react-dwyer)
[![downloads](https://img.shields.io/npm/dm/marquee-react-dwyer.svg)](https://www.npmjs.com/package/marquee-react-dwyer)
[![license](https://img.shields.io/npm/l/marquee-react-dwyer.svg)](./LICENSE)

Modern, typed marquee component for React 16.8+ (Hooks). Ships ESM and CJS builds.

## Features

- Simple API: pass `texts` and timing props
- Works with SSR and client-side apps
- TypeScript types included
- Tree-shakeable ESM build
- Zero runtime deps beyond React

## Install

```bash
npm i marquee-react-dwyer
# or
pnpm add marquee-react-dwyer
# or
yarn add marquee-react-dwyer
```

Peer requirements:

- React >= 16.8

## Quick start

```tsx
import { Marquee } from 'marquee-react-dwyer';

export default function Example() {
  return (
    <Marquee
      texts={['Hey There ...', 'I was ...', 'looking for a marquee ...']}
      changeIntervalMs={2000}
      crossTimeMs={10000}
      random
      as="h1"
      color="red"
    />
  );
}
```

## Styling and keyframes

The component will automatically inject a default `@keyframes marquee` animation if one is not already present. To customize the easing or behavior, define your own keyframes in your global CSS to override the default:

```css
@keyframes marquee {
  0% {
    transform: translate(0, 0);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translate(-100%, 0);
    animation-timing-function: ease-out;
  }
}
```

## Props

- **texts**: `string[]` — Messages to cycle through. Required.
- **crossTimeMs**: `number` — Time (ms) for one full horizontal pass. Required.
- **changeIntervalMs**: `number` — Interval (ms) between text changes. Defaults to the same value as `crossTimeMs` if not provided.
- **random**: `boolean` — If true, texts are shown in random order. Defaults to `false`.
- **as**: `keyof JSX.IntrinsicElements` — HTML tag to render (e.g. `h1`, `p`). Defaults to `p`.
- **color**: `string` — Text color (CSS value). Optional.

TypeScript types are shipped with the package, so your editor will auto-complete these props.

## Accessibility

- Renders as semantic text (`as` prop)
- No automatic ARIA roles are added; set any additional attributes you need on the component

## Examples

- Live demo: [marquee-react-dwyer.surge.sh](https://marquee-react-dwyer.surge.sh/)

## Contributing

Issues and PRs are welcome. To work locally:

```bash
pnpm install # or npm/yarn
pnpm build
pnpm test
```

Please follow conventional commits and include tests for behavior changes.

### Run Storybook

```bash
pnpm storybook
# or
npm run storybook
# or
yarn storybook
```

Build a static Storybook site:

```bash
pnpm build-storybook
```

### Run tests

```bash
pnpm test
# or
npm test
# or
yarn test
```

## Versioning

This package follows semver. Breaking changes will bump the major version.

## License

MIT © Daniel P. Dwyer

## Release and publishing

Releases are automated via semantic-release when changes land on `main`.

- Commit messages should follow Conventional Commits (e.g., `feat:`, `fix:`) so semantic-release can determine the version bump.
- The GitHub Actions workflow builds and publishes to npm on successful release.

Required secret for publishing:

- `NPM_TOKEN`: An npm “Automation” access token (not an “Always” or “Read-only” token). Create at npmjs.com → Access Tokens → Generate → Automation, then add it to GitHub → Settings → Secrets and variables → Actions → New repository secret.

Manually retrying a release:

- Re-run the failed “Release” workflow run on `main`, or push a docs-only commit to `main` to trigger a new release run.
