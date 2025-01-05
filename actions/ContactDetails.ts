'use server'
 
 
 
 
 
import { db } from "@/lib/db";
 
  
 
export const   GetContactDetails = async ()=>{
      
    try {

   
   
      const contactList=  await db.contactDetails.findMany({});
       
      return {success:"true", contactList} 
       
      } catch (error) {
        console.log(error);
        return {error:"true"}
      
        
  
      }
}
