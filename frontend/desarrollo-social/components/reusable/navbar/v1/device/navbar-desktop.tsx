import { ColorModeButton } from '@/components/ui/color-mode'
import { Avatar, Box, Button, Icon, IconButton, Image, Link, Menu, Portal, Spacer, Stack } from '@chakra-ui/react'
import { FaPlus } from "react-icons/fa";
import React from 'react'

export function NavbarDesktop() {
  return (
    <Box
      as='header'
      bg={'bg.emphasized'}
      w={'full'}
      h={'50px'}
      alignContent={'center'}
      paddingInline={4}

    >
      <Stack as='nav' direction={'row'} alignItems={'center'}>
        <Image w='35px' h={'35px'} rounded="md" src="favicon.ico" alt="App" />
        

        <Stack
          direction={'row'}
          gap={5}
          marginInline={10}
          fontSize={'sm'}
          alignContent={'center'}
          alignItems={'center'}
        >
          <Link>Dashboard</Link>
          <Link>Legajos</Link>
          <Link>Comedores</Link>
          <NewButton/>
        </Stack>
        <Spacer />
        <Stack direction={'row'}>
          <ProfileButton />
          <ColorModeButton size={'md'}/>
        </Stack>
      </Stack>
    </Box>
  )
}

function ProfileButton() {
  return (
    <Menu.Root>
      <Menu.Trigger>
        <Avatar.Root shape="rounded" size="sm" cursor={'button'}>
          <Avatar.Fallback name="Kevin Kener" />
          <Avatar.Image src="https://bit.ly/dan-abramov" />
        </Avatar.Root>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt-a">
              Mi Cuenta
            </Menu.Item>
            <Menu.Item value="new-file-a">
              Configuraciones
            </Menu.Item>
            <Menu.Item value="new-win-a">
              Sistema
            </Menu.Item>
            <Menu.Item value="open-file-a">
              Ayuda
            </Menu.Item>
            <Menu.Item value="export-a" color={'red.focusRing'}>
              Cerrar Session
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

function NewButton() {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
      <Button size={'xs'}><FaPlus /> Nuevo</Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt-a">
              Legajo
            </Menu.Item>
            <Menu.Item value="new-file-a">
              Comedor
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
