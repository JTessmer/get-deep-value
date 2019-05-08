module.exports = function getDeepValue(base, path, fallback = null) {
	let curVarScope = base

	const segments = path
		.replace('[','.').replace(']','')
		.split('.')
		.filter(segment => segment.length)

	for (let i = 0; i < segments.length; i++) {
		if (typeof curVarScope[segments[i]] === 'undefined') return fallback
		if (i + 1 === segments.length) return curVarScope[segments[i]]

		curVarScope = curVarScope[segments[i]]
	}
}
