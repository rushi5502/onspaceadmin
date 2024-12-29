"use client"
import { ArrowUpDown, Delete, MoreHorizontal } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
 
import { ColumnDef } from "@tanstack/react-table"
 
import Image from "next/image"
 
   
 
 

 
 

 
 
 
 

export const columns: ColumnDef<any>[] = [

  

    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
   
 
  {
    accessorKey: "Name",
    header: "Name",
    cell: ({ row }) => { 
      const user = row.original; 
      return <div>{user.name}</div>;
    }
  },

   
  {
    accessorKey: "Email",
    header: "Email",
    cell: ({ row }) => { 
      const user = row.original; 
      return <div>{user.email}</div>;
    }
  },

   
  {
    accessorKey: "Phone",
    header: "Phone",
    cell: ({ row }) => { 
      const user = row.original; 
      return <div>{user.phone}</div>;
    }
  },

  {
    accessorKey: "Subject",
    header: "Subject",
    cell: ({ row }) => { 
      const user = row.original; 
      return <div>{user.subject}</div>;
    }
  },
  {
    accessorKey: "Message",
    header: "Message",
    cell: ({ row }) => { 
      const user = row.original; 
      return <div>{user.message}</div>;
    }
  },



  
]