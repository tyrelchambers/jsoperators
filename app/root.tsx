import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/app.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "JSOperators",
  viewport: "width=device-width,initial-scale=1",
  description:
    "JSOperators is a place to find Javascript operator examples and explanations, quickly.",
});

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
