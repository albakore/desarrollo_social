'use client'
import {
  Button,
  ClientOnly,
  ConditionalValue,
  Field,
  Fieldset,
  For,
  Input,
  ListCollection,
  NativeSelect,
  Stack,
} from "@chakra-ui/react"

import { Portal, Select, createListCollection } from "@chakra-ui/react"

export function NuevoLegajoForm({ reference }: { reference: React.RefObject<HTMLDivElement> }) {
  return (
    <Stack direction={{ base: 'column', md: 'row' }}>
      <DatosPersonalesForm ref={reference} />
      <DatosUbicacionForm ref={reference} />
    </Stack>
  )
}


function DatosPersonalesForm({ ref }: { ref: React.RefObject<HTMLDivElement> }) {
  return (
    <Fieldset.Root size="lg" maxW="sm">
      <Stack>
        <Fieldset.Legend>Datos personales</Fieldset.Legend>
        <Fieldset.HelperText>
          Ingresar los datos basicos de la persona.
        </Fieldset.HelperText>
      </Stack>

      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Nombre</Field.Label>
          <Input name="nombre" size={'sm'} />
        </Field.Root>

        <Field.Root>
          <Field.Label>Apellido</Field.Label>
          <Input name="apellido" type="email" size={'sm'} />
        </Field.Root>

        <Field.Root>
          <Field.Label>Fecha de nacimiento</Field.Label>
          <Input name="fec_nac" type="date" size={'sm'} />
        </Field.Root>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <FormSelector
            label="Tipo de documento"
            collection={tiposDocumento}
            placeholder="Seleccionar"
            ref={ref}
            size={'sm'}
          />

          <Field.Root>
            <Field.Label>Numero de documento</Field.Label>
            <Input name="num_doc" type="text" size={'sm'} />
          </Field.Root>
        </Stack>

      </Fieldset.Content>
    </Fieldset.Root>
  )
}

function DatosUbicacionForm({ ref }: { ref: React.RefObject<HTMLDivElement> }) {
  return (
    <Fieldset.Root size="lg" maxW="xs">
      <Stack>
        <Fieldset.Legend>Informacion de ubicacion</Fieldset.Legend>
        <Fieldset.HelperText>
          Ingrese datos de ubicacion.
        </Fieldset.HelperText>
      </Stack>

      <Fieldset.Content>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Field.Root>
            <FormSelector
              label="Pais"
              collection={listaPaises}
              placeholder="Seleccionar"
              ref={ref}
              size={'sm'}
            />
          </Field.Root>

          <Field.Root>
            <FormSelector
              label="Provincia"
              collection={listaProvincias}
              placeholder="Seleccionar"
              ref={ref}
              size={'sm'}
            />
          </Field.Root>
        </Stack>

        <Stack direction={{ base: 'column', md: 'row' }}>
          <Field.Root w={'100%'}>
            <FormSelector
              label="Localidad"
              collection={tiposLocalidades}
              placeholder="Seleccionar"
              ref={ref}
              size={'sm'}
              
              
            />
          </Field.Root>

          <Field.Root w={'50%'}>
            <Field.Label>Codigo Postal</Field.Label>
            <Input name="codigopostal" type="number" size={'sm'} />
          </Field.Root>

        </Stack>

      </Fieldset.Content>
    </Fieldset.Root >
  )
}


type SelectorProps = {
  ref?: React.RefObject<HTMLDivElement>
  label?: string
  placeholder?: string
  collection: ListCollection
  size?: ConditionalValue<"sm" | "md" | "lg" | "xs" | undefined>
  w?: ConditionalValue< string | number | undefined>
}

function FormSelector(props: SelectorProps) {
  return (
    <Select.Root collection={props.collection} size={props?.size} w={props.w}>
      <Select.HiddenSelect />
      <Select.Label>{props?.label}</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={props.placeholder} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal container={props.ref}>
        <Select.Positioner>
          <Select.Content>
            {props?.collection?.items.map((item) => (
              <Select.Item item={item} key={item.value}>
                {item.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const tiposDocumento = createListCollection({
  items: [
    { label: "DNI", value: "DNI" },
    { label: "CUIL", value: "CUIL" },
    { label: "CUIT", value: "CUIT" },
    { label: "Pasaporte", value: "PAS" },
    { label: "Libreta de enrolamiento", value: "CUD" },
  ],
})

const listaPaises = createListCollection({
  items: [
    { label: "Argentina", value: "Argentina" },
    { label: "Uruguay", value: "Uruguay" },
    { label: "Chile", value: "Chile" },
    { label: "Bolivia", value: "Bolivia" },
    { label: "Venezuela", value: "Venezuela" },
  ],
})

const listaProvincias = createListCollection({
  items: [
    { label: "Buenos Aires", value: "Buenos Aires" },
    { label: "Cordoba", value: "Cordoba" },
    { label: "Entre Rios", value: "Entre Rios" },
    { label: "Mendoza", value: "Mendoza" },
    { label: "La Pampa", value: "La Pampa" },
  ],
})

const tiposLocalidades = createListCollection({
  items: [
    { label: "CABA", value: "CABA" },
    { label: "Junin", value: "Junin" },
    { label: "Chivilcoy", value: "Chivilcoy" },
    { label: "3 de febrero", value: "3 de febrero" },
    { label: "Lujan", value: "Lujan" },
    { label: "Pilar", value: "Pilar" },
  ],
})