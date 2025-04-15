'use client'
import { InputGroup } from "@/components/ui/input-group";
import { Box, Button, Collapsible, Container, Flex, Input, SimpleGrid, Skeleton, Spacer, Stack, Text, Wrap } from "@chakra-ui/react";
import React from "react";
import { CiCircleChevDown } from "react-icons/ci";
import { LuSearch } from "react-icons/lu";

export default function Home() {
  return (
    <Box as={'main'}
      w={'full'}
      h={'100vh'}
    >
      <Container maxW={'8xl'} h='inherit'>
        <Stack
          direction={'row'}
          w={'inherit'}
          h={'inherit'}
        >
          <BarProperties />
          <FormViewport />
          <BarFormComponents />

        </Stack>
      </Container>

    </Box>
  );
}

function FormViewport() {
  return (
    <Box
      w={'full'}
      pt={10}
    >
      <Stack>
        <Skeleton
          w={'full'}
          h={'100px'}
        />
        <Skeleton
          w={'full'}
          h={'100px'}
        />
        <Skeleton
          w={'full'}
          h={'100px'}
        />
        <Skeleton
          w={'full'}
          h={'100px'}
        />
        <Skeleton
          w={'full'}
          h={'100px'}
        />
        <Skeleton
          w={'full'}
          h={'100px'}
        />
        <Skeleton
          w={'full'}
          h={'100px'}
        />
        <Skeleton
          w={'full'}
          h={'100px'}
        />
        <Skeleton
          w={'full'}
          h={'100px'}
        />
        <Skeleton
          w={'full'}
          h={'100px'}
        />
        <Skeleton
          w={'full'}
          h={'100px'}
        />
        <Skeleton
          w={'full'}
          h={'100px'}
        />
        <Skeleton
          w={'full'}
          h={'100px'}
        />
        <Skeleton
          w={'full'}
          h={'100px'}
        />
        <Skeleton
          w={'full'}
          h={'100px'}
        />
      </Stack>
    </Box>
  )
}

function BarProperties() {
  return (
    <Box
      borderRight={'1px solid'}
      borderColor={'bg.emphasized'}
      w={500}
      maxH={'100vh'}
      left={0}
      pt={10}
    >
      <InputGroup flex="1" startElement={<LuSearch />} mb={8}>
        <Input
          placeholder="Buscar seccion"
          size={'sm'}
        />
      </InputGroup>
    </Box>
  )
}

function BarFormComponents() {
  return (
    <Stack
      borderLeft={'1px solid'}
      borderColor={'bg.emphasized'}
      position={'sticky'}
      direction={'column'}
      alignContent={'start'}
      top={0}
      w={500}
      right={0}
      pt={10}
    >
      <InputGroup flex="1" startElement={<LuSearch />} mb={8}>
        <Input
          placeholder="Buscar seccion"
          size={'sm'}
        />
      </InputGroup>

      <Box overflowY={'auto'} bg={'bg.panel'}>
      <ItemCategories />
      <ItemCategories />
      <ItemCategories />
      <ItemCategories />
      <ItemCategories />
      <ItemCategories />

      </Box>
    </Stack>
  )
}

function ItemCategories() {
  const ref = React.useRef<HTMLElement>(null)

  const setDataState = (e: any) => {
    if (e.open) {
      ref.current?.setAttribute('data-state', 'open')
      return
    }
    ref.current?.setAttribute('data-state', 'closed')
    return
  }

  React.useEffect(() => {
    setDataState({ open: true })
  }, [])

  return (
    <Collapsible.Root
      w={'full'}
      defaultOpen={true}
      onOpenChange={e => setDataState(e)}
    >
      <Collapsible.Trigger w={'full'} marginBlock={3} asChild>
        <Button
          w={'full'}
          rounded={'none'}
          variant={'plain'}
          borderBottom={'1px solid'}
          borderBottomColor={'bg.invert'}
        >
          Toggle Collapsible
          <Spacer />
          <Box
            ref={ref}
            data-state='closed'
            transition={'transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1);'}
            _open={{
              transform: 'rotate(0deg)',
            }}
            _closed={{

              transform: 'rotate(-90deg)',
            }}
          >
            <CiCircleChevDown />

          </Box>
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Wrapped />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

function Wrapped() {
  return (
    <Wrap gap="2">
      <Skeleton
        w={'70px'}
        h={'70px'}
      />
      <Skeleton
        w={'70px'}
        h={'70px'}
      />
      <Skeleton
        w={'70px'}
        h={'70px'}
      />
      <Skeleton
        w={'70px'}
        h={'70px'}
      />
      <Skeleton
        w={'70px'}
        h={'70px'}
      />
      <Skeleton
        w={'70px'}
        h={'70px'}
      />
    </Wrap>
  )
}