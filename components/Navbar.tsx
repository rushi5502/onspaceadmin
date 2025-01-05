import Link from 'next/link'
import React from 'react'
import { HiOutlineMenuAlt1 } from "react-icons/hi";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from './ui/button'
const Navbar = () => {
  const handleLogout = () => {
    window.location.href = "/api/auth/logout?returnTo=/"; // Redirect to logout with returnTo param
  };
  return (
    <div>
     <div className=' md:flex items-center gap-6 hidden '>
     <Link href={"/"}>Dashboard</Link>
    <Link href={"/view-contact"}>View-Contacts</Link>
    <Link href={"/customers"}>Customers</Link>
    <Link href={"#"} onClick={()=>{handleLogout()}}>Logout</Link>
    </div>

    <div className=' md:hidden block  fixed top-5 left-5'>
    <Sheet  >
      <SheetTrigger asChild>
      <HiOutlineMenuAlt1  size={30} className=' cursor-pointer'/>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader className='text-start items-start'>
          <SheetTitle>ATHAREINTERIOR</SheetTitle> 
        </SheetHeader>
        <div className=' mt-8 flex  flex-col items-start gap-6 md:hidden '>
    <Link href={"/view-contact"}>View-Contacts</Link>
    <Link href={"/use-contact-details"}>Customers</Link>
    <Link href={"#"} onClick={()=>{handleLogout()}}>Logout</Link>
    </div>
       </SheetContent>
    </Sheet>
    </div>
    </div>
  )
}

export default Navbar
