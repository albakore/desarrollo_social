import { HeaderDescription } from "@/components/reusable/header_description/v1/header-description";
import { Box, Button } from "@chakra-ui/react";

export default function Sistema() {
  return (
    <>
      <HeaderDescription
        title={'Sistema'}
        description={'Lorem'}
      >
        <Button>Iniciar proceso</Button>
        <Button variant={'outline'}>Cambiar dato</Button>
        <Button variant={'subtle'}>Nuevo</Button>
      </HeaderDescription>

    </>
  );
}

