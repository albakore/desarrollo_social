import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";

export function HeaderDescription(props: HeaderDescriptionProps) {
  return (
    <Box
      borderBottom={'1px solid'}
      borderColor={'bg.emphasized'}
      paddingBlock={8}
      mb={12}
    >
      <Container maxW={'7xl'}>
        <Stack
          direction={
            {
              base: 'column',
              md: 'row'
            }
          }
          alignItems={
            {
              base: 'start',
              md: 'center'
            }
          }
        >
          <Stack gap={4} w={'full'}>
            <Heading fontSize={'3xl'}>{props.title}</Heading>
            <Text fontSize={'sm'}>{props.description}</Text>
          </Stack>
          <Stack
            w={'full'}
            direction={{ base: 'column', md: 'row' }}
            gap={5}>
            {props.children}

          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
