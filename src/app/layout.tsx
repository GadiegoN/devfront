import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ScrollArea } from "@/components/ui/scroll-area";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Front-End",
  description: "Freelancer front-end",
  keywords: ["dev", "front", "end", "frontend", "desenvolvimento"],
  openGraph: {
    title: "Freelancer front-end",
    images: [`${process.env.NEXT_PUBLIC_URL}/background.jpg`]
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}

          <div className="w-full flex border-t-2 flex-col py-8 items-center bg-secondary">
            <p>Todos os direitos reservados <strong className="text-primary">@{`${new Date().getFullYear()}`}</strong></p>
            <p>Desenvolvido por <a target="_blank" href="https://gadiego.com.br" className="text-primary font-bold">Gadiego Nogueira</a></p>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
