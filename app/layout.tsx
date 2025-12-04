// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HireSenseAI",
  description: "AI-powered voice interview system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ⭐ Load Vapi Web SDK */}
        <script
          src="https://unpkg.com/@vapi-ai/web@latest/dist/vapi.min.js"
          defer
        ></script>

        {/* ⭐ Make environment variables available to browser */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.NEXT_PUBLIC_VAPI_PUBLIC_KEY = "${process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY}";
              window.NEXT_PUBLIC_VAPI_ASSISTANT_ID = "${process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID}";
            `,
          }}
        />
      </head>

      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
