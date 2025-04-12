import { Navbar } from '@/components/reusable/navbar/v1/navbar'
import { SubNavbar } from '@/components/reusable/subnavbar/v1/subnavbar'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { ReactFormState } from 'react-dom/client'
import { Bs0Circle } from 'react-icons/bs'

const navlinks: NavCompositionProps = [
	{
		title: 'General',
		path: '/backoffice/desarrollo-social',
	},
	{
		title: 'Legajos',
		path: '/backoffice/desarrollo-social/legajos',
	},
	{
		title: 'Derivaciones',
		path: '/backoffice/desarrollo-social/derivaciones',
	},
	{
		title: 'Admisiones',
		path: '/backoffice/desarrollo-social/admisiones',
	},
	{
		title: 'Intervenciones',
		path: '/backoffice/desarrollo-social/intervenciones',
	},
	{
		title: 'Alertas',
		path: '/backoffice/desarrollo-social/alertas',
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
