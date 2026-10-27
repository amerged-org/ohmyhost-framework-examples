import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: () => (
    <main>
      <h1>About this example</h1>
      <p>A second route, so direct loads and client navigation can both be checked.</p>
      <Link to="/">Back home</Link>
    </main>
  ),
});
