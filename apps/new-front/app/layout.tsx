import { Header } from "@repo/ui/header";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />
          <h1>This is the Next.js front end app</h1>

          <hr />
          {children}
        </div>
      </body>
    </html>
  );
}
