type AccountButtonProps = {
	avatar : AccountAvatarProps
	items : AccountMenuItemProps[]
}

type AccountAvatarProps = {
	name: string
	imageUrlPath: string
}

type AccountMenuContentProps = {
	items : AccountMenuItemProps[]
}

type AccountMenuItemProps = {
	title: string
	path: string
	disabled?: boolean = false
	color?: string
	bg?: string
	onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}