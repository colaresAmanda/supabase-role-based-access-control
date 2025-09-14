'use client'
import { createClient } from '@/utils/supabase/client'
import { IconUfo } from '@tabler/icons-react'
import Image from 'next/image'
import { redirect, usePathname, useRouter } from 'next/navigation'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import Link from 'next/link'

const Topnav = ({ data }: any) => {
  const pathname = usePathname()
  const router = useRouter();

  // Return nothing if path includes /auth
  if (pathname?.includes('/auth')) {
    return null
  }

   const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  return (
    <div className="flex  justify-between border-b-1 py-2 px-4 fixed top-0 w-full z-40 bg-background">
     <div></div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex  gap-2">
            <div className="flex flex-col text-right leading-tight">
              <p className="text-sm font-medium">{data.user_metadata.email}</p>
              <p className="text-xs text-muted-foreground capitalize">
                {data.user_role}
              </p>
            </div>

            <Image
              src="/profile.avif"
              alt="user image"
              className="w-10 h-10 rounded-full object-cover"
              width={1000}
              height={1000}
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button onClick={logout}>
              Logout
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Topnav
