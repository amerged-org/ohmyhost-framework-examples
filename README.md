# ohmyho.st framework examples

Three minimal apps used by the [ohmyho.st framework guides](https://ohmyho.st/frameworks/nextjs). Each one builds locally and passes `ohmyhost init --dry-run`.

| Folder | Framework | Mode | Guide |
| --- | --- | --- | --- |
| `nextjs/` | Next.js 16.4 App Router | Worker (OpenNext), server-rendered page and route handler | https://ohmyho.st/frameworks/nextjs |
| `vite-react/` | Vite 8 + React 19 | Static | https://ohmyho.st/frameworks/vite |
| `tanstack-start/` | TanStack Start 1.169 | Static (prerendered) | https://ohmyho.st/frameworks/tanstack-start |

## Check one locally

```sh
cd vite-react          # or nextjs, tanstack-start
pnpm install --frozen-lockfile --ignore-scripts
pnpm run build
```

## Ask ohmyho.st to inspect one (no sign-in, nothing is uploaded)

From the repository root:

```sh
ohmyhost init --root vite-react --dry-run --json
```

`--root` names the application folder because this repository holds three apps. For a repository with one app at its root, run `ohmyhost init --dry-run --json`.

## What this repository does and does not prove

- Proven: the apps build with the pinned versions, and the offline inspection reports each framework version as admitted with no blockers.
- Not proven here: a hosted build or a live URL. The inspection itself says the real build runs only on ohmyho.st.

No secrets, databases, accounts or customer data are used. MIT licensed.
