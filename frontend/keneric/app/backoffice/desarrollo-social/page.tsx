import { HeaderDescription } from "@/components/reusable/header_description/v1/header-description";
import { Button } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <HeaderDescription
        title={'Desarrollo Social'}
        description={'Seguimiento y control de legajos.'}
      >
        {/* <Button>Iniciar proceso</Button>
        <Button variant={'outline'}>Cambiar dato</Button>
        <Button variant={'subtle'}>Nuevo</Button> */}
      </HeaderDescription>

    </>
  );
}
