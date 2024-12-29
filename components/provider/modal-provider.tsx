'use client'

import { useEffect, useState } from "react"
 
 
 
 
 
 
  

const ModalProvider = ()=>{

const [isMounted,setisMounted] = useState(false)


useEffect(()=>{
setisMounted(true);
},[setisMounted])

if(!isMounted){
    return null
}

    return(<>
 
 
    </>)
}

export default ModalProvider;