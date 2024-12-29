 
import React from 'react'
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { QuoteRequestUsers } from '@/actions/SavedUser';
 

export const useGetAllQuoteRequests = () => {
    return useQuery({
      queryKey: ['useGetAllQuoteRequests'],
      queryFn: async () => {
        const result = await   QuoteRequestUsers();
        if (result.error) {
          throw new Error(result.error);
        }
        return result.users;
      },
    });
  };

 
