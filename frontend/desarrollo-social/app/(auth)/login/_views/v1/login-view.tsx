import { Box, Center, Stack } from '@chakra-ui/react'
import React from 'react'
import { PlaneBackground } from '../../_components/backgrounds'
import LoginForm from '../../_components/forms'

export function LoginView() {
  return (
    <Box
      w={'100%'}
      h={'100vh'}
    >
      <Stack w={'full'} h={'full'} direction={'row'}>
        {/* <PlaneBackground /> */}
        <Box w={'100%'}>
          <Center h={'full'}>
          <LoginForm/>
        </Center>
        </Box>
      </Stack>
  </Box>
  )
}
