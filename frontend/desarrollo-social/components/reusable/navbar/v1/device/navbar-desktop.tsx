import { ColorModeButton } from '@/components/ui/color-mode'
import { Avatar, Box, Button, Icon, IconButton, Image, Link, Menu, Portal, Spacer, Stack } from '@chakra-ui/react'
import { FaPlus } from "react-icons/fa";
import React from 'react'
import { redirect } from 'next/navigation';

export function NavbarDesktop() {
  return (
    <Box
      as='header'
      bg={'bg.subtle'}
      w={'full'}
      h={'50px'}
      alignContent={'center'}
      paddingInline={4}
      borderBottom={'1px solid'}
      borderColor={'bg.emphasized'}
    >
      <Stack as='nav' direction={'row'} alignItems={'center'}>
        <Image w='35px' h={'35px'} rounded="md" src="/favicon.ico" alt="App" />
        

        <Stack
          direction={'row'}
          gap={5}
          marginInline={10}
          fontSize={'sm'}
          alignContent={'center'}
          alignItems={'center'}
        >
          <Link focusRing={'none'} href='/backoffice/dashboard'>Dashboard</Link>
          <Link focusRing={'none'} href='/backoffice/gestionar'>Gestion</Link>
          <Link focusRing={'none'} href='/backoffice/desarrollo-social'>Desarrollo Social</Link>
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
            <Menu.Item value="new-txt-a" asChild >
              <Link focusRing={'none'} href='/backoffice/perfil/configuracion'>Mi Cuenta</Link>
            </Menu.Item>
            <Menu.Item value="new-file-a" asChild>
            <Link focusRing={'none'} href='/backoffice/perfil/configuracion'>Configuraciones</Link>
            </Menu.Item>
            <Menu.Item value="new-win-a" asChild>
            <Link focusRing={'none'} href='/backoffice/perfil/configuracion'>Sistema</Link>
            </Menu.Item>
            <Menu.Item value="open-file-a"asChild>
            <Link focusRing={'none'} href='/backoffice/perfil/configuracion'>Ayuda</Link>
            </Menu.Item>
            <Menu.Item value="export-a" color={'red.focusRing'} onClick={()=> redirect('/login')}>
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
