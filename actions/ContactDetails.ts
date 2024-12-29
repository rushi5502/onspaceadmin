'use server'
 
 
 
 
 
import { db } from "@/lib/db";
 
  
 
export const   GetContactDetails = async ()=>{
      
    try {
        
   console.log("hii");
   
   
      const contactList=  await db.contactDetails.findMany({});
       
      return {success:"true", contactList} 
 
      } catch (error) {
        return {error:"true"} 
  
      }
}