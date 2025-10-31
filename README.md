# marquee-react-dwyer

[![npm version](https://img.shields.io/npm/v/marquee-react-dwyer.svg)](https://www.npmjs.com/package/marquee-react-dwyer)

[![Downloads](https://img.shields.io/npm/dm/marquee-react-dwyer.svg)](https://www.npmjs.com/package/marquee-react-dwyer)

[![Downloads](https://img.shields.io/npm/dt/marquee-react-dwyer.svg)](https://www.npmjs.com/package/marquee-react-dwyer)

[![Downloads](https://img.shields.io/npm/dw/marquee-react-dwyer.svg)](https://www.npmjs.com/package/marquee-react-dwyer)

[![License](https://img.shields.io/npm/l/marquee-react-dwyer.svg)](LICENSE)

Modern, typed marquee component for React 16.8+ (Hooks). Ships ESM and CJS builds.

## Features

- Simple API: pass `texts` and timing props
- Works with SSR and client-side apps
- TypeScript types included
- Tree-shakeable ESM build
- Zero runtime deps beyond React

## Install

```bash
npm install marquee-react-dwyer
```

Peer requirements:

- React >= 16.8
- React DOM >= 16.8

## Quick Start

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

The component will automatically inject a default `@keyframes mrd-marquee` animation if one is not already present in your stylesheets. The component checks existing stylesheets to avoid overriding your custom keyframes. To customize the easing or behavior, define your own keyframes in your global CSS using the same name:

```css
@keyframes mrd-marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
```

## Props

- **texts**: `string[]` — Messages to cycle through. Required.
- **crossTimeMs**: `number` — Time (ms) for one full horizontal pass. Used as fallback animation duration if `changeIntervalMs` is not provided. Defaults to `8000`.
- **changeIntervalMs**: `number` — Interval (ms) between text changes. Also controls the animation duration to keep text changes and animation iterations in sync. Defaults to `2000`.
- **random**: `boolean` — If true, texts are shown in random order. Defaults to `false`.
- **as**: `keyof JSX.IntrinsicElements` — HTML tag to render (e.g. `h1`, `p`). Defaults to `h3`.
- **color**: `string` — Text color (CSS value). Optional.
- **style**: `React.CSSProperties` — Inline styles for the container element. Optional.
- **className**: `string` — CSS class name for the container element. Optional.

Additionally, all native HTML attributes for the element specified by `as` are accepted and passed through (e.g., `aria-label`, `role`, `title`, `data-*` attributes).

TypeScript types are shipped with the package, so your editor will auto-complete these props.

**Note**: Legacy props (Index0–Index10, TimeToChange, TimeToCross, Size, IsRandom, Color) are supported for backward compatibility but deprecated.

## Accessibility

- Renders as semantic text (`as` prop)
- No automatic ARIA roles are added; set any additional attributes (e.g., `aria-label`, `role`, `title`) you need on the component — all native HTML attributes are passed through
- The component is wrapped in a `<section>` element with a unique generated `id` and class `marquee-react-dwyer` to avoid duplicate IDs when multiple instances are used

## Examples

- Live demo: [marquee-react-dwyer.surge.sh](https://marquee-react-dwyer.surge.sh/)

## Contributing

Issues and PRs are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on:

- Branch naming conventions (`feat/`, `fix/`, `chore/`, etc.)
- Commit message conventions (Conventional Commits)
- Versioning and release process

**Quick start:**

```bash
npm install
npm test
```

**Important:** This project uses semantic-release, so commit messages must follow [Conventional Commits](https://www.conventionalcommits.org/) (e.g., `feat:`, `fix:`) to enable automatic versioning and publishing.

### Run tests

```bash
npm test
```

### Lint code

```bash
npm run lint
```

### Build

```bash
npm run build
```

### Run Storybook

```bash
npm run storybook
```

Build a static Storybook site:

```bash
npm run build-storybook
```

## Versioning

This package follows semver. Breaking changes will bump the major version.

## License

MIT © Daniel P. Dwyer (https://www.linkedin.com/in/inmocnideknil/)

## Release and publishing

Releases are automated via semantic-release when changes land on `main`.

- Commit messages **must** follow [Conventional Commits](https://www.conventionalcommits.org/) (e.g., `feat:`, `fix:`) so semantic-release can determine the version bump.
- The GitHub Actions workflow builds and publishes to npm on successful release.
- **Never manually update `package.json` version** or create Git tags - semantic-release handles this automatically.

### Version Bump Rules

- **PATCH** (6.0.1 → 6.0.2): `fix:` commits
- **MINOR** (6.0.1 → 6.1.0): `feat:` commits
- **MAJOR** (6.0.1 → 7.0.0): Commits with `BREAKING CHANGE:` footer or `feat!:`/`fix!:` types

**Note**: Versioning starts from `6.0.1` to avoid collisions with previous `5.x.x` and `6.0.0` versions published to npm. Semantic-release automatically ensures the published version is never lower than versions already on npm.

### Required Secrets

- `NPM_TOKEN`: An npm "Automation" access token (not an "Always" or "Read-only" token). Create at npmjs.com → Access Tokens → Generate → Automation, then add it to GitHub → Settings → Secrets and variables → Actions → New repository secret.

### Troubleshooting

If you notice version mismatches between `package.json`, Git tags, and npm:

1. Verify GitHub Actions release workflow completed successfully
2. Ensure no manual publishes occurred
3. Check that all commits follow Conventional Commits format
4. Re-run the failed "Release" workflow on `main`, or push a docs-only commit (e.g., `fix: docs`) to trigger a new patch release
