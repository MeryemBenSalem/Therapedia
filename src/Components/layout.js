import "./globals.css";

export const metadata = {
  description: "Create a custom calendar with date-fns",
  title: {
    default: "Custom-Calendar",
    template: "%s | Custom-Calendar",
  },
  viewport: "width=device-width, initial-scale=1",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "typescript",
    "tailwind",
    "calendar",
    "date-fns"
  ],
  authors: [{ name: "" }],
  icons: {
    icon: '/calendar-search.png',
  },
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>{children}</body>
      </html>
  );
}
