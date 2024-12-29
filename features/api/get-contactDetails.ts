 
import React from 'react'
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { GetContactDetails } from '@/actions/ContactDetails';

export const useGetContactList = () => {
    return useQuery({
      queryKey: ['useGetContactList'],
      queryFn: async () => {
        const result = await  GetContactDetails();
        if (result.error) {
          throw new Error(result.error);
        }
        return result.contactList;
      },
    });
  };

 
