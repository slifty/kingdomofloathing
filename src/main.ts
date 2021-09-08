import { console } from 'libram'
import {
	initialize,
	pvp,
} from './scripts'
import { parseArgumentString } from './utils'

export function main(mafiaArgumentString = ''): void {
	const mafiaArguments = parseArgumentString(mafiaArgumentString)
	const command = mafiaArguments[0] || ''
	const commandArguments = mafiaArguments.slice(1)
	switch (command.toLowerCase()) {
		case 'initialize':
			initialize(commandArguments)
			break

		case 'pvp':
			pvp(commandArguments)
			break

		default:
			console.log(`On the one hand it works, but on the other hand it does absolutely nothing... (${command})`)
	}
}
