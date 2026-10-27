import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <main>
      <h1>TanStack Start example</h1>
      <p>This page was prerendered at build time.</p>
      <Link to="/about">Client-side link to /about</Link>
    </main>
  ),
});
