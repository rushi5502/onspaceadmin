'use server' 
import { db } from "@/lib/db"; 

export const   QuoteRequestUsers = async ()=>{
    try {  
       const users = await db.user.findMany({}); 
      return {success:"true",users } 
 
      } catch (error) {
        console.log(error);
     return {error:"true"}
      }
}