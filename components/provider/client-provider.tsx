// components/ClientProviders.tsx
'use client'; 
import React from 'react';
  
import { Toaster } from "@/components/ui/toaster";
import QueryProvider from './query-provider'; 
interface ClientProvidersProps {
  children: React.ReactNode; 
}

export const ClientProviders = ({ children }: ClientProvidersProps) => {
 

  return (
 
      <QueryProvider >
        {children}
        <Toaster />  
      </QueryProvider>
 
  );
};