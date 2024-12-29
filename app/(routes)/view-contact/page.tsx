'use client'
import React from 'react'
import dynamic from 'next/dynamic';
import { DataTable } from './data-table';
 
 
 
import { Loader2 } from 'lucide-react';
import { TbDatabaseOff } from "react-icons/tb";
import { useGetContactList } from '@/features/api/get-contactDetails';
import { columns } from './column';
 

 const ContactDetailsPage = () => {
 
  


  const {data,isLoading} =  useGetContactList();
 
  
     
  

    if(!data){
      return <div className='h-full w-full '>
        <div className="flex items-center justify-center"> 
                 <TbDatabaseOff size={22}/>
                  </div>
        </div>
    }
 
  return (
    <div className="    px-2   py-10">
          <h2>Customer Contact with you</h2>
      <DataTable columns={columns} data={data }/>
    </div>
  )
}

export default ContactDetailsPage