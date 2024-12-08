import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Theme, Flex } from '@radix-ui/themes'
import Link from 'next/link'
import { MorphoIcon, ArrowLink } from '@/components/Icons'
import { REPO } from '@/constants'
import { Provider } from './provider'

import '@radix-ui/themes/styles.css'
import './globals.css'
import styles from './layout.module.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Morpho explorer',
  description: 'Morpho vault explorer app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <link
        id="favicon"
        rel="icon"
        href="https://cdn.morpho.org/v2/assets/icons/butterfly-dark.svg"
      ></link>
      <body>
        <Theme>
          <Flex asChild direction="row" justify="between" align="center">
            <nav className={styles.nav}>
              <Link href="/">
                <Flex align="center" gap="32px">
                  <MorphoIcon /> Morpho Test
                </Flex>
              </Link>
              <Flex>
                <a href={REPO} target="_blank" className={styles.navAction}>
                  Go to Github Repo <ArrowLink width="20px" />
                </a>
              </Flex>
            </nav>
          </Flex>
          <Flex asChild direction="column" align="center" justify="center">
            <main className={styles.main}>
              <Provider>{children}</Provider>
            </main>
          </Flex>
        </Theme>
      </body>
    </html>
  )
}
