import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import { ThemeProvider } from '../context/ThemeContext';
import { LanguageProvider } from '../context/LanguageContext';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NexusFlow — High-Performance Cloud Edge Architecture',
  description: 'Deploy, orchestrate, and scale mission-critical cloud applications with sub-10ms global edge latency and 100/100 Core Web Vitals.',
  keywords: ['Edge Computing', 'Next.js', 'Cloud Architecture', 'Serverless', 'WebAssembly', 'Lighthouse 100'],
  authors: [{ name: 'NexusFlow Engineering' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${cairo.variable} dark`} suppressHydrationWarning>
      <head>
        {/* Flash-Free Theme Initialization Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('nexusflow_theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storedTheme === 'light' || (!storedTheme && !prefersDark)) {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                  var storedLang = localStorage.getItem('nexusflow_lang');
                  if (storedLang === 'ar') {
                    document.documentElement.lang = 'ar';
                    document.documentElement.dir = 'rtl';
                  } else {
                    document.documentElement.lang = 'en';
                    document.documentElement.dir = 'ltr';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-surface-light dark:bg-surface-dark text-slate-800 dark:text-slate-100 font-sans min-h-screen antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-200">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
