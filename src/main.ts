import { console } from 'libram'
import { init } from './scripts/init'

export function main(argString = ''): void {
	switch (argString) {
		case 'init':
			init()
			break

		default:
			console.log('On the one hand it works, but on the other hand it does absolutely nothing...')
	}
}
