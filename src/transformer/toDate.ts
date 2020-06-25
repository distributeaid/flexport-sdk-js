export const toDateOrUndefined = (v?: string): Date | undefined =>
	v !== undefined ? new Date(v) : undefined
