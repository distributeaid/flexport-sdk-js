export const uniqueDeps = (deps: (string | { [key: string]: string })[] = []) =>
	deps.reduce((uniqueDeps, dep) => {
		if (typeof dep === 'object') {
			return {
				...(uniqueDeps as { [key: string]: string }),
				...(dep as object),
			}
		} else {
			return {
				...(uniqueDeps as { [key: string]: string }),
				[dep]: `./${dep}`,
			}
		}
	}, {} as { [key: string]: string })
