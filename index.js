module.exports = function getDeepValue(base, path, fallback = null) {
	let curVarScope = base

	const segments = path
		.replace('[','.').replace(']','')
		.split('.')
		.filter(segment => segment.length)

	for (let i = 0; i < segments.length; i++) {
		const nextVarScope = curVarScope[segments[i]]

		// This is the target deep value
		if (i + 1 === segments.length) return nextVarScope
		// This value is null, but the target is deeper
		if (i + 1 !== segments.length && nextVarScope === null) return fallback
		// This value is not an object, but the target is deeper
		if (typeof nextVarScope !== 'object') return fallback

		curVarScope = nextVarScope
	}
}
