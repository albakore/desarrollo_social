'use client'
import { Box, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { NavbarDesktop } from './device/navbar-desktop'
import { NavbarMobile } from './device/navbar-mobile'

export function Navbar() {
	const device = useBreakpointValue(
		{
			base: <NavbarMobile/>,
			md: <NavbarMobile/>,
			lg: <NavbarDesktop/>,
		}
	)
	return (
		<>{device}</>
	)
}

