import Dashbaord from '@/components/Dashbaord'
import Navbar from '@/components/Navbar'
import { getSession } from '@auth0/nextjs-auth0'
import React from 'react'

const LayoutPage =async ({children}:{children:React.ReactNode}) => {
  const session = await getSession();
   
  
  
  return (
    <div>
          <div className="h-64 w-full flex items-center bg-gradient-to-r from-blue-800  to-blue-500">
        <div className='text-white container  flex-wrap flex items-center justify-between'>
        <div className=' mt-2'>
        <h1 className=' font-medium tracking-widest'>Onspace Interiors</h1>
    <h2 className='text-3xl text-white'> Hii 👋 {session?.user?.nickname}</h2> 
    </div>
         
  <Navbar/>
     </div>
  
      </div>
      <Dashbaord/>
     {children}
    </div>
  )
}

export default LayoutPage
