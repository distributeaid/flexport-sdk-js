import { ApiObject } from '../types'

export const parseDateFields = (
	apiResponseObject: ApiObject,
	dateFields: string[],
) =>
	dateFields.reduce(
		(d, f) => ({
			...d,
			[f]: apiResponseObject[f] ? new Date(apiResponseObject[f]) : undefined,
		}),
		{} as { [key: string]: Date | undefined },
	)
