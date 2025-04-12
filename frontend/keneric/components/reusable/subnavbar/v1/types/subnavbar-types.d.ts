type SubNavbarProps = {
	pathRoutes : NavCompositionProps
}

type NavCompositionProps = NavlinkProps[]

type NavlinkProps = {
	title: string
	path: string
	external?: boolean = false
	icon?: React.ReactNode
	disabled?: boolean = false
}