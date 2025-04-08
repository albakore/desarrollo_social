import { Menu, Avatar, Portal, Link, For } from '@chakra-ui/react'
import { redirect } from 'next/navigation'
import React from 'react'

export function AccountButton(props : AccountButtonProps) {
  return (
    <Menu.Root>
      <Menu.Trigger>
        <AccountAvatar {...props.avatar}/>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <AccountMenuContent items={props.items}/>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export function AccountMenuContent(props: AccountMenuContentProps) {
  return (
    <Menu.Content>
      <For each={props.items}>
        {(item, index) => <AccountMenuItem key={index} {...item} />}
      </For>
    </Menu.Content>
  )
}

function AccountMenuItem(props: AccountMenuItemProps) {
  return (
    <Menu.Item
      value={props.title}
      disabled={props.disabled}
      bg={props.bg ?? props.bg + '.emphasized'}
      _hover={props.bg ? { bg: props.bg + '.muted' } : {}}
      onClick={props.onClick}
    >
      <Link unstyled href={props.path}>
        {props.title}
      </Link>
    </Menu.Item>
  )
}

function AccountAvatar(props : AccountAvatarProps) {
  return (
    <Avatar.Root shape="rounded" size="sm" cursor={'button'}>
      <Avatar.Fallback name={props.name} />
      <Avatar.Image src={props.imageUrlPath} />
    </Avatar.Root>
  )
}