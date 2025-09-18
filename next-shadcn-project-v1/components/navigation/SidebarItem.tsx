'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { IconSun, IconMoon, IconDeviceLaptop } from '@tabler/icons-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface ItemProps {
  icon?: React.ReactNode
  title?: string
  isThemeSelector?: boolean
  link?: string
}

const SidebarItem = ({ icon, title, isThemeSelector = false, link  }: ItemProps) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
    const pathname = usePathname()
  

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

  const baseClasses = 'flex gap-2 p-2 items-center cursor-pointer rounded'

const isSelected = link ? pathname === link || pathname.startsWith(link + '/') : false;

const selectedClasses = isSelected
  ? 'bg-primary text-primary-foreground' 
  : 'text-muted-foreground hover:text-foreground hover:bg-accent';
  if (isThemeSelector) {
    return (
      <li className={`${baseClasses} ${selectedClasses}`}>
        <button
          onClick={toggleTheme}
          className="flex gap-2 w-full items-center cursor-pointer"
        >
          {theme === 'light' ? (
            <IconSun key="light" />
          ) : theme === 'dark' ? (
            <IconMoon key="dark" />
          ) : (
            <IconDeviceLaptop key="system" />
          )}
          <p>{theme}</p>
        </button>
      </li>
    )
  }

  return (
    <li className={`${baseClasses} ${selectedClasses}`}>
      {icon}
      <Link href={link || '#'} className="flex-1">{title}</Link>
    </li>
  )
}

export default SidebarItem