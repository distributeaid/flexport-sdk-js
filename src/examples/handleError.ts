export const handleError = (err: Error): void => {
	console.error(err)
	process.exit(1)
}
