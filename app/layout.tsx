import "./globals.css";

export const metadata = {
  title: "Samuel Gutierrez | Software Developer",
  description: "Portfolio of Samuel Gutierrez, a software development student building full-stack applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
