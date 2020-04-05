export const headers = ({ apiKey }: { apiKey: string }) => ({
	Authorization: `Bearer ${apiKey}`,
	'Content-Type': 'application/json',
	'Flexport-Version': 2,
})
