import { connection } from "next/server";

export default async function Home() {
  // Reading the request makes this page render for each visitor.
  await connection();
  const renderedAt = new Date().toISOString();
  return (
    <main>
      <h1>Next.js example</h1>
      <p>
        Rendered on the server at <code>{renderedAt}</code>. Reload to see it
        change. The route handler is at <a href="/api/hello">/api/hello</a>.
      </p>
    </main>
  );
}
