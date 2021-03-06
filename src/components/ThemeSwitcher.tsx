import React, { useEffect, useState } from 'react'

import { useTheme } from '@mersocarlin.com/theme/ThemeProvider'

function Sun() {
  return (
    <svg
      className="w-4 h-4 mersocarlin-text-gray mx-auto"
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="5" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.4}
        d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
      />
    </svg>
  )
}

function Moon() {
  return (
    <svg
      className="w-4 h-4 mersocarlin-text-gray mx-auto"
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      />
    </svg>
  )
}

function ThemeIcon() {
  const { theme } = useTheme()

  return theme === 'dark' ? <Sun /> : <Moon />
}

export default function ThemeSwitcher() {
  const { onUpdateTheme, theme } = useTheme()
  const [clientLoaded, setClientLoaded] = useState(false)

  useEffect(() => {
    const body = document.querySelector('body')
    if (!body) {
      return
    }

    setClientLoaded(true)
  }, [])

  return (
    <button
      aria-label="Toggle light/dark theme"
      className={`rounded-full bg-gray-300 dark:bg-gray-600 h-8 w-8 focus:outline-none inline-block ${
        clientLoaded ? 'cursor-pointer' : ''
      }`}
      onClick={() => onUpdateTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {clientLoaded ? <ThemeIcon /> : <div className="h-4" />}
    </button>
  )
}
