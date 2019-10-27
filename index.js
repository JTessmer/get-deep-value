module.exports = function getDeepValue(base, path, fallback = null) {
	let curVarScope = base

	const segments = path
		.replace('[','.').replace(']','')
		.split('.')
		.filter(segment => segment.length)

	for (let i = 0; i < segments.length; i++) {
		const nextVarScope = curVarScope[segments[i]]

		if (i + 1 === segments.length) return nextVarScope
		if (typeof nextVarScope !== 'object') return fallback

		curVarScope = nextVarScope
	}
}
