import { Box, Button, Card, Heading, Input, Show, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export function ConfigOption(props: ConfigOptionProps) {
  return (
    <Card.Root w={'inherit'}>
      <Card.Header>
        <Stack direction={'row'}>
          <Heading>{props.title}</Heading>
          <Show when={props?.HeaderActions}>
            <Spacer />
            {props.HeaderActions}
          </Show>
        </Stack>
        <Show when={props?.description}>
          <Text fontSize={'sm'}>
            {props.description}
          </Text>
        </Show>



      </Card.Header>
      <Card.Body>
      <form id=''>
        <Input />
      </form>
      </Card.Body>
      <Card.Footer
        alignItems={'center'}
        paddingBlock={3}
        borderTop={'1px solid'}
        borderColor={'bg.emphasized'}
      >
        Hola
        <Show when={props?.FooterActions}>
          <Spacer />
          {props.FooterActions}
        </Show>
        </Card.Footer>
    </Card.Root>
  )
}
<Button size={'sm'}>Save</Button>