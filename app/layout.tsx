import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/provider/client-provider";
import ModalProvider from "@/components/provider/modal-provider";
import { UserProvider } from '@auth0/nextjs-auth0/client';
const font = Poppins({ weight:['200','400','700','900'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Onspace Admin",
  description: "admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <UserProvider>
      <ClientProviders>  
            {children} 
            <ModalProvider/>
        </ClientProviders>
        </UserProvider>
     
        </body>
    </html>
  );
}
