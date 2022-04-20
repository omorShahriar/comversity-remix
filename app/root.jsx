import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import { MantineProvider } from "@mantine/core";

import styles from "~/styles/app.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap",
    },
  ];
}
export function meta() {
  return {
    charset: "utf-8",
    title: "Comversity App",
    viewport: "width=device-width,initial-scale=1",
  };
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="font-raleway text-themeGrey-default">
        <MantineProvider
          theme={{
            fontFamily: "Raleway, sans-serif",
            colors: { themeGray: ["#7c8076"] },
          }}
        >
          {" "}
          <Outlet />
        </MantineProvider>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
