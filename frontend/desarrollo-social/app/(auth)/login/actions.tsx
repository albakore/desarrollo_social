'use server'

import { redirect } from "next/navigation"


export async function login(state : any, formdata: FormData) {
	const user = formdata.get('user')
	const password = formdata.get('password')
	await new Promise((resolve) => setTimeout(resolve, 500));
	if (user !== 'admin' || password !== 'admin') {
		console.log('Usuario y/o contraseña incorrecto')
		return {
			status: 404,
			error: true,
			message: 'Usuario y/o contraseña incorrecto'
		}
	}
	redirect('/panel')
	

	
	
	
}