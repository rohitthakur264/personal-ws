import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Rohit Thakur | ML Engineer · Data Scientist · AI Developer",
  description:
    "Portfolio of Rohit Thakur — Machine Learning Engineer, Data Scientist, and AI Developer skilled in PyTorch, LangChain, Computer Vision, RAG Systems, and MLOps. Based in Pune, India.",
  keywords: [
    "Rohit Thakur",
    "Machine Learning Engineer",
    "Data Scientist",
    "AI Developer",
    "Deep Learning",
    "PyTorch",
    "LangChain",
    "Computer Vision",
    "RAG",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Rohit Thakur", url: "https://github.com/rohitthakur264" }],
  creator: "Rohit Thakur",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Rohit Thakur | ML Engineer · Data Scientist · AI Developer",
    description:
      "Transforming data into intelligence — portfolio of Rohit Thakur, AI/ML engineer with expertise in deep learning, computer vision, LLMs, and MLOps.",
    siteName: "Rohit Thakur Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Thakur | ML Engineer · Data Scientist",
    description:
      "Portfolio of Rohit Thakur — AI/ML engineer skilled in deep learning, RAG systems, and data science.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
