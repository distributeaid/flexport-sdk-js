export const toDateOrUndefined = (v?: string): Date | undefined =>
	v ? new Date(v) : undefined
