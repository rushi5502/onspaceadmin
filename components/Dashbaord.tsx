'use client'
import React, { useEffect } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Activity, CreditCard, IndianRupee, Users } from 'lucide-react'
import { useGetContactList } from '@/features/api/get-contactDetails'
 
import Link from 'next/link'
import Navbar from './Navbar'
import { useGetAllQuoteRequests } from '@/features/api/get-userqouterequest'
const Dashbaord = () => {


 const {data:contactUsers} = useGetContactList();
 const { data:qouationRequest} =  useGetAllQuoteRequests();
      

 console.log(qouationRequest?.length);
 console.log(contactUsers?.length);
  return (
    <div>
      
   

      <div className=' container mt-2'>
        <h2>DashBoard</h2>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3"> 
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                No QuoteRequest
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+{qouationRequest?.length}</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">No Contacts</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+{contactUsers?.length}</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+{     (contactUsers && qouationRequest)  && contactUsers?.length + qouationRequest?.length}</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div>
       
      </div>
    </div>
  )
}

export default Dashbaord
