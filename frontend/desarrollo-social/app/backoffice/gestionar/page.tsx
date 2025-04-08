import { HeaderDescription } from "@/components/reusable/header_description/v1/header-description";
import { Button, Spacer } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <HeaderDescription
        title={'Dashboard'}
        description={'Lorem'}
      >
        <Spacer/>
        <Button>Iniciar proceso</Button>
        <Button variant={'outline'}>Cambiar dato</Button>
        <Button variant={'subtle'}>Nuevo</Button>
      </HeaderDescription>

    </>
  );
}
