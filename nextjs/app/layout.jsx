export const metadata = { title: "Next.js example for ohmyho.st" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui", maxWidth: 560, margin: "4rem auto" }}>
        {children}
      </body>
    </html>
  );
}
