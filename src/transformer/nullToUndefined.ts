export const nullToUndefined = (o: unknown): any => {
	if (o === null) return undefined
	if (typeof o !== 'object') return o
	if (Array.isArray(o)) return o.map(nullToUndefined)
	return Object.entries(o as object).reduce(
		(o, [k, v]) => ({
			...o,
			[k]: v === null ? undefined : nullToUndefined(v),
		}),
		{},
	)
}
