# Contributing Guidelines

Thank you for contributing to `marquee-react-dwyer`! This document outlines the conventions and practices we follow to maintain code quality and ensure smooth releases.

## Branch Naming Conventions

All branches should follow the Conventional Commits prefix pattern:

- **`feat/`** - New features or enhancements
  - Example: `feat/smoother-iteration-marquee`, `feat/newspaper-demo`
  
- **`fix/`** - Bug fixes
  - Example: `fix/demo-ticker-stability`, `fix/publish-trigger`
  
- **`chore/`** - Maintenance tasks, dependency updates, configuration changes
  - Example: `chore/modernize`, `chore/demo-pages`, `chore/update-readme`
  
- **`docs/`** - Documentation only changes
  - Example: `docs/readme-update`, `docs/api-documentation`
  
- **`refactor/`** - Code refactoring without changing functionality
  - Example: `refactor/component-structure`
  
- **`test/`** - Adding or updating tests
  - Example: `test/add-unit-tests`
  
- **`style/`** - Code style changes (formatting, white-space, etc.)
  - Example: `style/prettier-format`

### Branch Naming Format

- Use lowercase letters
- Use hyphens (`-`) or forward slashes (`/`) to separate words
- Keep names descriptive but concise
- Prefix with the appropriate type (`feat/`, `fix/`, etc.)

**Good examples:**
- `feat/add-custom-styling-prop`
- `fix/marquee-animation-flicker`
- `chore/update-dependencies`

**Bad examples:**
- `new-feature` (missing prefix)
- `FEATURE_ADD_PROP` (uppercase, wrong separator)
- `fix` (too vague)

## Commit Message Conventions

This project uses [Conventional Commits](https://www.conventionalcommits.org/) to enable automated versioning via semantic-release.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

The `<type>` must be one of the following:

- **`feat`**: A new feature
- **`fix`**: A bug fix
- **`docs`**: Documentation only changes
- **`style`**: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- **`refactor`**: A code change that neither fixes a bug nor adds a feature
- **`perf`**: A code change that improves performance
- **`test`**: Adding missing tests or correcting existing tests
- **`chore`**: Changes to the build process or auxiliary tools and libraries
- **`ci`**: Changes to CI configuration files and scripts

### Scope (Optional)

The `<scope>` is optional and should be the area of the codebase affected:
- Component name (e.g., `marquee`, `demo`)
- Module or feature area

### Subject

- Use the imperative, present tense: "change" not "changed" nor "changes"
- Don't capitalize the first letter
- No dot (.) at the end
- Maximum 50 characters

### Body (Optional)

- Provide detailed explanation of what and why vs. how
- Wrap at 72 characters
- Use present tense, imperative mood

### Footer (Optional)

- Reference issues: `Closes #123`, `Fixes #456`
- Breaking changes: `BREAKING CHANGE: description`

### Examples

**Good commit messages:**
```
feat(marquee): add custom animation duration prop

Allows users to specify custom animation durations per marquee instance,
enabling more granular control over animation timing.

Closes #42
```

```
fix(demo): resolve marquee height flicker issue

Fixed CSS overflow and height calculation that caused visual flickering
when text changed during animation.

Fixes #38
```

```
chore: update dependencies to latest versions
```

```
docs: clarify prop usage in README
```

**Bad commit messages:**
```
update stuff
```
```
Fixed bug
```
```
feat: Added new feature!!! (too long, wrong tense, punctuation)
```

## Versioning

This project uses [semantic versioning](https://semver.org/) (semver) and automated releases via [semantic-release](https://semantic-release.gitbook.io/).

### How Version Bumps Work

Version bumps are automatically determined by commit messages on the `main` branch:

- **MAJOR** (1.0.0 → 2.0.0): Breaking changes
  - Triggered by commits with `BREAKING CHANGE:` in the footer
  - Or commits with type `feat!` or `fix!`

- **MINOR** (1.0.0 → 1.1.0): New features (backward compatible)
  - Triggered by commits with type `feat:`

- **PATCH** (1.0.0 → 1.0.1): Bug fixes (backward compatible)
  - Triggered by commits with type `fix:`
  - Also triggered by other types like `docs:`, `chore:`, `style:`, etc.

### Release Process

1. Commits are pushed to `main` branch
2. GitHub Actions workflow runs `semantic-release`
3. `semantic-release` analyzes commit messages since last release
4. If changes are detected:
   - Version is bumped according to commit types
   - CHANGELOG.md is updated
   - A new Git tag is created (e.g., `v1.2.3`)
   - Package is published to npm
   - GitHub release is created

### Important Notes

- **Never manually update `package.json` version** - semantic-release handles this
- **Never manually create Git tags** - semantic-release creates them
- **Follow commit message conventions** - this determines version bumps
- If you need to trigger a patch release (e.g., for docs), use: `fix: docs` or `docs: update documentation`

### Version History Note

**Important**: This package previously had versions up to `5.9.90` and `6.0.0` published to npm. The current versioning starts from `6.0.1` to avoid version collisions. The next release will be determined by semantic-release based on:
- The highest version currently published on npm
- The commit message types since the last release

Semantic-release will automatically ensure that no version lower than what exists on npm is published.

### Troubleshooting Version Issues

If you notice version mismatches between:
- `package.json` version
- Git tags
- npm published versions

Check the following:
1. Ensure all releases go through semantic-release (no manual publishes)
2. Verify GitHub Actions release workflow completed successfully
3. Check that `package.json` wasn't manually edited
4. Review commit history for non-conventional commit messages that might have broken the release flow
5. Verify that semantic-release detected the correct highest version on npm (should be at least `6.0.0`)

## Workflow

1. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feat/your-feature-name
   ```

2. **Make your changes** and commit following the commit message conventions:
   ```bash
   git commit -m "feat(scope): your commit message"
   ```

3. **Push and create a Pull Request**:
   ```bash
   git push origin feat/your-feature-name
   ```

4. **Pull Request guidelines**:
   - Ensure all tests pass (`npm test`)
   - Ensure linting passes (`npm run lint`)
   - Update documentation if needed
   - Reference any related issues

5. **After merge to `main`**:
   - semantic-release will automatically:
     - Analyze commits
     - Update version if needed
     - Publish to npm
     - Create GitHub release

## Development Setup

```bash
# Install dependencies
npm install

# Run tests
npm test

# Lint code
npm run lint

# Build
npm run build

# Run Storybook locally
npm run storybook
```

## Questions?

If you have questions about these conventions or need clarification, please open an issue on GitHub.

