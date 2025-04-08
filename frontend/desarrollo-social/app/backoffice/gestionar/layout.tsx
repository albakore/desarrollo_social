import { Navbar } from '@/components/reusable/navbar/v1/navbar'
import { SubNavbar } from '@/components/reusable/subnavbar/v1/subnavbar'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { ReactFormState } from 'react-dom/client'
import { Bs0Circle, BsArrowBarUp } from 'react-icons/bs'

const navlinks: NavCompositionProps = [
	{
		title: 'General',
		path: '/backoffice/gestionar',
	},
	{
		title: 'Programas',
		path: '/backoffice/gestionar/programas',
	},
	{
		title: 'Comedores',
		path: '/backoffice/gestionar/comedores',
	},
	{
		title: 'Proveedores',
		path: '/backoffice/gestionar/stock',
	},
	{
		title: 'Gastos',
		path: '/backoffice/gestionar/gastos',
	},
	{
		title: 'Stock',
		path: '/backoffice/gestionar/stock',
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
