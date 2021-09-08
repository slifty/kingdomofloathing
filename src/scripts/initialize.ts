import {
	console,
	property,
} from 'libram'

function initializePvp(): void {
	property.setProperties({
		beforePVPScript: 'scripty pvp beforePvP',
	})
}

export function initialize(initializeArguments: string[]): void {
	const initializationTarget = initializeArguments[0] || ''
	switch (initializationTarget.toLowerCase()) {
		case 'all':
			initializePvp()
			break
		case 'pvp':
			initializePvp()
			break
		default:
			console.log('What exactly do you think is going to be initialized here?')
	}
}
