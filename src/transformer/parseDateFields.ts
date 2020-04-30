export const parseDateFields = <
	F extends string,
	A extends { [key: string]: any }
>(
	apiResponseObject: A,
	dateFields: readonly F[],
): { [key in F]: Date | undefined } =>
	dateFields.reduce(
		(d, f) => ({
			...d,
			[f]: apiResponseObject[f] ? new Date(apiResponseObject[f]) : undefined,
		}),
		{} as { [key in F]: Date | undefined },
	)
