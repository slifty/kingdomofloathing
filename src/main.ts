import { console } from 'libram'
import { initialize } from './scripts'
import { parseArgString } from './utils'

export function main(argString = ''): void {
	const args = parseArgString(argString)
	const command = args[0] || ''
	switch (command) {
		case 'initialize':
			initialize()
			break

		default:
			console.log('On the one hand it works, but on the other hand it does absolutely nothing...')
	}
}
