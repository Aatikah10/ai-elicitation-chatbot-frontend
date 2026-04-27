import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "REQ·AI — AI Requirement Elicitation Chatbot",
  description: "Smart, emotion-aware chatbot to gather accurate software requirements",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  );
}
