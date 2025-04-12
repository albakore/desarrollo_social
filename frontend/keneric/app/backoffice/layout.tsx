import { Navbar } from '@/components/reusable/navbar/v1/navbar'
import { SubNavbar } from '@/components/reusable/subnavbar/v1/subnavbar'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { ReactFormState } from 'react-dom/client'

export default function Layout({children} : {children : React.ReactNode}) {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  )
}
