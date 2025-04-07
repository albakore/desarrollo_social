import { Navbar } from '@/components/reusable/navbar/v1/navbar'
import { SubNavbar } from '@/components/reusable/subnavbar/v1/subnavbar'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { ReactFormState } from 'react-dom/client'
import { Bs0Circle } from 'react-icons/bs'

const navlinks: NavCompositionProps = [
	{
		title: 'General',
		path: '/backoffice/sistema',
	},
	{
		title: 'Entornos',
		path: '/backoffice/sistema/configuraciones',
	},
	{
		title: 'Integraciones',
		path: '/backoffice/sistema/configuraciones',
	},
]

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SubNavbar pathRoutes={navlinks} />
			{children}
		</>
	)
}
