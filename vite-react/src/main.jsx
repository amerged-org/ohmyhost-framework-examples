import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);
  return (
    <main style={{ fontFamily: "system-ui", maxWidth: 560, margin: "4rem auto" }}>
      <h1>Vite + React example</h1>
      <p>
        Current path: <code>{window.location.pathname}</code>. A nested path such
        as /a/b serves this same page, so client-side routes survive a reload.
      </p>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
