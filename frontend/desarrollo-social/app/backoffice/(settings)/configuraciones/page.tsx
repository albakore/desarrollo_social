import { ArgentinaMap, MapInteractive } from "@/components/reusable/maps/argentina/v1/argentina-map";
import { Box } from "@chakra-ui/react";

export default function Configuracion() {
  return (
    <Box h={'100%'} w={500} border={'1px solid'}>
      <MapInteractive
      country={ArgentinaMap}
      />
      
    </Box>
  );
}
