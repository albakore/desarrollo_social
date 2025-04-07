import { HeaderDescription } from "@/components/reusable/header_description/v1/header-description";
import { InputGroup } from "@/components/ui/input-group";
import { Button, Input, Stack } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { NuevoLegajoDialog } from "./_components/legajo-dialogs";

export default function Page() {
  return (
    <>
      <HeaderDescription
        title={'Legajos'}
        description={'Seguimiento y control de legajos.'}
      >
        <InputGroup flex="1" startElement={<LuSearch />}>
          <Input placeholder="Buscar legajo" />
        </InputGroup>
        <NuevoLegajoDialog/>
      </HeaderDescription>

    </>
  );
}
