import React from 'react'

import { initGA, trackPageView } from '@mersocarlin.com/utils/analytics'

import Link from './Link'
import SocialList from './SocialList'
import ThemeSwitcher from './ThemeSwitcher'

interface LayouProps {
  appVersion: string
  centerContent?: boolean
  children: React.ReactNode
  gaId: string
}

export default function Layout({
  appVersion,
  centerContent,
  children,
  gaId,
}: LayouProps) {
  React.useEffect(() => {
    initGA(gaId)
    trackPageView(`${window.location.pathname}${window.location.search}`)
  }, [])

  return (
    <div
      className={`flex flex-col bg-gray-50 dark:bg-gray-800 ${
        centerContent ? 'h-screen' : ''
      }`}
    >
      <header className="bg-white dark:bg-gray-700 flex items-center justify-between p-3 shadow-md">
        <Link
          colorStyles="text-gray-600 hover:text-gray-600 visited:text-gray-600 dark:text-gray-300"
          href="/"
        >
          @mersocarlin
        </Link>

        <div className="flex items-center">
          <div className="mr-2">
            <Link
              colorStyles="text-gray-600 hover:text-gray-600 visited:text-gray-600 dark:text-gray-300"
              href="/blog"
            >
              Blog
            </Link>
          </div>

          <ThemeSwitcher />
        </div>
      </header>

      <main className="flex-1 my-8 m-auto w-full lg:max-w-screen-lg md:max-w-screen-md">
        {children}
      </main>

      <footer className="bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-200 flex items-center justify-between flex-col md:flex-row text-sm p-3 border-t-2 dark:border-gray-700">
        <div className="mb-4 md:mb-0">
          {`Hemerson Carlin © ${new Date().getFullYear()} - v${appVersion}`}
        </div>

        <SocialList />
      </footer>
    </div>
  )
}
