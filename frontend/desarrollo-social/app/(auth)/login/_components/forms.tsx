'use client'
import { PasswordInput } from '@/components/ui/password-input'
import { Button, Field, Fieldset, For, Input, NativeSelect, Stack } from '@chakra-ui/react'
import React from 'react'
import { login } from '../actions'

export default function LoginForm() {
	const [state, formAction, pending] = React.useActionState(login, null)

	return (
		<form action={formAction}>
			<Fieldset.Root
				size="lg"
				maxW="sm"
				border={'sm'}
				borderColor={'bg.emphasized'}
				p={8}
				rounded={'md'}
				shadow={'md'}
				invalid={state?.error}
			>
				<Stack>
					<Fieldset.Legend>Inicia Session</Fieldset.Legend>
					<Fieldset.HelperText>
						Ingresa tu usuario y contraseña para iniciar sesion en la plataforma.
					</Fieldset.HelperText>
				</Stack>

				<Fieldset.Content >
					<Field.Root invalid={state?.error}>
						<Field.Label>Usuario</Field.Label>
						<Input name="user" />
					</Field.Root>

					<Field.Root invalid={state?.error}>
						<Field.Label>Contraseña</Field.Label>
						<PasswordInput name="password" />
					</Field.Root>

				</Fieldset.Content>

				<Fieldset.ErrorText>
					{state?.message}
				</Fieldset.ErrorText>

				<Button type="submit" alignSelf="flex-start" disabled={pending} loading={pending}>
					Iniciar sesion
				</Button>
			</Fieldset.Root>
		</form>
	)
}
