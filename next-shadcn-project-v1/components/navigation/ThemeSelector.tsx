'use client'
import {
  IconDeviceLaptop,
  IconMoon,
  IconSettings,
  IconSun,
} from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const ThemeSelector = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <button onClick={toggleTheme} className="flex gap-2 w-full">
      {theme === 'light' ? (
        <IconSun key="light" className="text-muted-foreground" />
      ) : theme === 'dark' ? (
        <IconMoon key="dark" className="text-muted-foreground" />
      ) : (
        <IconDeviceLaptop key="system" className="text-muted-foreground" />
      )}
      <p>{theme}</p>
    </button>
  )
}

export default ThemeSelector
