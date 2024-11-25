import type { Metadata, Viewport } from "next";
import { Big_Shoulders_Inline_Text, Big_Shoulders_Text } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import { Providers } from './providers';
import React from "react";

const bigShouldersInlineText = Big_Shoulders_Inline_Text({
  variable: "--font-big-shoulders-inline-text",
  subsets:['latin']
});

const bigShouldersText = Big_Shoulders_Text({
  variable: "--font-big-shoulders-text",
  subsets:['latin']
});

/*
  The metadata is rendered in the metadata of the home page. 
  The page is given a title and description.
*/
export const metadata: Metadata = {
  title: "Kirsten Phillips",
  description: "Portfolio website of Kirsten Phillips, full stack web developer"
};
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

/*
  The root layout shows UI that is shared across multiple routes.
  On navigation, layouts preserve state, remain interactive, and do not re-render. 
  Layouts can also be nested.
  The root layout applies to all routes. It is required and must contain the <html> and <body> tags.
  This layout will wrap layouts at lower parts of the folders structure.
  When a layout and a page are defined in the same folder, the layout wraps the page.
*/
export default function RootLayout({
  // The children prop is populated with a child layout if it exists or a page during rendering.
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {/* Include shared UI here e.g. a header or sidebar */}
      <body className={`${bigShouldersInlineText.variable} ${bigShouldersText.variable} antialiased`} >
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
