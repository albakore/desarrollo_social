'use client'
import { useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { SubNavbarMobile } from './device/subnavbar-mobile'
import { SubNavbarDesktop } from './device/subnavbar-desktop'
import { usePathname } from 'next/navigation'


export function SubNavbar(props: SubNavbarProps) {
	const path = usePathname()
	const device = useBreakpointValue(
		{
			// base: <SubNavbarMobile/>,
			md: <SubNavbarDesktop pathRoutes={props.pathRoutes}/>,
			lg: <SubNavbarDesktop pathRoutes={props.pathRoutes}/>,
		}
	)
	return (
		<>{device}</>
	)
}
