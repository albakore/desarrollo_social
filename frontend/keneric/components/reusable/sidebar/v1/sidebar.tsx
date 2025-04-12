'use client'
import { InputGroup } from '@/components/ui/input-group'
import { Box, For, GridItem, Input, Link, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { LuSearch } from 'react-icons/lu'

const PathStore = React.createContext(null)

function useSearchSidebarOption(list_options: SidebarItemProps[]) {
  const [options, setOptions] = React.useState(list_options)

  const normalize = (str: string) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()

  const getSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = normalize(e.target.value)

    const filtered = list_options.filter((item) =>
      normalize(item.title).includes(search)
    )

    setOptions(filtered)
  }

  return { options, getSearch }
}

export function Sidebar(props: SidebarProps) {

  const { options, getSearch } = useSearchSidebarOption(props.items)

  return (
    <Box>
      <InputGroup flex="1" startElement={<LuSearch />} mb={8}>
        <Input
          placeholder="Buscar seccion"
          size={'sm'}
          onChange={getSearch}
        />
      </InputGroup>

      <Stack paddingInline={3} gap={4}>
        <For each={options}>
          {
            (option, index) => (
              <SidebarItem key={index} {...option} />
            )
          }
        </For>
      </Stack>



    </Box>
  )
}

function SidebarItem(props: SidebarItemProps) {
  return (
    <Link
      focusRing={'none'}
      unstyled
      href={props.path}
      fontSize={'sm'}
    >
      {props.title}
    </Link>
  )
}
