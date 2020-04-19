enum ErrorType {
	INTEGRATION_ERROR = 'IntegrationError',
}

export type ErrorInfo = {
	type: ErrorType
	message: string
}

export const createError = (message: string): ErrorInfo => ({
	type: ErrorType.INTEGRATION_ERROR,
	message,
})
