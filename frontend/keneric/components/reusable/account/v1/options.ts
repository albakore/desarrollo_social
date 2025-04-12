export const accountOptions: AccountButtonProps = {
	avatar: {
		name: 'Kevin Kener',
		imageUrlPath: 'https://bit.ly/dan-abramov',
	},
	items: [
		{
			title: 'Mi cuenta',
			path: '/backoffice/perfil/configuracion',
		},
		{
			title: 'Sistema',
			path: '/backoffice/sistema',
		},
		{
			title: 'Cerrar Sesion',
			path: '/login',
			color:'red.focusRing'
		},
	]
}