type PathContextProps = {
	items: SidebarItemProps[]
	children?: React.ReactNode
}

type SidebarProps = {
	items : SidebarItemProps[]
}

type SidebarItemProps = {
	title: string
	path: string
}