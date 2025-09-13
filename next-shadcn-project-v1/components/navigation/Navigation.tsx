import React from 'react'
import Sidebar from './Sidebar'
import Topnav from './Topnav'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

const Navigation = async () => {
 
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }
  return (
    <div>
      <Topnav data={data.claims}/>
      <Sidebar />
    </div>
  )
}

export default Navigation