export const state = () => ({
	sketches: [
		{
			url: '/test',
			name: 'test',
			options: {
			}
		},

	]
})

export const getters = {
	GET_SKETCHES(state) {
		return state.sketches
	}
}
