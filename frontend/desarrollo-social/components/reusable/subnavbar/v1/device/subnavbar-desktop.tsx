import { ColorModeButton } from '@/components/ui/color-mode'
import { Avatar, Box, Button, Icon, IconButton, Image, Link as ChakraLink, Menu, Portal, Spacer, Stack, Tabs, For } from '@chakra-ui/react'
import { FaPlus } from "react-icons/fa";
import React from 'react'
import { redirect, usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export function SubNavbarDesktop(props: SubNavbarProps) {
  return (
    <Box
      bg={'bg.subtle'}
      w={'full'}
      alignContent={'center'}
      paddingInline={4}
      paddingBottom={0}
      borderBottom={'1px solid'}
      borderColor={'bg.emphasized'}
    >
      <TabNavigator pathRoutes={props.pathRoutes}/>
    </Box>
  )
}

function TabNavigator(props: SubNavbarProps) {
  const router = useRouter()
  const path = usePathname()
  return (
    <Tabs.Root
      defaultValue={path.slice(1)}
      navigate={({ value, node }) => router.push(`/${value}`)}
    >
      <Tabs.List border={0}>

      <NavComposition list_links={props.pathRoutes}/>
        <Tabs.Indicator bgColor={'bg.emphasized'} />
      </Tabs.List>
    </Tabs.Root>
  )
}

function NavComposition({ list_links }: { list_links: NavCompositionProps }) {
  return (
    <For each={list_links}>
      {(item, index) => {
        return <NavLink key={index} {...item}/>
      }}
    </For>
  )
}

function NavLink(props: NavlinkProps) {

  return (
    <Tabs.Trigger
      value={props.path.slice(1)}
      asChild
      disabled={props.disabled}
    >
      <ChakraLink
        as={Link}
        unstyled
        href={props.disabled ? '#': props.path}
      >
        {props.icon}
        {props.title}
      </ChakraLink>
    </Tabs.Trigger>
  )
}