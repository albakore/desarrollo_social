'use client'
import { HeaderDescription } from "@/components/reusable/header_description/v1/header-description";
import { Sidebar } from "@/components/reusable/sidebar/v1/sidebar";
import { Box, Button, Container, Spacer, Stack } from "@chakra-ui/react";
import { sidebarOptions } from "@/components/reusable/sidebar/v1/sidebar-mock";
import { ConfigOption } from "@/components/reusable/config-option/v1/config-option";

export default function Sistema() {
  return (
    <>
      <HeaderDescription
        title={'Sistema'}
        description={'Lorem'}
      >
        <Spacer />
        <Button>Iniciar proceso</Button>
        <Button variant={'outline'}>Cambiar dato</Button>
        <Button variant={'subtle'}>Nuevo</Button>
      </HeaderDescription>
      <Container maxW={'7xl'}>
        <Stack w={'inherit'} direction={'row'} gap={14}>
          <Box flexShrink={0}>
            <Sidebar items={sidebarOptions} />
          </Box>
          <Stack w={'inherit'} direction={'column'} gap={8}>
            <ConfigOption
              title="Variable"
              description="Esto es una descripcion corta para modificar el valor."
              FooterActions={
                <Button variant={'outline'} size={'sm'}>Hola</Button>
              }
              />

            <ConfigOption
              title="Variable"
              description="Esto es una descripcion larga que aporta mucha mas informacion para cuando el usuario necesite hacer alguna modificacion en esta variable y luego guardarla o eliminarla"
              HeaderActions={
                <Button size={'sm'}>Hola</Button>
              }
              FooterActions={
                <Button variant={'outline'} size={'sm'}>Hola</Button>
              }
            />
          </Stack>
        </Stack>

      </Container>
    </>
  );
}

