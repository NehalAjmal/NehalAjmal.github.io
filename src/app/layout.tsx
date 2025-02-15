/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

import Script from 'next/script'
import Loader from '@components/ui/Loader'

const comfortaa = Comfortaa({ subsets: [ 'latin' ] })

export const metadata: Metadata = {
  title: ' Nehal Ajmal Portfolio',
  description: 'Nehal Ajmal\'s portfolio showcase, a skilled web developer. Built using Next.js, React, and TailwindCSS. Explore projects, skills, and contact info.',
  keywords: [
    'Portfolio',
    'Frontend Developer',
    'Web Developer',
    'React Projects',
    'Next.js',
    'TailwindCSS',
    'Nehal',  
    'Ajmal',
    'Nehal Ajmal',
  ],
  openGraph: {
    title: 'Nehal Ajmal Portfolio',
    description:
      'Nehal Ajmal\'s portfolio showcase, a skilled web developer. Built using Next.js, React, and TailwindCSS. Explore projects, skills, and contact info.',
    url: 'http://localhost:3000',
    siteName: 'Nehal Portfolio',
    images: [
      {
        url: 'http://localhost:3000/og.webp',
        width: 1200,
        height: 630,
        alt: 'Nehal Ajmal Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  const schema = {
    '@context': 'http://schema.org',
    '@type': 'Person',
    'name': 'Nehal Ajmal',
    'url': 'http://localhost:3000',
    'image': 'http://localhost:3000/og.webp',
    'description': 'Nehal Ajmal\'s portfolio showcase, a skilled web developer. Built using Next.js, React, and TailwindCSS. Explore projects, skills, and contact info.',
    'sameAs': [
      'https://www.linkedin.com/in/nehal-ajmal-a19839305/',
      'https://github.com/NehalAjmal'
    ],
    'jobTitle': 'Web Developer',  
    'mainEntityOfPage': 'http://localhost:3000'
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </head>
      <body className={`${comfortaa.className} relative w-screen overflow-x-hidden antialiased`}>
        <Script
          strategy="afterInteractive"
          src={'https://www.googletagmanager.com/gtag/js?id=G-KBJWQE1CZE'}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KBJWQE1CZE');
            `,
          }}
        />
        <Loader />
        <div id='background'></div>
        {children}
      </body>
    </html>
  )
}