import {
	console,
} from 'libram'
import { beforePvp } from './beforePvp'

export function pvp(pvpArguments: string[]): void {
	const command = pvpArguments[0] || ''
	switch (command.toLowerCase()) {
		case 'beforepvp':
			beforePvp()
			break
		default:
			console.log(`${command} is not a recognized command`)
	}
}
