import { IconUfo } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'

const Topnav = () => {
  return (
    <div className=''>
        <div className='flex items-center gap-1'>
            <IconUfo className='w-8 h-8' />
            <h2 className='text-lg font-bold'>SupabaseRBAC</h2>
        </div>
        <div>
            
            <Image src="/profile.avif" alt="user image" width={1000} height={1000} />
        </div>
    </div>
  )
}

export default Topnav