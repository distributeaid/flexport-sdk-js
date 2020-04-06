export const headers = ({ apiKey }: { apiKey: string }) => ({
	Authorization: `Bearer ${apiKey}`,
	Accept: 'application/json',
	'Content-Type': 'application/json',
	'Flexport-Version': 2,
})
