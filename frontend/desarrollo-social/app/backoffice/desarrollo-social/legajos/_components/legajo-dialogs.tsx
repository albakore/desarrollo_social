'use client'
import { CloseButton } from '@/components/ui/close-button'
import { Button, Dialog, Portal } from '@chakra-ui/react'
import React from 'react'
import { NuevoLegajoForm } from './legajo-forms'

export function NuevoLegajoDialog() {
  const contentRef = React.useRef<HTMLDivElement>(null)
  return (
    <Dialog.Root size={'xl'} placement={'center'}>
      <Dialog.Trigger asChild>
        <Button>
          Nuevo
        </Button>
      </Dialog.Trigger>
      <Portal container={contentRef}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content ref={contentRef}>
            <Dialog.Header>
              <Dialog.Title>Nuevo Legajo</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <NuevoLegajoForm reference={contentRef}/>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button type='submit'>Crear Legajo</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

