export const uniqueDeps = (deps: (string | { [key: string]: string })[] = []) =>
	deps.reduce((uniqueDeps, dep) => {
		if (typeof dep === 'object') {
			return {
				...(uniqueDeps as { [key: string]: string }),
				...(dep as Record<string, any>),
			}
		} else {
			return {
				...(uniqueDeps as { [key: string]: string }),
				[dep]: `./${dep}`,
			}
		}
	}, {} as { [key: string]: string })
